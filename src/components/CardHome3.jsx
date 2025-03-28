import ig1 from "../assets/ig1.jpg";

function CardHome3(props) {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 w-[350px] h-[400px] flex flex-col">
            <img src={props.ig} alt="" className="rounded-lg w-full h-[200px] object-cover" />
            <div className="mt-4 flex flex-col gap-2">
                <h2 className="text-sm font-bold text-[#8B5CF6] uppercase tracking-wider">
                    {props.title}
                </h2>
                <a href={props.link} className="text-3xl font-bold text-gray-900 hover:text-[#8B5CF6]">
                    {props.desc}
                </a>
            </div>
        </div>
    );
}

export default CardHome3;
