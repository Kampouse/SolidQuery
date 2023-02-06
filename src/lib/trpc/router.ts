import { initTRPC } from '@trpc/server';
import { z } from 'zod';
const t = initTRPC.create();
const todos = [
    { id: 1, text: 'Learn about React', completed: true }
];
export const appRouter = t.router({

    getTodos: t.procedure.query(() => {
        return todos;
    })

});
export type AppRouter = typeof appRouter;
