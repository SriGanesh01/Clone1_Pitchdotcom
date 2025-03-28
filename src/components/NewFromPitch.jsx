import CardHome3 from "./CardHome3";

import ig5 from "../assets/ig5.jpg";
import ig6 from "../assets/ig6.jpg";
import ig7 from "../assets/ig7.jpg";

function NewFromPitch() {
    return (
        <div className="flex flex-col items-center pt-[75px] h-screen ">
            <p className="font-extrabold text-5xl">New from Pitch</p>
            <div className="flex flex-row gap-10 mt-10">
                <CardHome3 link="/updates" ig={ig5} title="PRODUCT UPDATE" desc="Pitching is changing. And so is Pitch." />
                <CardHome3 link="/2024" ig={ig6} title="RELEASE ROUNDUP" desc="A look back at Pitch in 2024" />
                <CardHome3 link="/resources" ig={ig7} title="PRESENTATION RESOURCES" desc="Win deals with interactive sales decks" />
            </div>
        </div>
    );
}
export default NewFromPitch;