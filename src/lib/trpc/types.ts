import z from "zod";

const Issue = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    completed: z.boolean(),
    type: z.string(),
});
export type Issue = z.infer<typeof Issue>;
const Post = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean(),
    authorEmail: z.string(),
});
export type Post = z.infer<typeof Post>;