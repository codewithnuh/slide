import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Star Rating */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-primary text-primary"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="max-w-3xl text-2xl font-medium tracking-tight sm:text-3xl">
            "Slide has transformed the way we engage with our audience. The
            automation tool is incredibly efficient and saves us countless
            hours!"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-11%20163745-6GNPhr5ub1E8qkBVzxjEvIFyye94wE.png"
                alt="Jane Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left">
              <div className="text-base font-medium">Jane Doe</div>
              <div className="text-sm text-muted-foreground">
                Marketing Manager, TechCorp
              </div>
            </div>
            <div className="ml-4 h-12 w-px bg-border" />
            <div className="text-xl font-semibold">Webflow</div>
          </div>
        </div>
      </div>
    </section>
  );
}
