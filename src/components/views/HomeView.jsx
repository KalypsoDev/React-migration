export function HomeView() {
    return (
        <>
            <header>
                <div id="header__logo">
                    <img className="logo" src="/assets/img/logo.svg" alt="Sync's logo"/>
                </div>
                <div id="header__sections">
                    <nav id="header__navbar">
                        <ul>
                            <li><a href="#description">Description</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#screens">Screens</a></li>
                            <li id="navbar__extra"><a href="#extra">Extra</a><img src="/assets/img/down-arrow.png" alt="Section extra"/>
                                <ul id="extra__sections">
                                    <li id="#extra__article"><a href="article.html">Article details</a></li>
                                    <li id="#extra__terms"><a href="article.html">Terms conditions</a></li>
                                    <li id="#extra__policy"><a href="policy.html">Privacy policy</a></li>
                                </ul>
                        </li>
                        </ul>
                    </nav>
                    <a href="https://factoriaf5.org/"><button id="header__button">Download</button></a>
                    
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>
            
                    <svg data-onclick="this.parentElement.blur()" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" fillRule="evenodd" d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"/></svg>
                </button>
            </header>
            <main>
                <section id="home">
                    <div id="home__download">
                        <div id="above__icons--float">
                            <img id="green--diamond" src="/assets/img/decorative-green-diamond.svg" alt="Green diamond"/>
                            <img id="yellow--circle" src="/assets/img/decorative-yellow-circle.svg" alt="Yellow circle"/>               
                        </div>
                        <div id="home__description">
                            <h1>Mobile App Landing Page</h1>
                            <p className="text--full">Start focusing on your goals and get more things done with Sync mobile application. It's the first app to harness the power of social connections to help you stay focused and get organized</p>
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
                    <div id="medium__icons--float">
                        <img id="medium__circle--white--left" src="/assets/img/decorative-white-circle.svg" alt="White left circle"/>
                        <img id="medium__circle--white--right" src="/assets/img/decorative-white-circle.svg" alt="White right circle"/>
                        <img id="medium__circle--blue--left" src="/assets/img/decorative-blue-circle.svg" alt="Blue left circle"/>
                    </div>
                    <div id="header__mobile">
                        <img src="/assets/img/header-iphone.png" alt="Iphone with Sync"/>
                    </div>
                    <div id="home__cards">
                        <div className="card--colored">
                            <div className="card--padding" id="icon__users--background">
                                <i className="fa-solid fa-users fa-beat fa-2xl"></i>
                            </div>
                            <h4>Identify Goals</h4>
                        </div>
                        <div className="card--colored">
                            <div className="card--padding" id="icon__code--background">
                                <i className="fa-solid fa-code fa-beat fa-2xl"></i>
                            </div>
                            <h4>Situation Analysis</h4>
                        </div>
                        <div className="card--colored">
                            <div className="card--padding" id="icon__gear--background">
                                <i className="fa-solid fa-gear fa-beat fa-2xl"></i>
                            </div>
                            <h4>Tasks Settings</h4>
                        </div>
                        <div className="card--colored">
                            <div className="card--padding" id="icon__comments--background">
                                <i className="fa-solid fa-comments fa-beat fa-2xl"></i>
                                </div>
                            <h4>Social Interaction</h4>
                        </div>
                        <div className="card--colored">
                            <div className="card--padding" id="icon__rocket--background">
                                <i className="fa-solid fa-rocket fa-beat fa-2xl"></i>
                            </div>
                            <h4>Get Things Done</h4>
                        </div>              
                    </div>
                </section>
                <section id="description">
                    <div id="description__organize">
                        <div id="organize__left">
                            <img src="/assets/img/description-1-app.png" alt="Picks"/>
                        </div>
                        <div id="organize__right">
                            <h2>Organize Your Time And Start Getting Results</h2>
                            <p>Sync is the first mobile app on the market to harness the power of social connections to help you stop procrastinating and start getting things done. Give it a try and see the changes right away</p>
                            <ul>
                                <li>Analyse and evaluate your current status and productivity</li>
                                <li>Begin monitoring your day to day routine with Sync app</li>
                                <li>See the improved results in no more than a couple of weeks</li>
                            </ul>
                            <a href="https://femcoders.factoriaf5.org/">
                                <button className="button--red">LIGHTBOX</button>
                            </a>
                        </div>
                    </div>

                    <div id="description__schedule">
                        <div id="schedule__left">
                            <div id="schedule__buttons">
                                <div id="schedule__rows">
                                    <div id="schedule__row1">
                                        <button id="schedule__button"><i className="fa-regular fa-clock" aria-hidden="true" id="schedule__clock"></i><b>Schedule</b></button>
                                        <button><i className="fa fa-list-ul" aria-hidden="true"></i><b>Tracking</b></button>   
                                    </div>
                                    <div id="schedule__row2">
                                        <button><i className="fa fa-calendar-alt" aria-hidden="true"></i><b>Organize</b></button>
                                    </div>
                                </div>
                            </div>
                            <p><b>Schedule tasks</b> to keep track of their completion. Sync provides multiple scheduling options including alarms and reminders.</p>
                            <ul>
                                <li><i className="fa-regular fa-square-check"></i>You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel</li>
                                <li><i className="fa-regular fa-square-check"></i>It's easy to stay focused on your most important daily activities that will get you closer to meeting your goals</li>
                                <li><i className="fa-regular fa-square-check"></i>Use phone reminders to free up your long term memory which will reduce stress and make you more productive</li>
                            </ul>
                            <div className="terms__buttons">
                                <a href="https://femcoders.factoriaf5.org/"><button className="button--red">TERMS
                                </button></a>
                                <a href="https://www.somosf5.org/"><button className="button--white">PRIVACY
                                </button></a>
                            </div>
                        </div>
                        <div id="schedule__right">
                            <img src="/assets/img/description-2-app.png" alt="Calendar"/>
                        </div>
                    </div>
                </section>
                <section id="features">
                    <h2>Special Features</h2>
                    <p className="text--full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit at provident, culpa officia qui sequi rerum modi laborum beatae deserunt id, voluptatibus expedita maxime aliquid libero, nisi repellendus ab?</p>
                    <p className="text--full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit at provident, culpa officia qui sequi rerum modi laborum beatae deserunt id, voluptatibus expedita maxime aliquid libero, nisi repellendus ab?</p>
                    <p className="text--full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit at provident, culpa officia qui sequi rerum modi laborum beatae deserunt id, voluptatibus expedita maxime aliquid libero, nisi repellendus ab?</p>
                    <p className="text--full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit at provident, culpa officia qui sequi rerum modi laborum beatae deserunt id, voluptatibus expedita maxime aliquid libero, nisi repellendus ab?</p>
                    <p className="text--full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit at provident, culpa officia qui sequi rerum modi laborum beatae deserunt id, voluptatibus expedita maxime aliquid libero, nisi repellendus ab?</p>
                </section>
                <section id="screens">
                    <div id="screens__testimonials">
                        <h2>User Testimonials</h2>
                        <div className="testimonials__container">
                            <div className="testimonials__cards">
                                <div className="testimonials__score">
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                </div>
                                <div className="testimonials__opinion">
                                    <p>I love using Sync for my personal development needs. It meets all my requirements and it actually helps a lot with focusing skills.</p>
                                </div>
                                <div className="testimonials__user"> 
                                    <p><b>Rick Jones - Designer</b></p>
                                </div>
                            </div>
                            <div className="testimonials__cards">
                                <div className="testimonials__score">
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                </div>
                                <div className="testimonials__opinion">
                                    <p>After trying out a large number of personal coaching apps I decided to give Sync a try and what a wonderful surprise it was.</p>
                                </div>
                                <div className="testimonials__user"> 
                                    <p><b>Lynda Marquez - Developer</b></p>
                                </div>
                            </div>
                            <div className="testimonials__cards">
                                <div className="testimonials__score">
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                </div>
                                <div className="testimonials__opinion">
                                    <p>Never dreamed I could learn so fast how to focus on my personal goals and improve my life to levels I never thought possible.</p>
                                </div>
                                <div className="testimonials__user"> 
                                    <p><b>Jay Frisco - Marketer</b></p>
                                </div>
                            </div>

                        </div>
                        <div id="screens__sponsors">
                            <img src="/assets/img/customer-logo-1.png" alt="Primester"/>
                            <img src="/assets/img/customer-logo-2.png" alt="GreenApp"/>
                            <img src="/assets/img/customer-logo-3.png" alt="Voltmeter"/>
                            <img src="/assets/img/customer-logo-4.png" alt="Keyrunner"/>
                            <img src="/assets/img/customer-logo-5.png" alt="Amplifier"/>
                        </div>
                        <div className="testimonials__container">
                            <div className="testimonials__cards">
                                <div className="testimonials__score">
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                </div>
                                <div className="testimonials__opinion">
                                    <p>I got so much value from using Sync in my daily life for which I am very grateful and would recommend it to everybody</p>
                                </div>
                                <div className="testimonials__user"> 
                                    <p><b>Frank Gibson - Manager</b></p>
                                </div>
                            </div>
                            <div className="testimonials__cards">
                                <div className="testimonials__score">
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                </div>
                                <div className="testimonials__opinion">
                                    <p>If you have great goals but can't figure out a way to keep focused then you should definitely give Sync a try and see the results</p>
                                </div>
                                <div className="testimonials__user"> 
                                    <p><b>Rita Longmile - Designer
                                    </b></p>
                                </div>
                            </div>
                            <div className="testimonials__cards">
                                <div className="testimonials__score">
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                    <i className="fa-solid fa-star"></i> 
                                </div>
                                <div className="testimonials__opinion">
                                    <p>I've been looking for a great organizer app for such a long time but now I am really happy that I found Sync. It's beeen working great</p>
                                </div>
                                <div className="testimonials__user"> 
                                    <p><b>Jones Smith - Developer</b></p>
                                </div>
                            </div>
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