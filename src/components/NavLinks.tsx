import { navigationLinks } from "@/lib/data";
import Link from "next/link";

export const NavLinks = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <>
      <Link
        onClick={() => setIsOpen(!isOpen)}
        href={"/"}
        className="py-5 active:underline"
      >
        <h1 className="text-3xl font-semibold">Home</h1>
      </Link>
      {navigationLinks.map((link) => (
        <Link
          onClick={() => setIsOpen(!isOpen)}
          href={link.href}
          className="py-5 active:underline"
          key={link.title}
        >
          <h1 className="text-3xl font-semibold">{link.title}</h1>
        </Link>
      ))}
    </>
  );
};
