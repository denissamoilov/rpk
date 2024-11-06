"use client";

import { PropsWithChildren } from "react";
import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./client";

export const TrpcProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      {children}
    </trpc.Provider>
  );
};
