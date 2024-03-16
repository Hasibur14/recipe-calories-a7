
import banner from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div className='container mx-auto my-16 p-2 lg:p-0'>
            <div
                className="relative lg:h-[70vh] rounded-3xl w-full bg-center bg-cover flex text-center items-center justify-center"
                style={{ backgroundImage: `url(${banner})` }}>
                <div className="text-white lg:space-y-10 ">
                    <h1 className="raleway text-3xl font-raleway lg:text-7xl font-extrabold">Discover an exceptional cooking <br /> class tailored for you!
                    </h1>
                    <p className="font-inter text-xs lg:text-lg">Discover an exceptional cooking class tailored just for you! Whether you re a beginner eager to <br /> learn the basics or a seasoned chef looking to refine your skills, this personalized cooking <br /> experience promises to elevate your culinary expertise</p>
                    <div className="lg:flex items-center justify-center lg:space-x-5 ">
                        <button
                            className="btn lg:w-44 lg:h-16 rounded-full bg-[#1DD100] text-white text-xl hover:bg-transparent border-2 border-[#1DD100]">Explore Now</button>
                        <button className='btn lg:w-48 lg:h-16 rounded-full text-white hover:text-green-500 text-xl bg-transparent border-2 '>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
