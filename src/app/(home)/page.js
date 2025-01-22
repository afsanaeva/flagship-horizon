// import AiVideoEngagement from "@/components/screens/home/AiVideoEngagement";
import Dazzle from '@/components/screens/home/Dazzle';
import NewWay from '@/components/screens/home/NewWay';
import Hero from '@/components/screens/home/Hero';
// import HorizonLive from '@/components/screens/home/HorizonLiveNumber';
// import PricingPlan from "@/components/screens/home/PricingPlan";
import RollOut from '@/components/screens/home/RollOut';
// import FAQDetails from '@/components/screens/home/FAQDetails';
import FAQDetails from '@/components/screens/common/FAQDetails';
import MeetHorizon from '@/components/screens/home/MeetHorizon';
import SuperEngagment from '@/components/screens/home/SuperEngagment';
import VideoAnimation from '@/components/screens/home/VideoAnimation';
import BuildDirect from '@/components/screens/home/BuildDirect';
import Unlock from '@/components/screens/home/Unlock';
import HorizonApp from '@/components/screens/home/HorizonApp';
import ProDisplay from '@/components/screens/home/ProDisplay';
import RolloutComparisonSection from '@/components/screens/common/RolloutComparisonSection';
import HorizonLive from '@/components/screens/common/HorizonLiveNumber';
import GetAFreeDemo from '@/components/screens/home/GetAFreeDemo';
import { FAQDetailsDataHome } from '@/components/constant/FAQData';

export const metadata = {
  title: 'Horizon | Super Engagement Platform',
  description:
    'Horizon is a super engagement platform. Engage your customers with a magical experience.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN,
  },
  keywords: [
    'Horizon',
    'iXP',
    'Intelligent Experience Platform',
    'Engage',
    'Monetize',
    'Retain',
    'Audience',
    'Customer Experience',
    'Intelligent Digital Experiences',
    'Personalized Shorts',
    'No Code',
    'Innovation',
  ],
};

export default function Home() {
  return (
    <main>
      <div className="space-y-200px mb-200px">
        <Hero />
        {/* <AiVideoEngagement /> */}
        <VideoAnimation videoSrc="/assets/videos/animationVideo.mp4" />
        <NewWay />
        <MeetHorizon />
        <HorizonApp />
        <Dazzle />
        <Unlock />
        <SuperEngagment />
        <BuildDirect />
        <ProDisplay />
        {/* <RollOut /> */}
        <RolloutComparisonSection />
        {/* <HorizonLive /> */}
        <HorizonLive
          title="See Horizon’s magic live, experience <br class='max-md:hidden'/> what it can do for your business."
          intro="We’re already delivering super engagement on some of the world’s leading platforms. <br/> Explore live engagement stats from digital platforms powered by Horizon today."
        />

        <GetAFreeDemo title="Accelerate your growth. <br class='max-md:hidden'/> Experience Horizon for free." />
        {/* <FAQDetails /> */}
        <FAQDetails FAQDetailsData={FAQDetailsDataHome} />
        {/* <PricingPlan />
         */}
      </div>
    </main>
  );
}
