import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomPage from "@/components/pages/RoomPage";
import { findRoom, rooms } from "@/lib/data/rooms";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug.en }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = findRoom("en", params.slug);
  if (!room) return {};
  return pageMeta("en", "room", room.name.en + " room", room.description.en, room.slug.it);
}

export default function Page({ params }: { params: { slug: string } }) {
  const room = findRoom("en", params.slug);
  if (!room) notFound();
  return <RoomPage lang="en" room={room} />;
}
