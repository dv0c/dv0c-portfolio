"use client";
import { MenuIcon } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger>
        <MenuIcon type="button" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[400px] bg-primaryColor max-w-[85vw] sm:w-[540px]"
      >
        <div className="min-h-[80vh] divide-y flex flex-col justify-center">
          <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
