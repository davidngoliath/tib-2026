// Stacked "OUR" + "ACTION" heading (Figma Group 142). Exact type:
// eyebrow 96px / -2.88px, title 228px / -6.84px, subhead 32px / -0.96px,
// all Helvetica Neue LT Pro 75 Bold.
type Props = {
  eyebrow?: string;
  title: string;
  subhead?: string;
  className?: string;
  align?: "left" | "center";
};

export function EyebrowTitle({
  eyebrow,
  title,
  subhead,
  className = "",
  align = "left",
}: Props) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-[clamp(2.5rem,11vw,96px)] font-bold uppercase leading-none tracking-[-2.88px]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-[20px] text-[clamp(3.25rem,18vw,228px)] font-bold uppercase leading-none tracking-[-6.84px] lg:text-[228px]">
        {title}
      </h2>
      {subhead && (
        <p className="mx-auto mt-6 max-w-[60rem] whitespace-pre-line text-[clamp(1.25rem,4.5vw,32px)] font-bold leading-[1.15] tracking-[-0.96px] lg:mt-10">
          {subhead}
        </p>
      )}
    </div>
  );
}
