import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroCom from "../components/home/HeroCom";
import IndustriesCom from "../components/home/IndustriesCom";
import PresenceCom from "../components/home/PresenceCom";
import ServicesCom from "../components/home/ServicesCom";
import VisionCom from "../components/home/VisionCom";
import WhyUsCom from "../components/home/WhyUsCom";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <HeroCom />
      <WhyUsCom />
      <ServicesCom />
      <PresenceCom />
      <IndustriesCom />
      <VisionCom />
    </div>
  );
};

export default Index;