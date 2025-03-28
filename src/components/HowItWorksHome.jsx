

function HowItWorksHome() {
    return (
        <div className="flex flex-col justify-center items-center pb-28">
            <div className="border-2 border-amber-400 border-dashed w-[600px] h-[100px] relative flex justify-center items-center">
                <p className="font-bold text-6xl text-center">How Pitch Works</p>
                <div className="bg-amber-400 text-2xl flex flex-row px-2 justify-center items-center font-extrabold w-[120px] h-[40px] absolute -top-10 left-0 rounded-t-sm">
                    <p className="font-light text-lg">Jake</p>
                    <div className="flex flex-row items-center space-x-2 px-2 text-3xl mb-[11px]">
                        <p className="animate-pulse text-white">.</p>
                        <p className="animate-pulse text-white">.</p>
                        <p className="animate-pulse text-white">.</p>
                    </div>
                </div>
            </div>
            <p className="text-xl text-center w-[750px] mt-10 mb-10">
                Pitch is the complete pitching platform that takes your design and delivery to the next level. Keep everyone on brand with templates, collaborate on slides, and share decks or entire deal rooms.
            </p>
            <button className="bg-gradient-to-r from-[#5318ec] to-[#a366ef] text-white text-lg px-9 py-3 rounded font-bold">
                <a href="/use" className="">
                    Create a presentation
                </a>

            </button>
        </div>
    );
}

export default HowItWorksHome;
