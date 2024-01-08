import { TestimonialsCards } from "../cards/TestimonialsCards";
import testimonials from "../../contents/testimonials";
import HeaderOrganism from "../organisms/header/HeaderOrganism";
import HomeOrganism from "../organisms/home/HomeOrganism";
import DescriptionOrganism from "../organisms/description/DescriptionOrganism";
import FeaturesOrganism from "../organisms/features/FeaturesOrganism";

export function HomeView() {

    return (
        <>
            <HeaderOrganism/>
            <main>
                <HomeOrganism/>
                <DescriptionOrganism/>
                <FeaturesOrganism/>
                <section id="screens">
                    <div id="screens__testimonials">
                        <h2>User Testimonials</h2>
                        <div className="testimonials__container">
                            {
                                testimonials.slice(0, 3).map(({ opinion, user }) => (
                                    <TestimonialsCards 
                                        opinion={opinion}
                                        user={user}
                                    />
                                ))
                            }
                        </div>
                        <div id="screens__sponsors">
                            <img src="/assets/img/customer-logo-1.png" alt="Primester"/>
                            <img src="/assets/img/customer-logo-2.png" alt="GreenApp"/>
                            <img src="/assets/img/customer-logo-3.png" alt="Voltmeter"/>
                            <img src="/assets/img/customer-logo-4.png" alt="Keyrunner"/>
                            <img src="/assets/img/customer-logo-5.png" alt="Amplifier"/>
                        </div>
                        <div className="testimonials__container">
                        {
                                testimonials.slice(3).map(({ opinion, user }) => (
                                    <TestimonialsCards 
                                        opinion={opinion}
                                        user={user}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div id="screens__statistics">
                        <div id="statistics__cards">
                            <div className="card--colored card--grey">
                                <div id="icon__users">
                                    <i className="fa-solid fa-users fa-beat fa-2xl"></i>
                                </div>
                                <h2>231</h2>
                                <p>Happy Users</p>
                            </div>
                            <div className="card--colored card--grey">
                                <div id="icon__code">
                                    <i className="fa-solid fa-code fa-beat fa-2xl"></i>
                                </div>
                                <h2>385</h2>
                                <p>Issues Solved</p>
                            </div>
                            <div className="card--colored card--grey">
                                <div id="icon__gear">
                                    <i className="fa-solid fa-gear fa-beat fa-2xl"></i>
                                </div>
                                <h2>159</h2>
                                <p>Good Reviews</p>
                            </div>
                            <div className="card--colored card--grey">
                                <div id="icon__comments">
                                    <i className="fa-solid fa-comments fa-beat fa-2xl"></i>
                                    </div>
                                <h2>127</h2>
                                <p>Case Studies</p>
                            </div>
                            <div className="card--colored card--grey">
                                <div id="icon__rocket">
                                    <i className="fa-solid fa-rocket fa-beat fa-2xl"></i>
                                </div>
                                <h2>211</h2>
                                <p>Orders Received</p>
                            </div>              
                        </div>
                    </div>
                    <div id="screens__">
                        <div id="low__icons--float">
                            <img id="low__circle--white--left" src="/assets/img/decorative-white-circle.svg" alt="White left circle"/>
                            <img id="low__circle--white--right" src="/assets/img/decorative-white-circle.svg" alt="White right circle"/>
                            <img id="low__circle--yellow--left" src="/assets/img/decorative-yellow-circle.svg" alt="Yellow left circle"/>
                            <img id="low__green--diamond" src="/assets/img/decorative-green-diamond.svg" alt="Green diamond"/>
                            <img id="low__circle--blue--right" src="/assets/img/decorative-blue-circle.svg" alt="Blue right circle"/>
                        </div>
                    </div>
                    <div id="screens__download">
                        <div id="screens__mobile">
                            <img src="/assets/img/download-iphone.png" alt="Iphone with Sync"/>
                        </div>
                        <div id="download__info">
                            <p className="text--full">Do you feel like you're wasting time with small stuff instead of working towards your goals? Start using Sync to organize your time and get a grip on your personal development</p> 
                            <div className="download__buttons">
                                <a href="https://femcoders.factoriaf5.org/"><button className="button--red">
                                    <i className="fa-brands fa-apple"></i>Download
                                </button></a>
                                <a href="https://www.somosf5.org/"><button className="button--red">
                                    <i className="fa-brands fa-google-play"></i>Download
                                </button></a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div id="footer__links">
                    <div className="links__cards">
                        <h3>Contact Info</h3>
                        <div className="contact__cards">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>22 Innovation Street, CA, US</p>
                        </div>
                        <div className="contact__cards">
                            <a href="mailto:office@syncmobile.com"><i className="fa-solid fa-envelope"></i></a>
                            <p>office@syncmobile.com</p>
                        </div>
                        <div className="contact__cards">
                            <i className="fa-solid fa-phone"></i>
                            <p>+44 376 945 23</p>
                        </div>
                    </div>
                    <div className="links__cards">
                        <h3>Value Links</h3>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Article Details</li>
                        </ul>
                    </div>
                    <div className="links__cards">
                        <h3>Other Apps</h3>
                        <ul>
                            <li>Scientific Calculator</li>
                            <li>Advanced Timer</li>
                            <li>Music Store</li>
                        </ul>
                    </div>
                    <div id="links__socialmedia"> 
                        <a href="https://www.facebook.com"><i className="fa-brands fa-facebook-f" alt="Facebook"></i></a>  
                        <a href="https://twitter.com"><i className="fa-brands fa-twitter" alt="Twitter"></i></a>
                        <a href="https://www.pinterest.es/"><i className="fa-brands fa-pinterest-p" alt="Pinterest"></i></a>
                        <a href="https://www.instagram.com"><i className="fa-brands fa-instagram" alt="Instagram"></i></a>
                    </div>
                </div>
                <div id="footer__copyright">
                    <p>Copyright © 2020 Inovatik - All rights reserved</p>
                </div>
            </footer>        
        </>
    );
  }