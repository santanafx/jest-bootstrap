import { CardText } from "../components/CardText/CardText";

export const About = () => {
    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">About Us</h1>
            </section>
            <section>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>About Our Company</h4>
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
        </div>
    );
};
