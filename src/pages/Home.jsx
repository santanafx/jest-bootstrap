import { CardText } from "../components/CardText/CardText";
import { Slider } from "../components/Slider/Slider";

export const Home = () => {
    return (
        <main>
            <Slider />
            <section>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Our Company</h4>
                            <div className="underline mb-3"></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi non culpa vero molestias
                                unde illo laborum ad, dolor accusamus
                                distinctio! Impedit excepturi provident amet
                                nobis quisquam laudantium accusantium error
                                quis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Vel molestiae explicabo facere
                                quis accusantium, consequuntur nisi sit commodi
                                consequatur odio quisquam ad, est aperiam,
                                praesentium aut itaque asperiores tempora
                                dolores!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CardText />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Our Services</h4>
                            <div className="mb-3 underline"></div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4>Web Designing</h4>
                                    <div className="mb-3 sub-underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ducimus quisquam quae
                                        itaque voluptatibus error maxime.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4>Development</h4>
                                    <div className="mb-3 sub-underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ducimus quisquam quae
                                        itaque voluptatibus error maxime.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4>Digital Marketing</h4>
                                    <div className="mb-3 sub-underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ducimus quisquam quae
                                        itaque voluptatibus error maxime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
