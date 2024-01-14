import { TestimonialCardAtom } from "../../atoms/testimonialCardAtom/TestimonialCardAtom";
import testimonials from "../../../contents/testimonials.json";

const screensSponsorsAlt = ["Primester", "GreenApp", "Voltmeter", "Keyrunner", "Amplifier"];

export function TestimonialsMolecule() {
  return (
    <>
      <h2>User Testimonials</h2>
      <div className="testimonials__container">
        {testimonials.slice(0, 3).map(({ opinion, user }) => (
          <TestimonialCardAtom opinion={opinion} user={user} key={user} />
        ))}
      </div>
      <div id="screens__sponsors">
        {
            screensSponsorsAlt.map((alt, index)=> (
                <img src={`/assets/img/customer-logo-${index+1}.png`} alt={alt} key={alt}/>
            ))
        }

      </div>
      <div className="testimonials__container">
        {testimonials.slice(3).map(({ opinion, user }) => (
          <TestimonialCardAtom opinion={opinion} user={user} key={user} />
        ))}
      </div>
    </>
  );
}
