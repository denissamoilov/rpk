"use client";

import { TrpcProvider } from "@/app/_trpc/TrpcProvider";
import { Header, Sidebar } from "@/widgets/Dashboard";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TrpcProvider>
      <div className="grid h-dvh grid-cols-[200px_minmax(900px,_1fr)] grid-rows-[auto_minmax(900px,_1fr)]">
        <aside className="row-span-2 p-5">
          <Sidebar />
        </aside>
        <Header />
        <div className="bg-gray-100 row-span-1 p-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </TrpcProvider>
  );
}
