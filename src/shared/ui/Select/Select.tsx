import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const selectVariants = cva(
  "inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left bg-background border border-gray-200 rounded-md",
  {
    variants: {
      size: {
        sm: "py-1 input-sm",
        md: "py-2 input-md",
        lg: "py-3 input-lg",
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
            "dropdown-menu"
            // "dark:bg-gray-950 dark:border-gray-800 dark:text-gray-100"
          )}
        >
          {options.map((option) => (
            <SelectPrimitive.Item
              key={option.value}
              value={option.value}
              className={cn(
                "dropdown-item"
                // "dark:hover:bg-gray-900 dark:focus:bg-gray-700 dark:text-gray-100"
              )}
            >
              <span className="size-4 shrink-0">
                <SelectPrimitive.ItemIndicator>
                  <Check size={16} strokeWidth={1.5} />
                </SelectPrimitive.ItemIndicator>
              </span>
              <SelectPrimitive.ItemText className="leading-6 block">
                {option.label}
              </SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};
