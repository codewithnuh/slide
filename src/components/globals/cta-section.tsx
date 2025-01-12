import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transform Your Engagement Today
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience the power of automation with a free trial of Slide's
                advanced AI tool.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                Sign Up
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-background to-muted rounded-xl">
              <Image
                src="/lg-creators.png"
                alt="Platform preview"
                fill
                className="object-cover rounded-xl opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
