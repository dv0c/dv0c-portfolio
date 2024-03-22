
import { font } from "@/lib/font";
import Image from "next/image";
import me from "../../../../public/me.jpg";
import { Service } from "@/components/Service";
import { Circle, Dot, School, Shield } from "lucide-react";

const page = ({ }) => {
  return (
    <main>
      <div className="flex justify-center mx-auto">
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <Image
            alt="dv0c"
            placeholder="blur"
            src={me}
            width={200}
            height={200}
            className="rounded-2xl"
          />
          <div className="mt-5 space-y-3 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-center ">
              I'm Anastasios Meintanis
            </h2>
            <p className="text-lg max-w-[320px] text-center text-center">
              I'm a software engineer, currently working at{" "}
              <a href="https://www.data-base.gr/" className="underline">Data Base</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="mt-8 p-6 mb-8">
          <p className="text-lg text-center leading-relaxed">
            Greetings, I'm Anastasios Meintanis, a 20-year-old web developer with 6 years of experience based in the picturesque locales of Greece. With a fervent passion for coding, I specialize in crafting immersive digital experiences using cutting-edge technologies. Proficient in Next.js, Angular, and React, I bring ideas to life through meticulous development and creative problem-solving. My journey in the digital landscape has been marked by diverse projects and collaborations with startups, where I've honed my skills and contributed to innovative solutions. With an insatiable appetite for learning and a knack for simplifying complexities, I thrive on exploring new horizons in web development. I invite you to join me on this exciting journey as we redefine the possibilities of the digital world, one project at a time.
          </p>
        </div>
        <div className="mt-10 pt-10 border-t">
          <section className="space-y-5">
            <h3
              className={"font-medium text-2xl text-center w-full text-stone-800 mt-3 " + font.className}
            >
              My learning journey
            </h3>
            <div className="items-center gap-5 flex">
              <Service name="Started learning Angular" description="2018 - 2019" svg={<Circle />} />
              <Service name="Started learning React" description="2019" svg={<Circle />} />
              <Service name="Started learning React" description="2019 - Present" svg={<Circle />} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default page;
