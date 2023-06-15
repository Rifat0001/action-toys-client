import Lottie from "lottie-react";
import hero from "../../../assets/toys_hero.json";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FilterCategory from "../../FilterCategory/FilterCategory";
const Home = () => {
    return (
        <div >
            {/* hero section part  */}
            <section className="hero  bg-black">
                <div className="hero-content grid md:grid-cols-2 grid-cols-1">
                    <div className="ms-4 md:mt-0 mt-8">
                        <h1 className="text-5xl font-bold text-white md:me-32 me-0 leading-tight">Best <span className="text-primary"> Action Figure</span>  Toys in Town</h1>
                        <p className="py-6 md:me-32 me-0 text-white">Unleash your imagination and ignite the adventure with Action Toys — where dreams take flight and heroes are born!</p>
                        <button className="btn text-white btn-primary">Buy Now</button>
                    </div>
                    <div>
                        <Lottie animationData={hero} loop={true} />
                    </div>

                </div>
            </section>
            {/* about section part  */}
            <section className="md:px-28 py-10">
                <div className="hero-content grid md:grid-cols-2 grid-cols-1 gap-6 justify-around">

                    <div >
                        <img src="https://th.bing.com/th/id/R.f66dd69881ee715323092298c3466a42?rik=08AL6EH38WpLCA&pid=ImgRaw&r=0" alt="" className="" />
                    </div>
                    <div className="md:ms-12">
                        <h1 className="text-5xl font-bold md:text-start text-center  md:me-32 me-0 leading-tight">Our
                            <span className="text-primary"> Story</span>
                        </h1>
                        <div className="py-6  md:me-20 me-0">
                            <p >Welcome to Action Toys, where the world of imagination and play collide! We are a premier destination for all things action-packed and thrilling. At our toy shop, we believe in the power of play to inspire, educate, and entertain children of all ages.</p>
                            <br />
                            <p >We take pride in delivering exceptional customer service, ensuring a seamless shopping experience from start to finish. Our knowledgeable staff is always ready to assist you in finding the perfect toy or answer any questions you may have.</p>
                        </div>

                        <button className="btn text-white btn-primary">Read More</button>
                    </div>
                </div>
            </section>
            {/* gallery section  */}
            <section className="md:px-28 px-4 py-10">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Our
                        <span className="text-primary"> Gallery</span>
                    </h1>
                    <p className="md:mx-48 mx-8" >A visual feast for toy enthusiasts and collectors alike! Step into a world of wonder as we showcase a stunning array of action figures, playsets, and vehicles that will ignite your imagination.</p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
                    <img src="https://i.ibb.co/Cv89SP2/OIP-3.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />
                    <img src="https://i.ibb.co/TwS7WDw/R-1.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />
                    <img src="https://i.ibb.co/7GbhyrN/OIP-4.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />
                    <img src="https://i.ibb.co/CzTsWy2/R-2.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />
                    <img src="https://i.ibb.co/X7cS7SV/OIP-5.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />

                    <img src="https://i.ibb.co/1J9GWGJ/R-3.jpg" alt="" className="border  shadow-md shadow-indigo-500/50 rounded-lg w-[400px] h-[400px]" />

                </div>
            </section>
            <FilterCategory></FilterCategory>
            {/* contact us section  */}
            <section className='grid md:grid-cols-2 grid-cols-1  justify-between items-center md:px-28 px-4 py-20'>
                <div className=''>
                    <h1 className="text-5xl font-bold mb-4">Contact
                        <span className="text-primary"> Us</span>
                    </h1>
                    <p className="py-6 text-black md:me-20">Have a question, feedback, or need assistance? Our Contact Us section is designed to make it easy for you to reach out and get the support you need. Our dedicated support team is here to assist you with any inquiries or concerns you may have.</p>
                    <div className='flex gap-4'>
                        <FaFacebook className='text-3xl'></FaFacebook>
                        <FaInstagram className='text-3xl'></FaInstagram>
                        <FaTwitter className='text-3xl'></FaTwitter>
                        <FaLinkedin className='text-3xl'></FaLinkedin>
                    </div>


                </div>
                <div className=' mt-8 md:mt-0 border  shadow-md shadow-indigo-500/50  px-4 py-4 rounded-md'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" className="input login-input" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Message</span>
                        </label>
                        <input type="text" placeholder="Your Message" className="input login-input" />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white border-none">Send Message</button>
                    </div>
                </div>

            </section >
        </div>
    );
};

export default Home;