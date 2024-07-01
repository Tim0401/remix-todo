import { useLoaderData } from "@remix-run/react";
import { events } from "../schema";

export const clientLoader = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
  return events.parse(await response.json());
};

export default function Index() {
  const data = useLoaderData<typeof clientLoader>();
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Event List Page</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        {data.map((event) => (
          <li key={event.id}>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              href={`/events/${event.id}`}
            >
              {event.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}