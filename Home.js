
const Home = () => {
    return (
        <>
            <body>
                {/* home video */}
                <div>
                    <video autoplay muted loop>
                        <source src="{% static 'Jawa.mp4' %}" type="video/mp4"></source>
                    </video>
                </div>

                {/* brand logos */}
                <div class="brands">
                    <div class="box1"></div>
                    <div class="box2"></div>
                    <div class="box3"></div>
                </div>


                {/* <!-- bike section --> */}
                <div class="bikes">
                    <div class="card-main">
                        <h1>BIKES</h1>

                        <div class="card-container">

                            {/* <!-- first card --> */}
                            <div class="card-item">
                                {/* <img src="{% static 'royalenfieldhunter350.webp' %}" width="300px"></img> */}
                                <div class="detail">
                                    <h2>Royal Enfield Hunter</h2>
                                    <p>1,50,000-1,75,000</p>
                                    <button><a href="./login">View Details</a></button>
                                </div>
                            </div>

                            {/* <!-- second card --> */}
                            <div class="card-item">
                                {/* <img src="{% static 'ktmrc200.webp' %}" width="300px"></img> */}
                                <div class="detail">
                                    <h2>KTM Rc 200</h2>
                                    <p>2,18,000</p>
                                    <button><a href="./login">View Details</a></button>
                                </div>
                            </div>
                            {/* <!-- third card --> */}
                            <div class="card-item">
                                {/* <img src="{% static 'jawaperak.webp' %}" width="300px"></img> */}
                                <div class="detail">
                                    <h2>Jawa Perak</h2>
                                    <p>2,14,000</p>
                                    <button><a href="./login">View Details</a></button>
                                </div>
                            </div>

                            {/* <!-- fourth card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>

                            {/* <!-- fifth card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>

                            {/* <!-- sixth card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- go green go electric --> */}
                <div class="electric-head">
                    <h1>go green</h1>
                    <h1>go electric</h1>
                </div>

                {/* <!-- electric section --> */}
                <div class="bikes">
                    <div class="card-main">
                        <h1>ELECTRIC</h1>

                        <div class="card-container">

                            {/* <!-- first card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>

                            {/* <!-- second card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>
                            {/* <!-- third card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>

                            {/* <!-- fourth card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>

                            {/* <!-- fifth card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>

                            {/* <!-- sixth card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./login">View Details</a></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* reviews */}
                <div className="reviews">
                    reviews
                </div>

                {/* location */}
                <div className="location">
                    map and contact form
                </div>

                {/* footer */}
                <div className="footer">
                    <footer className="new_footer_area bg_color">
                        <div className="new_footer_top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                            <p>Don’t miss any updates of our new templates and extensions.!</p>
                                            <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate="true" _lpchecked={1}>
                                                <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                                <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                                <p className="mchimp-errmessage" style={{ display: 'none' }} />
                                                <p className="mchimp-sucmessage" style={{ display: 'none' }} />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                            <ul className="list-unstyled f_list">
                                                <li><a href="#">Company</a></li>
                                                <li><a href="#">Android App</a></li>
                                                <li><a href="#">ios App</a></li>
                                                <li><a href="#">Desktop</a></li>
                                                <li><a href="#">Projects</a></li>
                                                <li><a href="#">My tasks</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                            <ul className="list-unstyled f_list">
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Term &amp; conditions</a></li>
                                                <li><a href="#">Reporting</a></li>
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="#">Support Policy</a></li>
                                                <li><a href="#">Privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                            <div className="f_social_icon">
                                                <a href="#" className="fab fa-facebook" />
                                                <a href="#" className="fab fa-twitter" />
                                                <a href="#" className="fab fa-linkedin" />
                                                <a href="#" className="fab fa-pinterest" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_bg">
                                <div className="footer_bg_one" />
                                <div className="footer_bg_two" />
                            </div>
                        </div>
                        
                    </footer>

                </div>
            </body>
        </>
    );
}
export default Home;