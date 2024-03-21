import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[400px] sm:w-[540px]"
      ></SheetContent>
    </Sheet>
  );
};
