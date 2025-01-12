"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Check } from "lucide-react";

const plans = {
  basic: {
    name: "Basic Plan",
    price: { monthly: 19, yearly: 190 },
    features: [
      "Automated DM and comments",
      "AI-powered responses",
      "User-friendly interface",
    ],
  },
  business: {
    name: "Business Plan",
    price: { monthly: 29, yearly: 290 },
    features: [
      "Advanced analytics tools",
      "Priority customer support",
      "Customizable templates",
      "Multi-account management",
      "Advanced privacy controls",
    ],
  },
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pricing Plans
            </h2>
            <p className="text-muted-foreground">
              Choose the plan that fits your needs best
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center space-x-2">
            <Toggle
              pressed={!isYearly}
              onPressedChange={() => setIsYearly(false)}
              variant="outline"
            >
              Monthly
            </Toggle>
            <Toggle
              pressed={isYearly}
              onPressedChange={() => setIsYearly(true)}
              variant="outline"
            >
              Yearly
            </Toggle>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
            {Object.entries(plans).map(([key, plan]) => (
              <Card key={key} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-6">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                    <span className="text-lg font-normal text-muted-foreground">
                      /{isYearly ? "year" : "mo"}
                    </span>
                  </div>
                  <ul className="space-y-2 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">Get started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
