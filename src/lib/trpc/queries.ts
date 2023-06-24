import { Issue, Post } from "./types";
import { z } from "zod";
import { t } from "./router";
//import { prisma } from "~/entry-server";
const todos = [
    { id: 1, title: "Learn about React", description: "react is framework...", type: "feature", completed: false },
    { id: 2, title: "Learn about SolidJs", description: "react is framework...", type: "bugs", completed: false },
];

export const getIssues = () => {
    return t.procedure.query(() => {
        return todos;
    });
};
/*
export const createUser = () => {
    return t.procedure.input(
        z.object({
            name: z.string(),
            email: z.string(),
        })
    ).mutation(async (data) => {

        const newUser = await prisma.user.create({
            data: {
                name: data.input.name,
                email: data.input.email,
            },
        });
        return newUser;
    });
};
*/
/*
export const createPost = () => {
    return t.procedure.input(
        z.object({
            title: z.string(),
            content: z.string(),
            published: z.boolean(),
            authorEmail: z.string(),
        })
    ).mutation(async (data) => {
        const newPost = await prisma.user.update({
            data: {
                posts: { create: { title: data.input.title, content: data.input.content, } },
            }, where: { email: data.input.authorEmail }
        });

    });



};

*/
