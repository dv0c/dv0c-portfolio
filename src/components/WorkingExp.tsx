import { Experience } from "./Experience";
import db from "../../public/database.jpg";
import sophia from "../../public/sophiaplatanisioti.webp";
import bf from "../../public/buzzyfester.jpg";
import { font } from "@/lib/font";

const WorkingExp = () => {
  return (
    <section className="space-y-5">
      <h3
        className={"font-medium text-2xl text-stone-800 mt-3 " + font.className}
      >
        Working experience
      </h3>
      <div className="space-y-3">
        <Experience
          href="https://data-base.gr"
          image={db}
          name="Senior Developer"
          description="Data Base"
          date="Nov 2023 - Present"
        />
        <Experience
          freelancing
          href="https://sophiaplatanisioti.gr/"
          image={sophia}
          name="Senior Developer"
          description="Sophia Platanisioti"
        />
        <Experience
          href="#"
          image={bf}
          name="Senior Developer"
          description="Buzzy Fester"
          date="May 2020 - Oct 2023"
        />
      </div>
    </section>
  );
};

export default WorkingExp;
