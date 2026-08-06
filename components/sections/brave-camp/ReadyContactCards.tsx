import { Button } from "@/components/Button";
import { EmailButton } from "@/components/EmailButton";
import { RegisterButton } from "@/components/RegisterButton";
import { getCopy } from "@/content/copy";
import { contact as siteContact } from "@/content/site";

// Pinned CTA cards at the bottom of For Parents (Figma "Group 84", 669:1267):
// an inset rounded card (≈1320×634, ~60px side margins) on the cream frame —
// green "Ready to Register", then yellow "Contact Us" scrolls over it. The FAQ
// behind fades out as these rise.
function CtaCard({
  bg,
  button,
  href,
  title,
  body,
  cta,
}: {
  bg: string;
  button: "darkGreen" | "darkYellow";
  href: string;
  title: string;
  body: string;
  cta: string;
}) {
  const isRegisterButton = href === "__register_modal__";
  const isEmailButton = href.startsWith("mailto:");

  return (
    <div className="w-full px-5 sm:px-8 lg:px-[60px]">
      <div
        className={`mx-auto flex min-h-[420px] max-w-[1320px] flex-col items-center justify-center rounded-card px-7 py-12 text-center lg:h-[634px] lg:px-10 lg:py-0 ${bg}`}
      >
        <h2 className="max-w-[678px] text-[clamp(2rem,6vw,56px)] font-bold leading-[1.1] tracking-[-1.68px] lg:leading-none">
          {title}
        </h2>
        <p className="mt-6 max-w-[573px] whitespace-pre-line text-body font-medium leading-[25px] lg:mt-9">
          {body}
        </p>
        <div className="mt-10 lg:mt-12">
          {isRegisterButton ? (
            <RegisterButton label={cta} variant={button} />
          ) : isEmailButton ? (
            <EmailButton href={href} variant={button}>
              {cta}
            </EmailButton>
          ) : (
            <Button variant={button} href={href}>
              {cta}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export async function ReadyCard() {
  const { braveCampForParents } = await getCopy();
  const { ready } = braveCampForParents;
  return (
    <CtaCard
      bg="bg-brand-green"
      button="darkGreen"
      href="__register_modal__"
      title={ready.title}
      body={ready.body}
      cta={ready.cta}
    />
  );
}

export async function ContactCard() {
  const { braveCampForParents } = await getCopy();
  const { contact } = braveCampForParents;
  return (
    <CtaCard
      bg="bg-brand-yellow"
      button="darkYellow"
      href={siteContact.href}
      title={contact.title}
      body={contact.body}
      cta={contact.cta}
    />
  );
}
