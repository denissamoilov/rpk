import * as React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: "sm" | "md" | "lg";
  error?: boolean;
}

const labelVariants = {
  sm: "text-label-sm",
  md: "text-label-md",
  lg: "text-label-lg",
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size = "md", error, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "font-medium",
          labelVariants[size],
          error ? "text-red-500" : "text-gray-900 dark:text-gray-100",
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label };
