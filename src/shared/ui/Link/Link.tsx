import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  className,
  ...props
}: LinkProps) => (
  <NextLink {...props} className={clsx("focus-outline rounded", className)} />
);
