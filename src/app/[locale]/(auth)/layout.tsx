import { TrpcProvider } from "@/app/_trpc/TrpcProvider";
import { LanguageSelector } from "@/features/LanguageSelector/LanguageSelector";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TrpcProvider>
      <div className="min-h-screen flex justify-center p-4 gap-6">
        <main className="p-6 flex flex-col items-center justify-between w-full max-w-lg shrink-0">
          <div className="flex shrink-0 w-full items-center gap-3">
            <Image src="/images/logo.png" alt="logo" width={32} height={32} />
            <span className="text-heading-3 leading-8 font-bold">RPK</span>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            {children}
          </div>
          <LanguageSelector />
        </main>
        <div
          className={cn(
            "rounded-xl flex flex-col w-full min-h-full",
            "[background-color:hsla(203,88%,47%,1)]",
            "[background-image:radial-gradient(circle_at_102%_80%,_hsla(269,66%,59%,1)_0%,_transparent_40.31%),_radial-gradient(circle_at_16%_46%,_hsla(0,0%,98%,0.64)_0%,_transparent_50%)]",
            "[background-blend-mode:normal,normal]"
          )}
        ></div>
      </div>
    </TrpcProvider>
  );
}
