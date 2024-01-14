import { TestimonialCardAtom } from "../../atoms/testimonialCardAtom/TestimonialCardAtom";
import { StatisticsCardMolecule } from "../../molecules/statisticsCardMolecule/StatisticsCardMolecule";
import testimonials from "../../../contents/testimonials.json";

export default function ScreensOrganism() {
  return (
    <section id="screens">
      <div id="screens__testimonials">
        <h2>User Testimonials</h2>
        <div className="testimonials__container">
          {testimonials.slice(0, 3).map(({ opinion, user }) => (
            <TestimonialCardAtom opinion={opinion} user={user} key={user}/>
          ))}
        </div>
        <div id="screens__sponsors">
          <img src="/assets/img/customer-logo-1.png" alt="Primester" />
          <img src="/assets/img/customer-logo-2.png" alt="GreenApp" />
          <img src="/assets/img/customer-logo-3.png" alt="Voltmeter" />
          <img src="/assets/img/customer-logo-4.png" alt="Keyrunner" />
          <img src="/assets/img/customer-logo-5.png" alt="Amplifier" />
        </div>
        <div className="testimonials__container">
          {testimonials.slice(3).map(({ opinion, user }) => (
            <TestimonialCardAtom opinion={opinion} user={user} key={user}/>
          ))}
        </div>
      </div>
      <div id="screens__statistics">
        <StatisticsCardMolecule/>
      </div>
      <div id="screens__">
        <div id="low__icons--float">
          <img
            id="low__circle--white--left"
            src="/assets/img/decorative-white-circle.svg"
            alt="White left circle"
          />
          <img
            id="low__circle--white--right"
            src="/assets/img/decorative-white-circle.svg"
            alt="White right circle"
          />
          <img
            id="low__circle--yellow--left"
            src="/assets/img/decorative-yellow-circle.svg"
            alt="Yellow left circle"
          />
          <img
            id="low__green--diamond"
            src="/assets/img/decorative-green-diamond.svg"
            alt="Green diamond"
          />
          <img
            id="low__circle--blue--right"
            src="/assets/img/decorative-blue-circle.svg"
            alt="Blue right circle"
          />
        </div>
      </div>
      <div id="screens__download">
        <div id="screens__mobile">
          <img src="/assets/img/download-iphone.png" alt="Iphone with Sync" />
        </div>
        <div id="download__info">
          <p className="text--full">
            Do you feel like you're wasting time with small stuff instead of
            working towards your goals? Start using Sync to organize your time
            and get a grip on your personal development
          </p>
          <div className="download__buttons">
            <a href="https://femcoders.factoriaf5.org/">
              <button className="button--red">
                <i className="fa-brands fa-apple"></i>Download
              </button>
            </a>
            <a href="https://www.somosf5.org/">
              <button className="button--red">
                <i className="fa-brands fa-google-play"></i>Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
