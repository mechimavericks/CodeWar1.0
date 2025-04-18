import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import SupportedBy from "@/components/SupportedBy";
import Timeline from "@/components/Timeline";
import WhatIsCodeWar from "@/components/WhatIsHackathon";
import Organized from "@/components/Organized";
import OurAdvisor from "@/components/OurAdvisor";
import PoweredBy from "@/components/PowerBy";

export default function Home() {
  return (
    <>
      <Landing />
      <Timeline />
      <Prizes />
      <Organized />
      <Sponsors />
      <PoweredBy/>
      <SupportedBy />
      <OurAdvisor/>
      <WhatIsCodeWar />
      <FAQS />
      <Footer />
    </>
  );
}
