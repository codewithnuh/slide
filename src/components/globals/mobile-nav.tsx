"use client";

import * as React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="block px-2 py-1 text-lg"
            onClick={() => setOpen(false)}
          >
            Home Page
          </Link>
          <Link
            href="/features"
            className="block px-2 py-1 text-lg"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/services"
            className="block px-2 py-1 text-lg"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="block px-2 py-1 text-lg"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
