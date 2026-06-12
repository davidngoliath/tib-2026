import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ActionCard } from "@/components/cards/ActionCard";
import { actions } from "@/content/actions";
import { getCopy } from "@/content/copy";

// Our Action cards — scroll up over the pinned header.
export async function OurActionCards() {
  const { common } = await getCopy();
  return (
    <section className="bg-brand-yellow pb-24 pt-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((item) => (
            <ActionCard key={item.title} item={item} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button variant="dark" href="/action">
            {common.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}
