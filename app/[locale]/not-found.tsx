import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { getCopy } from "@/content/copy";

export default async function NotFound() {
  const { notFound } = await getCopy();

  return (
    <>
      <main className="-mt-[90px] flex-1 bg-cream pt-[90px] lg:-mt-[119px] lg:pt-[119px]">
        <section className="flex min-h-[calc(100svh-90px)] items-center py-16 lg:min-h-[calc(100vh-119px)] lg:py-24">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16">
              <div className="flex min-h-[320px] items-center justify-center rounded-card bg-brand-yellow px-8 py-10 text-center lg:min-h-[520px] lg:px-12 lg:py-14">
                <p className="text-[clamp(5rem,18vw,228px)] font-bold leading-[0.82] tracking-[-0.06em] text-ink">
                  404
                </p>
              </div>

              <div className="max-w-[620px] text-center lg:text-left">
                <h1 className="text-[clamp(2.5rem,7vw,72px)] font-bold leading-[0.95] tracking-[-0.04em] text-ink">
                  {notFound.title}
                </h1>
                <p className="mt-6 max-w-[540px] text-body font-medium leading-[25px] text-ink lg:mt-8">
                  {notFound.body}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:mt-10 lg:justify-start">
                  <Button variant="nav" href="/">
                    {notFound.home}
                  </Button>
                  <Button variant="register" href="/brave-camp/about">
                    {notFound.braveCamp}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}