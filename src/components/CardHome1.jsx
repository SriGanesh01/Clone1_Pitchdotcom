

function CardHome1(props) {
    return (
        <div className="flex flex-row items-center justify-center py-8">
            <div className="">
                <img src={props.ig} alt="" className="rounded-lg shadow-md h-[550px] w-[500px]" />
            </div>
            <div className="px-[80px]">
                <h2 className="text-3xl font-bold text-[#5B3FE0]">{props.card}</h2>
                <h1 className="text-5xl w-[550px] font-bold text-gray-900 mt-2">
                    {props.title}
                </h1>
                <ul className="mt-6 text-gray-700 space-y-2 text-lg">
                    <li>{props.l1}</li>
                    <li>{props.l2}</li>
                    <li>{props.l3}</li>
                </ul>
                <button className="mt-6 px-6 py-3 border border-[#5318ec] text-[#5318ec] font-semibold rounded-lg shadow-md">
                    {props.b1}
                </button>
            </div>
        </div>
    );
}

export default CardHome1;


