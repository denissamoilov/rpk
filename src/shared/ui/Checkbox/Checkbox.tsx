import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string | React.ReactNode;
  description?: string;
  error?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, description, error, ...props }, ref) => (
  <div className="flex items-start space-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "focus-outline",
        "bg-background peer h-6 w-6 shrink-0 rounded-sm border border-gray-100 ring-offset-background",
        // "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-gray-50 data-[state=checked]:text-gray-950",
        "dark:data-[state=checked]:bg-gray-950 dark:border-gray-800 dark:data-[state=checked]:text-gray-50",
        // "dark:focus-visible:border-gray-700 dark:focus-visible:ring-gray-700",
        error && "!border-error-500 !focus-visible:ring-error-500",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {(label || description) && (
      <div className="grid gap-1 mt-0.5">
        {label && (
          <label
            htmlFor={props.id}
            className="text-label-md peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {typeof label === "string" ? <span>{label}</span> : label}
          </label>
        )}
        {error && <p className="text-sm text-error-500">{error}</p>}
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
    )}
  </div>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
