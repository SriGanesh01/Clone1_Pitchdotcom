

function BuildPitchHome() {
    return (
        <div className="flex flex-col justify-center items-center pt-[200px] h-screen">
            <p className="text-6xl font-bold w-[500px] text-center">
                Built with Pitch
            </p>
            <p className="pt-7 text-xl w-[700px] text-center">
                Get inspired by outstanding decks that have helped teams close deals, secure funding, and drive decisions.
            </p>
            <p className="pt-7">
                <a href="/templates" className="text-[#7443cd] font-bold text-[20px] pt-8">
                    Explore the presentation gallery
                </a>
            </p>
        </div>
    );
}

export default BuildPitchHome;
