// import AiVideoEngagement from "@/components/screens/home/AiVideoEngagement";
import Dazzle from "@/components/screens/home/Dazzle";
import NewWay from "@/components/screens/home/NewWay";
import GetAFreeDemo from "@/components/screens/home/GetAFreeDemo";
import Hero from "@/components/screens/home/Hero";
import HorizonLive from "@/components/screens/home/HorizonLiveNumber";
// import PricingPlan from "@/components/screens/home/PricingPlan";
import RollOut from "@/components/screens/home/RollOut";
import FAQDetails from "@/components/screens/home/FAQDetails";
import MeetHorizon from "@/components/screens/home/MeetHorizon";
import SuperEngagment from "@/components/screens/home/SuperEngagment";
import VideoAnimation from "@/components/screens/home/VideoAnimation";
import BuildDirect from "@/components/screens/home/BuildDirect";
import Unlock from "@/components/screens/home/Unlock";
import HorizonApp from "@/components/screens/home/HorizonApp";
import ProDisplay from "@/components/screens/home/ProDisplay";

export const metadata = {
  title: "Horizon | Super Engagement Platform",
  description:
    "Horizon is a super engagement platform. Engage your customers with a magical experience.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN,
  },
  keywords: [
    "Horizon",
    "iXP",
    "Intelligent Experience Platform",
    "Engage",
    "Monetize",
    "Retain",
    "Audience",
    "Customer Experience",
    "Intelligent Digital Experiences",
    "Personalized Shorts",
    "No Code",
    "Innovation",
  ],
};

export default function Home() {
  return (
    <main>
      <div className="space-y-200px mb-200px">
        <Hero />
        {/* <AiVideoEngagement /> */}
        <VideoAnimation videoSrc="/assets/videos/blackScreen.mp4" />
        <NewWay />
        <MeetHorizon />
        <HorizonApp />
        <Dazzle />
        <Unlock />
        <SuperEngagment />
        <BuildDirect />
        <ProDisplay />
        <RollOut />
        <HorizonLive />
        <GetAFreeDemo />
        <FAQDetails />
        {/* <PricingPlan />
         */}
      </div>
    </main>
  );
}
