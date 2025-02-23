import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import WhatIsHackathon from "@/components/WhatIsHackathon";

export default function Home() {
  return (
    <>
      <Landing />
      <Timeline />
      <Prizes />
      {/* <Sponsors /> */}
      <WhatIsHackathon />
      <FAQS />
      <Footer />
    </>
  );
}
