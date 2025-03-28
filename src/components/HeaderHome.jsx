import Logo from "../assets/logo2.png";

function HeaderHome() {
    return (
        <div className="sticky top-0  bg-gradient-to-r from-[#5318ec] to-[#a366ef] text-white h-[72px] w-full shadow-md z-50">
            <div className="flex justify-between items-center h-full px-5">
                <a href="/" className="flex items-center">
                    <img src={Logo} alt="Company Logo" className="h-[32px] w-auto" />
                </a>
                <nav className="hidden md:flex gap-x-16 text-[18px] font-extralight font-mono">
                    <a href="#" className="hover:underline">Product &#9660;</a>
                    <a href="#" className="hover:underline">Use case &#9660;</a>
                    <a href="#" className="hover:underline">Template &#9660;</a>
                    <a href="#" className="hover:underline">Resources &#9660;</a>
                    <a href="#" className="hover:underline">Pricing &#9660;</a>
                </nav>
                <nav className="flex items-center gap-x-4 text-[14px]">
                    <a href="/login" className="px-6 py-2 border border-white rounded hover:bg-white hover:text-[#5318ec] transition">Log in</a>
                    <a href="/signup" className="px-6 py-2 bg-white text-[#7446ee] border border-white rounded hover:bg-gray-200 transition">Sign up</a>
                </nav>
            </div>
        </div>
    );
}

export default HeaderHome;