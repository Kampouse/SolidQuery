import { SolidAuth } from "@auth/solid-start"
import { authOpts } from "~/server/auth";

export const { GET, POST } = SolidAuth(authOpts);
