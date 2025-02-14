import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Label } from "../Label/Label";
import { CircleAlert, X } from "lucide-react";
import { Button } from "../Button/Button";

const inputVariants = cva(
  "w-full border transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "input-sm",
        md: "input-md",
        lg: "input-lg",
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
  leftIcon?: ReactNode;
  onClear?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, error, size, label, leftIcon, onClear, value, ...props },
    ref
  ) => {
    // const clearableCondition = onClear && value !== "";
    const clearableCondition = true;

    return (
      <div className="flex flex-col gap-1">
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <div className="relative">
          {leftIcon && (
            <span className="absolute top-1/2 -translate-y-1/2 text-gray-700 left-2">
              {leftIcon}
            </span>
          )}
          <input
            className={cn(
              inputVariants({ size }),
              "focus-outline",
              "bg-background border-gray-200 text-gray-900",
              // "dark:bg-gray-950 dark:border-gray-800 dark:text-gray-100",
              // "dark:focus-visible:border-gray-700 dark:focus-visible:ring-primary-50",
              error && "!border-error-500 !focus-visible:ring-error-500",
              leftIcon && "pl-10",
              clearableCondition && "pr-12",
              clearableCondition && error && "pr-19",
              className
            )}
            ref={ref}
            {...props}
          />
          {error && (
            <CircleAlert
              size={20}
              strokeWidth={1.5}
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 text-error-500",
                clearableCondition && "right-12"
              )}
            />
          )}
          {clearableCondition && (
            <Button
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm"
              variant="ghost"
              size="icon-xs"
              leftIcon={<X size={20} strokeWidth={1.5} />}
            />
          )}
        </div>
        {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
