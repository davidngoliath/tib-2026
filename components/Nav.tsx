import { getCopy } from "@/content/copy";
import { Button } from "./Button";
import { DonateButton } from "./DonateButton";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { MobileNav } from "./MobileNav";

// Sticky top nav (Figma "nav-block" 669:808). Three translucent capsules:
// [logo + links] · [Register/Donate] · [EN/ES]. Localized via getCopy().
const CAPSULE =
  "flex h-[74px] items-center gap-[18px] rounded-[20px] bg-white/50 px-[18px] backdrop-blur";

export async function Nav() {
  const t = await getCopy();

  // Right-side controls shared between desktop and the mobile right capsule:
  // Donate + EN/ES toggle, always visible and never collapsed into the menu.
  const rightControls = (
    <div className={CAPSULE}>
      <DonateButton variant="donate" label={t.nav.donate} />
      <LanguageToggle />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 px-[24px] pt-4 lg:px-[60px] lg:pt-[45px]">
      {/* Desktop (≥1024px): full nav — logo + links · Register/Donate · EN/ES. */}
      <nav className="mx-auto hidden max-w-[1320px] items-center lg:flex">
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

      {/* Tablet/mobile (<1024px): two collapsed capsules + full-screen menu. */}
      <div className="mx-auto max-w-[1320px]">
        <MobileNav
          links={t.nav.links}
          registerLabel={t.nav.register}
          rightControls={rightControls}
        />
      </div>
    </header>
  );
}
