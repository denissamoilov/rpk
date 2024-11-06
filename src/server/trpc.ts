import { initTRPC } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getSession } from "next-auth/react";

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession({ req: opts.req });
  return {
    session,
  };
};

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
