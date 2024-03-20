import { Experience } from "./Experience"

const WorkingExp= () => {
  return <section className="space-y-5">
        <h3 className="font-semibold text-2xl">Working experience</h3>
        <div className="space-y-2">
            <Experience href="#" image="/buzzyfester.jpg" name="Senior Developer" description="Buzzy Fester" date="May 2020 - Oct 2023" />
            <Experience href="https://data-base.gr" image="/buzzyfester.jpg" name="Senior Developer" description="Buzzy Fester" date="May 2020 - Oct 2023" />
        </div>
  </section>
}

export default WorkingExp