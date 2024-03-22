import { font } from "@/lib/font";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ServiceProp {
  name: string;
  description: string;
  svg: any;
}

export const Service: FC<ServiceProp> = ({ description, name, svg }) => {
  return (
    <div
      className={cn(
        "rounded-2xl w-full flex items-center gap-5 border-2 p-5 bg-background"
      )}
    >
      <div className="p-3 bg-primaryColor rounded-full w-[50px] h-[50px] max-w-[50px] max-h-[50px] flex items-center justify-center">
        {svg}
      </div>
      <div className="flex-1 space-y-2">
        <h4
          className={"text-md font-semibold text-stone-800 " + font.className}
        >
          {name}
        </h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};
