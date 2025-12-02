import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} className="group block" id="event-card">

      <div className="relative w-full h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="mt-3 text-lg font-semibold group-hover:opacity-80">
        {title}
      </p>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
        <Image
          src="/icons/pin.svg"
          alt="location"
          width={14}
          height={14}
        />
        <span>{location}</span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
        <Image
          src="/icons/calendar.svg"
          alt="calendar"
          width={14}
          height={14}
        />
        <span>{date}</span>
      </div>

      {/* Time */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
        <Image
          src="/icons/clock.svg"
          alt="time"
          width={14}
          height={14}
        />
        <span>{time}</span>
      </div>

    </Link>
  );
};

export default EventCard;
