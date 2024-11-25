import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    label?: string;
  }
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      label,
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "flex items-center justify-center shrink-0 bg-gray-200 text-sm text-shadow-lg",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    >
      {label && <span className="px-2 bg-background">{label}</span>}
    </SeparatorPrimitive.Root>
  )
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
