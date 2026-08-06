import { BASE, VARIANTS, type ButtonVariant } from "./Button";

export function EmailButton({
  href,
  variant,
  className = "",
  children,
}: {
  href: string;
  variant: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      {children}
    </a>
  );
}