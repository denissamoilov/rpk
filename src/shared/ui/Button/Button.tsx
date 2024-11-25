"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-primary-foreground hover:bg-primary-600",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
        accent: "bg-accent-500 text-white hover:bg-accent-600",
        outline:
          "border border-gray-200 bg-background hover:bg-gray-100 hover:text-gray-900",
        ghost: "hover:bg-gray-200 hover:text-gray-900",
        gray: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200",
      },
      size: {
        xs: "input-xs",
        sm: "input-sm",
        md: "input-md",
        lg: "inputlg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "focus-outline",
          "dark:focus-visible:border-gray-700 dark:focus-visible:ring-gray-700"
        )}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && (
          <Loader2 className="size-4 animate-spin opacity-70 shrink-0" />
        )}
        {!isLoading && leftIcon && (
          <span className="opacity-70 shrink-0">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="opacity-70 shrink-0">{rightIcon}</span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
