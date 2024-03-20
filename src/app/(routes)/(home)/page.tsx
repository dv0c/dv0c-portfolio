import Me from "@/components/Me";
import WorkingExp from "@/components/WorkingExp";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-wrap justify-between max-w-7xl mx-auto mt-10 gap-10">
        <Me />
        <div className="max-w-lg space-y-20">
          <div className="space-y-5">
            <p className="text-4xl max-w-md">Passionate creating great experience for Digital Product</p>
            <div className="space-x-3">
              <Button>
                Talk with me
              </Button>
              <Button variant={'outline'}>
                See my work
              </Button>
            </div>
          </div>
          <div className="border-t pt-3">
            <WorkingExp />
          </div>
        </div>
      </section>
    </main>
  );
}
