import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <section className="bg-dark text-white py-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Info</h6>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veritatis in id et odio! Consequuntur mollitia
                            voluptas minima architecto, sed totam, quidem
                            ratione ipsam exercitationem, omnis praesentium
                            itaque! Dignissimos, architecto rem.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />

                        <div>
                            <Link to="/" className="text-decoration-none">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to="/about" className="text-decoration-none">
                                About Us
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/contatc"
                                className="text-decoration-none"
                            >
                                Contact Us
                            </Link>
                        </div>
                        <div>
                            <Link to="/" className="text-decoration-none">
                                Blog
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div>
                            <p>Lorem Street, Lorem Ipsum, 51, Brazil</p>
                        </div>
                        <div>
                            <p>888877445566</p>
                        </div>
                        <div>
                            <p>5435342224</p>
                        </div>
                        <div>
                            <p>demo@demo.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
