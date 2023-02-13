import {
    StartServer,
    createHandler,
    renderAsync,
} from "solid-start/entry-server";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
export default createHandler(
 
    renderAsync((event) => <StartServer event={event} />)
);
