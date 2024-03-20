import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-10">
      <div className="flex items-center justify-between">
        <section className="flex items-center gap-10">
          <Button className="p-2" variant={"ghost"} aria-label="Menu - for mobile only">
            <Menu className="block md:hidden" />
          </Button>
          <h1 className="text-xl font-semibold">Anastasios</h1>
          <ul className="hidden md:flex items-center">
            <li>
              <Button variant={"link"}>Services</Button>
            </li>
            <li>
              <Button variant={"link"}>About me</Button>
            </li>
            <li>
              <Button variant={"link"}>Contact us</Button>
            </li>
          </ul>
        </section>
        <section>
          <Button variant={"outline"}>See my work</Button>
        </section>
      </div>
    </header>
  );
};

export default Header;
