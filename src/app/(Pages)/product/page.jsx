import { FAQDetailsData } from '@/components/constant/FAQData';
import CustomHorizonApp from '@/components/screens/common/CustomHorizonApp';
import FAQDetails from '@/components/screens/common/FAQDetails';
import HeroTitle from '@/components/screens/common/HeroTitle';
import HorizonLive from '@/components/screens/common/HorizonLiveNumber';
import SliderSection from '@/components/screens/common/SliderSection';
import GetAFreeDemo from '@/components/screens/home/GetAFreeDemo';
import AiPoweredSection from '@/components/screens/product/AiPowered/AiPoweredSection';
import HandHeroSection from '@/components/screens/product/HandHeroSection';
import HorizonConsole from '@/components/screens/product/HorizonConsole/HorizonConsole';
import InfinityScrollSection from '@/components/screens/product/InfinityScrollSection';
import MonetizeSection from '@/components/screens/product/MonetizeSection';
import PowerfulContent from '@/components/screens/product/PowerfulContent/PowerfulContent';
import SeamlessSocialSection from '@/components/screens/product/SeamlessSocialSection';
import TransformSection from '@/components/screens/product/Transform/TransformSection';
import VersatileSection from '@/components/screens/product/VersatileSection';

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

export const dataVideo = [
  {
    percent: '300%',
    spanText: 'more shares',
    intro: 'Moments by NBA',
  },
  {
    percent: '1 in 2',
    spanText: 'purchase decisions influenced',
    intro: 'Shorts by TikTok',
  },
  {
    percent: '70%',
    spanText: 'more likes',
    intro: 'Reels by Instagram',
  },
  {
    percent: '1.3X',
    spanText: 'more subscriptions',
    intro: 'Fast Laughs by Netflix',
  },
  {
    percent: '32%',
    spanText: 'more impulse purchases',
    intro: 'Shorts by YouTube',
  },
  {
    percent: '1.27x',
    spanText: 'more views',
    intro: 'Reels by Facebook',
  },
];

export const dataCard = [
  {
    icon: 'image-1',
    title: 'Engagement Pulse',
    subText:
      'Measure every like, share, and comment to capture audience interaction.',
  },
  {
    icon: 'image-2',
    title: 'Trending Shorts',
    subText:
      'Discover which Shorts are trending based on views and engagement rates.',
  },
  {
    icon: 'image-3',
    title: 'Average Watch Time',
    subText: 'Understand how engaging your content is with average watch time.',
  },
  {
    icon: 'image-4',
    title: 'Total Reach',
    subText: 'Track total views across all Shorts to measure audience reach.',
  },
  {
    icon: 'image-5',
    title: 'Real-time User Activity',
    subText:
      'Monitor & track real-time active users engaging with your Shorts..',
  },
  {
    icon: 'image-6',
    title: 'Individual Stats',
    subText:
      'Detailed performance metrics for each Shorts, including views and reactions.',
  },
];

export default function ProductPage() {
  return (
    <main>
      <div className="space-y-200px mb-200px">
        <HeroTitle
          MainTitle="Say Hello to Horizon Shorts. </br> Your Engagement Supercharger."
          styleContainer="text-[#15234E] text-center mt-[92px]"
        />
        <HandHeroSection />
        <SliderSection
          title="Short-Form Video: The Ultimate </br> Gold Standard in Engagement."
          dataVideo={dataVideo}
          styleHeroTitle="!items-start text-[#15234E]"
        />
        {/* <TransformSection /> */}
        <CustomHorizonApp
          Title="Transform your apps and websites into </br> immersive short video hubs."
          intro="Engage your audience, drive retention and unlock new growth opportunities with Horizon Shorts"
          ImageBefore="/assets/product/Transform/imageBf.svg"
          TextBefore="App without Horizon Shorts"
          ImageAfter="/assets/product/Transform/ImageAfWithMobile.svg"
          TextAfter="App with Horizon Shorts"
        />
        <VersatileSection />
        <InfinityScrollSection />
        <SeamlessSocialSection />
        <MonetizeSection />
        <div>
          <AiPoweredSection />
          <PowerfulContent />
        </div>
        <SliderSection
          title="Real-time Rich Analytics."
          intro="Gain deep insights and make smarter decisions with live actionable data."
          dataCard={dataCard}
          styleHeroTitle="text-[#15234E]"
        />
        <HorizonConsole />
        <HorizonLive
          title="See Horizon’s magic live, experience <br class='max-md:hidden'/> what it can do for your business."
          intro="We’re already delivering super engagement on some of the world’s leading platforms. <br/> Explore live engagement stats from digital platforms powered by Horizon today."
        />
        <GetAFreeDemo title="Accelerate your growth. <br class='max-md:hidden'/> Experience Horizon for free." />
        <FAQDetails FAQDetailsData={FAQDetailsData} />
      </div>
    </main>
  );
}
