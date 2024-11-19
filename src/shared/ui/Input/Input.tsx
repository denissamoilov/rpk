import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Label } from "../Label/Label";
import { CircleAlert } from "lucide-react";

const inputVariants = cva(
  "w-full border transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-10 text-sm px-4 rounded-sm",
        md: "h-11 text-md px-4 rounded-md",
        lg: "h-14 text-lg px-6 rounded-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, size, label, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <div className="relative">
          <input
            className={cn(
              inputVariants({ size }),
              "focus-outline",
              "bg-transparent border-gray-100 text-gray-900",
              // "dark:bg-gray-950 dark:border-gray-800 dark:text-gray-100",
              // "dark:focus-visible:border-gray-700 dark:focus-visible:ring-primary-50",
              error && "!border-error-500 !focus-visible:ring-error-500",
              className
            )}
            ref={ref}
            {...props}
          />
          {error && (
            <CircleAlert className="absolute right-4 top-1/2 -translate-y-1/2 text-error-500" />
          )}
        </div>
        {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
