import { Link } from "react-router-dom";
import flower1 from '../../../assets/bannerFlowers/flower1.jfif';
import flower2 from '../../../assets/bannerFlowers/flower2.jfif';
import flower3 from '../../../assets/bannerFlowers/flower3.jfif';
import flower4 from '../../../assets/bannerFlowers/flower4.jfif';
import flower5 from '../../../assets/bannerFlowers/flower5.jfif';
import flower6 from '../../../assets/bannerFlowers/flower6.jfif';


const Banner = () => {
    return (
        <div className="bg-gray-100 p-8 font-[sans-serif]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-4">
                <div className="text-center md:text-left">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-6 md:!leading-[55px]"><span className="text-gray-800">Flowers</span> Offer</h2>
                    <p className="text-lg lg:text-xl text-black mb-8">Browse Between hounders of flowers</p>
                    <a href="#" className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
                       Browse Now
                    </a>
                </div>
                <div className="text-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                    <Link><img src={flower1} alt="Premium Benefits" className="w-11/12 mx-auto h-48" /></Link>
                    <Link><img src={flower2} alt="Premium Benefits" className="w-11/12 mx-auto h-48" /></Link>
                    <Link><img src={flower3} alt="Premium Benefits" className="w-11/12 mx-auto h-48" /></Link>
                    <Link><img src={flower4} alt="Premium Benefits" className="w-11/12 mx-auto h-48" /></Link>
                    <Link><img src={flower5} alt="Premium Benefits" className="w-11/12 mx-auto h-48" /></Link>
                    <Link><img src={flower6} alt="Premium Benefits" className="w-11/12 mx-auto h-48" /></Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;