import { SelectedWorkList } from "@/lib/config";
import { font } from "@/lib/font";
import { Card } from "./Card";
const SelectedWork = () => {
    return (
        <section className="space-y-5">
            <h3
                className={"font-medium text-2xl text-stone-800 mt-3 " + font.className}
            >
                Selected works
            </h3>
            <div className="space-y-3">
                {
                    SelectedWorkList.map((work, index) => {
                        return (
                            <Card
                                key={index}
                                title={work.title}
                                description={work.description}
                                image={work.image}
                                href={work.href}
                            />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default SelectedWork