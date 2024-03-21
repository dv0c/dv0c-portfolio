import Me from "@/components/Me";
import SelectedWork from "@/components/SelectedWork";
import WhatIDo from "@/components/WhatIDo";
import WorkingExp from "@/components/WorkingExp";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="flex flex-wrap justify-between max-w-7xl mx-auto mt-10 gap-10">
        <div className="relative mx-auto">
          <Me />
        </div>
        <div className="max-w-lg space-y-20 mx-auto">
          <div className="space-y-5 lg:block text-center flex justify-center flex-col items-center lg:text-left">
            <p className="font-medium text-2xl sm:text-3xl md:text-4xl max-w-md">
              Passionate creating great experience for Digital Product
            </p>
            <div className="space-x-3">
              <Button>Talk with me</Button>
              <Button variant={"outline"}>See my work</Button>
            </div>
          </div>
          <div className="border-t pt-3">
            <WorkingExp />
          </div>
          <div className="border-t pt-3">
            <WhatIDo />
          </div>
          <div className="border-t pt-3">
            <SelectedWork />
          </div>
        </div>
      </section>
    </main>
  );
}
