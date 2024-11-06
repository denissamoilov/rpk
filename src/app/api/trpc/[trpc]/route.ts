import { appRouter } from "@/server";
import { NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
