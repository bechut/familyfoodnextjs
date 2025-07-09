import { appRouter } from "@/app/server/trpc/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}), // Add auth/session context if needed
  });
};

export { handler as GET, handler as POST };
