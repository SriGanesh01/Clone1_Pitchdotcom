import { useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

function HeroineHome() {
	const [imageSrc, setImageSrc] = useState(p1);
	const [selected, setSelected] = useState(p1);

	const handleNavClick = (image) => {
		setImageSrc(image);
		setSelected(image);
	};

	return (
		<div className="h-screen bg-gradient-to-r from-[#5318ec] to-[#a366ef] text-white text-center font-sans z-50">
			<div>
				<nav className="flex justify-center space-x-4 p-4">
					<button onClick={() => handleNavClick(p1)} className={`hover:underline ${selected === p1 ? "underline" : "" }`}>
						PITCH
					</button>
					<button onClick={() => handleNavClick(p2)} className={`hover:underline ${selected === p2 ? "underline" : "" }`}>
						DESIGN
					</button>
					<button onClick={() => handleNavClick(p3)} className={`hover:underline ${selected === p3 ? "underline" : "" }`}>
						COLLABORATE
					</button>
					<button onClick={() => handleNavClick(p4)} className={`hover:underline ${selected === p4 ? "underline" : "" }`}>
						ANALYZE
					</button>
				</nav>
				<img src={imageSrc} alt="" className="mx-auto mt-8 max-h-[520px] min-h-[520px] rounded" />
			</div>
		</div>
	);
}

export default HeroineHome;
