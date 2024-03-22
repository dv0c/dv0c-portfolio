import { Service } from "@/components/Service";
import { font } from "@/lib/font";
import { Circle, ImageIcon } from "lucide-react";
import Image from "next/image";
import me from "../../../../public/me.jpg";

const page = ({}) => {
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
            className="rounded-full"
          />
          <div className="mt-5 space-y-3 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-center ">
              I'm Anastasios Meintanis
            </h2>
            <p className="text-lg max-w-[320px] text-center">
              I'm a software engineer, currently working at{" "}
              <a href="https://www.data-base.gr/" className="underline">
                Data Base
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="md:max-w-5xl max-w-full mx-auto">
        <div className="mt-8 p-0 md:p-6 mb-8">
          <p className="text-lg text-center leading-relaxed">
            Greetings, I'm Anastasios Meintanis, a 20-year-old web developer
            with 6 years of experience based in the picturesque locales of
            Greece. With a fervent passion for coding, I specialize in crafting
            immersive digital experiences using cutting-edge technologies.
            Proficient in Next.js, Angular, and React, I bring ideas to life
            through meticulous development and creative problem-solving. My
            journey in the digital landscape has been marked by diverse projects
            and collaborations with startups, where I've honed my skills and
            contributed to innovative solutions. With an insatiable appetite for
            learning and a knack for simplifying complexities, I thrive on
            exploring new horizons in web development. I invite you to join me
            on this exciting journey as we redefine the possibilities of the
            digital world, one project at a time.
          </p>
        </div>
        <div className="mt-10 pt-10 border-t">
          <section className="space-y-5">
            <h3
              className={
                "font-medium text-2xl text-center w-full text-stone-800 mt-3 " +
                font.className
              }
            >
              My learning journey
            </h3>
            <div className="items-center gap-5 flex-wrap md:flex-nowrap flex">
              <Service
                name="Learned Angular"
                description="2018 - 2019"
                svg={<Circle />}
              />
              <Service
                name="Learned React"
                description="2019"
                svg={<Circle />}
              />
              <Service
                name="Learning Next Js"
                description="2019 - Present"
                svg={<Circle />}
              />
            </div>
          </section>
          <section>
            <KeepInMind />
          </section>
        </div>
      </div>
    </main>
  );
};

export default page;

const KeepInMind = () => {
  return (
    <div className="mt-10 pt-10 border-t">
      <h3
        className={
          "font-medium text-2xl text-center w-full text-stone-800 mt-3 mb-5 " +
          font.className
        }
      >
        Crafting Exceptional User Experiences
      </h3>
      <p className="text-lg text-center leading-relaxed">
        Crafting a website that seamlessly blends speed, responsiveness, and SEO
        optimization is paramount in delivering an exceptional user experience.
        With a commitment to efficiency without unnecessary cost escalation, I
        ensure each project is meticulously tailored to achieve these goals.
        Through image optimization techniques and judicious use of content
        delivery networks (CDNs), I minimize load times while maximizing content
        quality. Implementation of lazy loading and Gzip compression further
        enhances performance, ensuring swift delivery of content to users
        worldwide. Responsive design principles are at the core of my approach,
        guaranteeing that websites adapt flawlessly to any screen size or
        device. Adherence to SEO best practices, such as strategic keyword
        placement and fast loading times, bolsters visibility and search engine
        rankings. Moreover, prioritizing accessibility and browser caching
        ensures inclusivity and smooth browsing experiences for all users.
        Continuous performance monitoring enables fine-tuning and optimization,
        ensuring sustained excellence in user satisfaction and engagement.
      </p>
      {/* <h1 className={"text-lg font-semibold my-5 text-center " + font.className}>How can we achive this</h1>
      <div className="flex items-center gap-3 flex-wrap">
        <Service name="Optimized Image Assets" description="" svg={<ImageIcon />} />
        <Service name="Efficient Content Delivery Networks (CDNs)" description="" svg={<ImageIcon />} />
        <Service name="Implementation of Lazy Loading and Gzip Compression" description="" svg={<ImageIcon />} />
        <Service name="Responsive Design Principles" description="" svg={<ImageIcon />} />
        <Service name="SEO Best Practices for Enhanced Visibility" description="" svg={<ImageIcon />} />
        <Service name="Emphasis on Accessibility and Browser Caching" description="" svg={<ImageIcon />} />
        <Service name="Ongoing Performance Monitoring and Optimization" description="" svg={<ImageIcon />} />
      </div> */}
    </div>
  );
};
