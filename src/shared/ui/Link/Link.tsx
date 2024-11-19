import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = (props: LinkProps) => (
  <NextLink {...props} className={`focus-outline ${props.className}`} />
);
