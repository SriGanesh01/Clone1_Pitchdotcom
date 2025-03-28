import bg1 from "../assets/background.avif";
import laptopPhoneScreen from "../assets/imagehero.avif";

function GettingStarted() {
    return (
        <div className="relative bg-gradient-to-b from-purple-500 to-purple-700 text-white text-center py-16 overflow-hidden mb-16">
            <div className="absolute inset-0 w-full h-full">
                <img src={bg1} alt="Background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
                <h1 className="text-4xl font-bold">Get started with Pitch</h1>
                <p className="mt-4 text-lg">Unlimited presentations · Unlimited sharing links · Custom templates</p>
                <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500">
                    <a href="/signup">Sign up for free</a>
                    
                </button>
                <div className="mt-8 flex justify-center">
                    <img src={laptopPhoneScreen} alt="App Preview" className="max-w-full rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default GettingStarted;