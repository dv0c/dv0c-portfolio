import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ExperienceProps {
  name: string;
  description: string;
  image: any;
  date?: string;
  href: string;
  freelancing?: boolean;
}

export const Experience: FC<ExperienceProps> = ({
  href,
  date,
  description,
  image,
  name,
  freelancing = false,
}) => {
  return (
    <Link
      type="button"
      href={href}
      target="_blank"
      className={cn(
        "rounded-full flex items-center gap-5 border-2 p-5",
        freelancing ? "bg-background" : "bg-background"
      )}
    >
      <div className="p-3 bg-primaryColor rounded-full w-[50px] h-[50px] flex items-center justify-center">
        <Image
          placeholder="blur"
          alt={name}
          src={image}
          width={50}
          height={50}
          className="object-fill min-w-[50px] min-h-[50px] rounded-full w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-sm">{name}</h4>
        <p className="font-semibold text-stone-800 text-sm">{description}</p>
      </div>
      <p className="text-sm text-muted-foreground">
        {date ? date : "Freelancing"}
      </p>
    </Link>
  );
};
