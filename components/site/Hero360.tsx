"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n/translations";

/**
 * Hero 360° — la foto sferica del salone (biliardo, divani, murale) proiettata
 * dentro una sfera Three.js. Gira lentamente da sola, si esplora trascinando
 * (mouse o dito) e con lo scroll la visuale si avvicina e ruota verso il murale.
 * Se WebGL non è disponibile resta visibile la foto statica di fallback.
 */

const HINT: Record<Lang, string> = {
  it: "Trascina per esplorare il salone",
  en: "Drag to explore the living room",
  de: "Ziehen, um den Salon zu erkunden",
  fr: "Faites glisser pour explorer le salon",
};

// Direzione iniziale (gradi): tavolo da biliardo al centro dell'inquadratura.
const START_LON = -184;
// Rotazione aggiunta a fine scroll dell'hero (verso il murale).
const SCROLL_LON = 55;
// Limiti verticali: sotto -22° si vedrebbe il bastone della fotocamera.
const LAT_MIN = -22;
const LAT_MAX = 28;
const AUTO_SPEED = 1.6; // gradi al secondo

export default function Hero360({ lang }: { lang: Lang }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      if (disposed) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
      } catch {
        return; // niente WebGL: resta la foto di fallback
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(72, 1, 1, 1100);

      const geometry = new THREE.SphereGeometry(500, 96, 64);
      geometry.scale(-1, 1, 1); // la texture si vede dall'interno
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      const small = window.matchMedia("(max-width: 767px)").matches;
      const maxTex = renderer.capabilities.maxTextureSize;
      const src = small || maxTex < 4096 ? "/360/sala-360-mobile.webp" : "/360/sala-360.webp";

      new THREE.TextureLoader().load(src, (tex) => {
        if (disposed) return;
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        material.map = tex;
        material.needsUpdate = true;
        setReady(true);
      });

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Stato della vista
      let lon = START_LON;
      let lat = 2;
      let dragLon = 0;
      let dragLat = 0;
      let dragging = false;
      let startX = 0;
      let startY = 0;
      let startLon = 0;
      let startLat = 0;
      let lastInteraction = -Infinity;
      let scroll = 0; // 0 → 1 lungo l'altezza dell'hero
      let smoothScroll = 0;

      const section = mount.parentElement as HTMLElement;

      const onDown = (e: PointerEvent) => {
        if (e.button !== undefined && e.button !== 0) return;
        dragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startLon = dragLon;
        startLat = dragLat;
        setTouched(true);
      };
      const onMove = (e: PointerEvent) => {
        if (!dragging) return;
        const k = 0.12;
        dragLon = startLon - (e.clientX - startX) * k;
        // Su touch lo spostamento verticale resta allo scroll della pagina
        if (e.pointerType === "mouse") dragLat = startLat + (e.clientY - startY) * k;
        lastInteraction = performance.now();
      };
      const onUp = () => {
        dragging = false;
        lastInteraction = performance.now();
      };
      section.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);

      const onScroll = () => {
        const h = section.offsetHeight || window.innerHeight;
        scroll = Math.min(1, Math.max(0, window.scrollY / h));
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      const resize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(resize);
      ro.observe(mount);
      resize();

      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      io.observe(section);

      const target = new THREE.Vector3();
      let prev = performance.now();
      let raf = 0;
      const smooth = (t: number) => t * t * (3 - 2 * t);

      const tick = (now: number) => {
        raf = requestAnimationFrame(tick);
        const dt = Math.min(0.05, (now - prev) / 1000);
        prev = now;
        if (!visible || document.hidden) return;

        // Rotazione automatica: si ferma mentre si trascina e riparte dopo 2,5 s
        if (!reduceMotion && !dragging && now - lastInteraction > 2500) {
          lon += AUTO_SPEED * dt;
        }

        smoothScroll += (scroll - smoothScroll) * Math.min(1, dt * 6);
        const s = smooth(smoothScroll);

        const aspect = camera.aspect;
        const baseFov = aspect < 0.8 ? 88 : aspect < 1.3 ? 80 : 72;
        camera.fov = baseFov - 16 * s;
        camera.updateProjectionMatrix();

        const wantLat = lat + dragLat - 6 * s;
        const totalLat = Math.max(LAT_MIN, Math.min(LAT_MAX, wantLat));
        if (totalLat !== wantLat) dragLat += totalLat - wantLat;

        const phi = THREE.MathUtils.degToRad(90 - totalLat);
        const theta = THREE.MathUtils.degToRad(lon + dragLon + SCROLL_LON * s);
        target.set(
          500 * Math.sin(phi) * Math.cos(theta),
          500 * Math.cos(phi),
          500 * Math.sin(phi) * Math.sin(theta),
        );
        camera.lookAt(target);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        section.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
        window.removeEventListener("scroll", onScroll);
        geometry.dispose();
        material.map?.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className={`absolute inset-0 -z-20 cursor-grab touch-pan-y transition-opacity duration-1000 active:cursor-grabbing ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-20 flex justify-center px-5 transition-opacity duration-700 sm:bottom-24 ${
          ready && !touched ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <span className="flex items-center gap-2 rounded-full border border-sabina-300/30 bg-sabina-950/45 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-sabina-100/90">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
            <path d="M5 1 1 5l4 4M13 1l4 4-4 4M1 5h16" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          {HINT[lang]}
        </span>
      </div>
    </>
  );
}
