import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const selectVariants = cva(
  "inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left bg-white border rounded-md shadow-sm",
  {
    variants: {
      size: {
        sm: "h-10 text-sm py-1 px-4 rounded-sm gap-1",
        md: "h-11 text-md py-2 px-4 rounded-md gap-2",
        lg: "h-14 text-lg py-3 px-6 rounded-lg gap-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type SelectProps = VariantProps<typeof selectVariants> & {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
};

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  size,
  error,
  className,
}) => {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onChange}>
      <SelectPrimitive.Trigger
        className={cn(
          selectVariants({ size }),
          "focus-outline",
          "bg-transparent border-gray-100 text-gray-900",
          // "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2",
          // "dark:bg-gray-950 dark:border-gray-800 dark:text-gray-100",
          // "dark:focus-visible:border-gray-700 dark:focus-visible:ring-gray-700",
          error && "!border-error-500 !focus-visible:ring-error-500",
          className
        )}
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDown className="w-5 h-5" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.Viewport
          className={cn(
            "flex flex-col focus-outline gap-1",
            "bg-background border border-gray-300 rounded-sm shadow-lg p-1",
            "dark:bg-gray-950 dark:border-gray-800 dark:text-gray-100"
          )}
        >
          {options.map((option) => (
            <SelectPrimitive.Item
              key={option.value}
              value={option.value}
              className={cn(
                "flex gap-1 items-center justify-start px-2 py-1 text-sm text-gray-700 cursor-pointer outline-none rounded",
                "hover:bg-gray-50 focus:bg-gray-100",
                "dark:hover:bg-gray-900 dark:focus:bg-gray-800 dark:text-gray-100"
              )}
            >
              <span className="size-4 shrink-0">
                <SelectPrimitive.ItemIndicator>
                  <Check className="size-4" />
                </SelectPrimitive.ItemIndicator>
              </span>
              <SelectPrimitive.ItemText>
                {option.label}
              </SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};
