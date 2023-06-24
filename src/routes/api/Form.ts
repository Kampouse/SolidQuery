import { APIEvent, json } from "solid-start/api";
export function GET() {
  return  json({ message: "Hello World" });
}
