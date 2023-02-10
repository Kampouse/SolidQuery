import z from 'zod';

const Issue = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    completed: z.boolean(),
    type: z.string(),
});
export type Issue = z.infer<typeof Issue>;