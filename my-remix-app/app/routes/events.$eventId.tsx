import { ClientLoaderFunctionArgs, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { event } from "../schema";

export const clientLoader = async ({ params }: ClientLoaderFunctionArgs) => {
  const { eventId } = z.object({
    eventId: z.string(),
  }).parse(params);
  const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${eventId}`);
  return event.parse(await response.json());
};

export default function Index() {
  const data = useLoaderData<typeof clientLoader>();
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Event Page</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
         {data.id}
        </li>
        <li>
         {data.name}
        </li>
        <li>
         {data.description}
        </li>
        <li>
         {data.startAt}
        </li>
        <li>
         {data.endAt}
        </li>
      </ul>
    </div>
  );
}