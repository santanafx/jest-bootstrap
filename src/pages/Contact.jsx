export const Contact = () => {
    return (
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">Contact Us</h1>
            </section>
            <section>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.954274762235!2d-43.213062123834405!3d-22.951911039486852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sCristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1689981096210!5m2!1spt-BR!2sbr"
                                width="600"
                                height="450"
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <div className="card-body py-4">
                                    <h4>Send Your Idea</h4>
                                    <div className="underline mb-3"></div>
                                    <form>
                                        <label htmlFor="">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your Name"
                                            className="form-control mb-3"
                                        />
                                        <label htmlFor="">Email</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your Email"
                                            className="form-control mb-3"
                                        />
                                        <label htmlFor="">Message</label>
                                        <textarea
                                            className="form-control mb-3"
                                            rows="3"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
