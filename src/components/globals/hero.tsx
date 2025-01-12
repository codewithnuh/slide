import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="h-[40rem] w-full dark:bg-background bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.8] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0.20%,black)]"></div>

        {/* Content */}
        <div className="relative z-20 container flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
            Revolutionize Your DMs with{" "}
            <span className="text-primary">AI Automation</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-prose">
            Transform the way you engage with your audience using Slide, the
            cutting-edge automation tool designed for DMs and comments. Powered
            by AI, Slide streamlines your interactions, allowing you to focus on
            what truly matters—growing your community.
          </p>
          <div className="flex gap-4 mt-8">
            <Button size="lg" className="rounded-full">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
