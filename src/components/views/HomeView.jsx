import { useInView } from 'react-intersection-observer';
import { useState } from "react";

import HeaderOrganism from "../organisms/header/HeaderOrganism";
import HomeOrganism from "../organisms/home/HomeOrganism";
import DescriptionOrganism from "../organisms/description/DescriptionOrganism";
import FeaturesOrganism from "../organisms/features/FeaturesOrganism";
import ScreensOrganism from "../organisms/screens/ScreensOrganism";
import FooterOrganism from "../organisms/footer/FooterOrganism";

export function HomeView() {
    const [currentSection, setCurrentSection] = useState();

    const { ref: refHome } = useInView({
        onChange (inView) {
            if (inView) {
                setCurrentSection('home')
            }
        }
      });

      const { ref: refDescription } = useInView({
        onChange: (inView) => {
            if (inView) {
                setCurrentSection('description')
            }
        }
      });

      const { ref: refFeatures } = useInView({
        onChange: (inView) => {
            if (inView) {
                setCurrentSection('features')
            }
        }
      });

      const { ref: refScreens } = useInView({
        onChange: (inView) => {
            if (inView) {
                setCurrentSection('screens')
            }
        }
      });


    return (
        <>
            <HeaderOrganism currentSection={currentSection} />
            <main>
                <div ref={refHome}>
                    <HomeOrganism />
                </div>
                <div ref={refDescription}>
                    <DescriptionOrganism/>
                </div>
                <div ref={refFeatures}>
                    <FeaturesOrganism/>
                </div>
                <div ref={refScreens}>
                    <ScreensOrganism />
                </div>
            </main>
            <FooterOrganism/>     
        </>
    );
  }
  