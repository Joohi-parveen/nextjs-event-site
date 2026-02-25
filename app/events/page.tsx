import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";


export default function Events() {
  return (
    <>
      <section>
        <h1 className="text-center">Events Page</h1>
        <p className="text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, illo.</p>

       <ExploreBtn/>
         
        <div className="mt-20 space-y-2">
          <h3>heading</h3>
          <ul className="events">
              {events.map((event) => (
                <li key={event.title}>
                  <EventCard {...event} />
                </li>
              ))}
          </ul>
        </div> 

      </section>
    </>   
  );
}
