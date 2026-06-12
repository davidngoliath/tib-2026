import { getCopy } from "@/content/copy";
import { Button } from "./Button";
import { DonateButton } from "./DonateButton";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

// Sticky top nav (Figma "nav-block" 669:808). Three translucent capsules:
// [logo + links] · [Register/Donate] · [EN/ES]. Localized via getCopy().
const CAPSULE =
  "flex h-[74px] items-center gap-[18px] rounded-[20px] bg-white/50 px-[18px] backdrop-blur";

export async function Nav() {
  const t = await getCopy();

  return (
    <header className="sticky top-0 z-50 px-[60px] pt-[45px]">
      <nav className="mx-auto flex max-w-[1320px] items-center">
        {/* Logo + nav links */}
        <div className={CAPSULE}>
          <Logo hoverPink />
          <ul className="flex items-center gap-[18px]">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <Button variant="nav" href={link.href}>
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right cluster: Register/Donate + language toggle */}
        <div className="ml-auto flex items-center gap-[18px]">
          <div className={CAPSULE}>
            <Button variant="register" href="#">
              {t.nav.register}
            </Button>
            <DonateButton variant="donate" label={t.nav.donate} />
          </div>

          {/* Language toggle — switches locale on the current page */}
          <div className={CAPSULE}>
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
