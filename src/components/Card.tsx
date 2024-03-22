import { font } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  image: any;
  href: string;
}

export const Card: FC<CardProps> = ({ description, href, image, title }) => {
  return (
    <Link
      href={href}
      target="_blank"
      type="button"
      className="border bg-background rounded-2xl p-5 group"
    >
      <div className="rounded-xl relative overflow-hidden w-full h-[300px]">
        <Image
          alt={title}
          src={image}
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="mt-5 space-y-2">
        <h1
          className={
            "font-semibold text-xl md:text-2xl text-stone-800 group-hover:underline " +
            font.className
          }
        >
          {title}
        </h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Link>
  );
};
