// app/events/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { events } from "@/lib/constants";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

/* ---------- Static Generation ---------- */
export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

/* ---------- SEO Metadata ---------- */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) return {};

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      images: [event.image],
    },
  };
}

/* ---------- Page Component ---------- */
export default async function EventDetail({ params }: Props) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      {/* Banner Image */}
      <div className="relative w-full h-[450px] mb-8">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {event.title}
      </h1>

      {/* Meta Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 text-gray-600">
        <div>
          <p className="text-sm font-medium text-gray-400">Location</p>
          <p>{event.location}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-400">Date & Time</p>
          <p>{event.date} • {event.time}</p>
        </div>
      </div>

      {/* Description */}
      <div className="prose max-w-none">
        <p>{event.description}</p>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button className="bg-black text-white px-8 py-3 rounded-xl hover:opacity-80 transition">
          Book Now
        </button>
      </div>

    </div>
  );
}