import { TrpcProvider } from "@/app/_trpc/TrpcProvider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TrpcProvider>{children}</TrpcProvider>;
}
