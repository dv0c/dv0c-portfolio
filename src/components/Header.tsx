import { Menu } from "./Menu";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-10">
      <div className="flex items-center justify-between">
        <section className="flex items-center gap-10">
          <Menu />
          <Link href={"/"}>
            <h1 className="text-xl font-semibold">Anastasios</h1>
          </Link>
          <ul className="hidden md:flex items-center">
            <li>
              <Link href="/services">
                <Button variant={"link"}>Services</Button>
              </Link>
            </li>
            <li>
              <Link href={"/about-me"}>
                <Button variant={"link"}>About me</Button>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <Button variant={"link"}>Contact us</Button>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <Link href={"/my-work"}>
            <Button variant={"outline"}>See my work</Button>
          </Link>
        </section>
      </div>
    </header>
  );
};

export default Header;
