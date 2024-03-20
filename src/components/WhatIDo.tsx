import { Building, Globe, Search, Shield } from "lucide-react";
import { Service } from "./Service";
import { font } from "@/lib/font";

const WhatIDo = () => {
  return (
    <section className="space-y-5">
      <h3
        className={"font-medium text-2xl text-stone-800 mt-3 " + font.className}
      >
        What i do
      </h3>
      <div className="space-y-3">
        <Service
          name="Full pages Website design"
          description="Crafting immersive audiences and deliver a seamless user experience"
          svg={<Building />}
        />
        <Service
          name="Company website development"
          description="Building a website that represents your brand and business"
          svg={<Globe />}
        />
        <Service
          name="Support and maintenance"
          description="Ensuring your website is up to date and secure"
          svg={<Shield />}
        />
        <Service
          name="SEO Optimization and Marketing"
          description="Improving your website's visibility on search engines"
          svg={<Search />}
        />
      </div>
    </section>
  );
};

export default WhatIDo;
