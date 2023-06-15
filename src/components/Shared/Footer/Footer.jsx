const Footer = () => {
    return (
        <div>
            <div className="footer p-10 bg-base-200 text-base-content mx-auto md:px-40 px-12 grid md:grid-cols-4 grid-cols-1">

                <div className="space-y-2">

                    <h1 className="text-3xl text-primary font-bold italic flex items-center"> <span>Action Toys</span></h1>
                    <p className=" ">
                        The best action figure in town
                        <br />
                        Shop Now
                    </p>
                    <p className=" ">Dhaka, Bangladesh</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-gray mx-12">
                <p className="text-black sm:text-xs text-center">Copyright © 2023 - All right reserved by The Action Toys Ltd</p>
            </div>
        </div>
    );
};

export default Footer;