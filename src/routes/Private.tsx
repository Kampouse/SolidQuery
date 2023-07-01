// routes/protected.tsx
import {Secret }   from "~/components/Protected";

export const { routeData, Page } = Secret((session) => {
  return (
    <main class="flex flex-col gap-2 items-center">
      <h1>This is a Secret route</h1>
    </main>
  );
});

export default Page;
