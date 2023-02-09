import z from 'zod';

const Issue = z.object({
    id: z.number(),
    title: z.string(),
    completed: z.boolean()
});
export type Issue = z.infer<typeof Issue>;