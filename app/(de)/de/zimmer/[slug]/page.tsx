import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoomPage from "@/components/pages/RoomPage";
import { findRoom, rooms } from "@/lib/data/rooms";
import { pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug.de }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = findRoom("de", params.slug);
  if (!room) return {};
  return pageMeta("de", "room", "Zimmer " + room.name.de, room.description.de, room.slug.it);
}

export default function Page({ params }: { params: { slug: string } }) {
  const room = findRoom("de", params.slug);
  if (!room) notFound();
  return <RoomPage lang="de" room={room} />;
}
