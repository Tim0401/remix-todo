import { z } from "zod";

export const event = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    startAt: z.string(),
    endAt: z.string(),
});

export const events = z.array(event);
