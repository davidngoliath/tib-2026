import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PressCard } from "@/components/cards/PressCard";
import { press } from "@/content/press";
import { getCopy } from "@/content/copy";

// Press cards — scroll up over the pinned PRESS header.
export async function PressCards() {
  const { common } = await getCopy();
  return (
    <section className="bg-brand-orange pb-24 pt-16 text-paper">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {press.map((item) => (
            <PressCard key={item.outlet} item={item} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button variant="dark" href="/press">
            {common.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}
