import { CuboidIcon as Cube } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI-Powered DM Automation for Seamless Interaction",
    description:
      "Our intelligent system crafts personalized messages that resonate with your audience.",
    icon: Cube,
  },
  {
    title: "Effortless Comments Automation to Boost Engagement",
    description:
      "Automatically respond to comments and keep the conversation flowing.",
    icon: Cube,
  },
  {
    title: "User-Friendly Interface for Easy Navigation",
    description: "Navigate through Slide with ease and efficiency.",
    icon: Cube,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 dark:bg-background ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="text-sm font-medium tracking-wider text-primary uppercase">
              Automate
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover the Power of{" "}
              <span className="text-primary">Automation with Slide</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Slide revolutionizes your social media engagement with AI-driven
              automation. Effortlessly manage your DMs and comments, allowing
              you to focus on what truly matters.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 md:gap-12 mt-16 max-w-5xl grid-cols-1 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="bg-primary/10 p-3 rounded-2xl">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            Learn More
          </Button>
          <Button size="lg" className="rounded-full">
            Sign Up →
          </Button>
        </div>
      </div>
    </section>
  );
}
