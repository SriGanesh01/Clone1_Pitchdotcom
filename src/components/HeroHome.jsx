import Image1 from '../assets/objcet_1.png';
import Image2 from '../assets/object_2.png';
import Image3 from '../assets/object_3.png';
import Image4 from '../assets/object_4.png';
import Image5 from '../assets/object_5.png';

function HeroHome() {
    return (
        <div className="h-screen">
            <div className=" bg-gradient-to-r from-[#5318ec] to-[#a366ef] h-full w-full text-center font-sans text-white z-50">
                <div className='z-50'>
                    <p className="text-5xl font-bold pt-[120px] text-[80px]">
                        <p className="">Win more deals.</p>
                        <p className="font-bold">Pitch<span className="font-extrabold">.</span></p>
                    </p>
                    <p className="text-[22px] px-96 pt-[45px] leading-12">
                        Pitch turns presentations into your team’s superpower.
                        Close deals, win clients, and expand accounts —
                        all while staying on brand.
                    </p>
                    <div className="pt-[45px] flex justify-center gap-4 font-bold">
                        <a href='/signup' className="px-7 py-[10px] border text-[#7446ee] bg-white fill-white border-white rounded">Sign up for free</a>
                        <a href='/demo' className="px-7 py-[10px] border border-white rounded font">Get a demo</a>
                    </div>
                </div>
                <div className='z-[-1]'>
                    <img src={Image1} alt="" className='absolute bottom-[-218px] left-[-170px] z-5 opacity-50 bg-clip-content pointer-events-none'/>
                    <img src={Image2} alt="" className='absolute bottom-16 left-24 z-4 opacity-50 bg-clip-content pointer-events-none'/>
                    <img src={Image3} alt="" className='absolute top-[350px] right-[270px] z-1 opacity-50 bg-clip-content pointer-events-none'/>
                    <img src={Image4} alt="" className='absolute top-[230px] right-[170px] z-2 opacity-50 bg-clip-content pointer-events-none'/>
                    <img src={Image5} alt="" className='absolute top-[0px] right-[-230px] z-3 opacity-50 bg-clip-content pointer-events-none'/>
                </div>
            </div>
        </div>
    );
}
export default HeroHome;