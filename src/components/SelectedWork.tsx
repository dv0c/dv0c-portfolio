import { font } from "@/lib/font";
import { Card } from "./Card";
import DataBase from '../../public/database_homepage.png';
import plat from '../../public/sophiaplatanisioti_homepage.png';
import buzzyfester from '../../public/buzzyfester_app.jpg';
const SelectedWork = () => {
    return (
        <section className="space-y-5">
            <h3
                className={"font-medium text-2xl text-stone-800 mt-3 " + font.className}
            >
                Selected works
            </h3>
            <div className="space-y-3">
                <Card href="https://data-base.gr/" image={DataBase} title="Data Base" description="This exploration showcases the homepage of the website, featuring sections designed to provide users with a clear understanding..." />
                <Card href="https://sophiaplatanisioti.gr/" image={plat} title="Sophia Platanisioti" description="This exploration showcases the homepage of the website, featuring sections designed to provide users with a clear understanding..." />
                <Card href="#" image={buzzyfester} title="Buzzy Fester" description="This exploration showcases the homepage of the website, featuring sections designed to provide users with a clear understanding..." />
            </div>
        </section>
    );
}

export default SelectedWork