import { initTRPC } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { decryptToken, getSession } from "./jwt";
import { prisma } from "@/shared/lib/prisma";
// import { User } from "@/entities/user/model/types";

// type TRPCContext = {
//   session: string | null;
//   user?: User | null;
// };

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  // const session = await getSession({ req: opts.req });
  const token = await getSession();

  let user;

  if (token) {
    const payload = await decryptToken(token!);

    user = await prisma.user.findUnique({
      where: { id: payload?.userId as string },
    });
  }

  return {
    ...opts,
    session: token,
    user,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create();

const fetchUserMiddleware = t.middleware(async ({ ctx, next }) => {
  const token = await getSession();

  if (token) {
    const payload = await decryptToken(token);

    if (payload) {
      const userId = payload.userId;
      const user = await prisma.user.findUnique({
        where: { id: userId as string },
      });
      ctx.user = user;
    }
  } else {
    console.log("token not found!");
    throw new Error("Unauthorized");
  }

  return next();
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(fetchUserMiddleware);
