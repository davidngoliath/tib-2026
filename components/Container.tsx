// Centered content container: 1320px max width, 60px side gutters (from design).
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-[60px] ${className}`}>
      {children}
    </div>
  );
}
