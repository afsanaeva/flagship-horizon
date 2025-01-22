import { FAQDetailsDataSolution } from '@/components/constant/FAQData';
import DynamicStatsCard from '@/components/screens/common/DynamicStatsCard';
import FAQDetails from '@/components/screens/common/FAQDetails';
import HorizonLive from '@/components/screens/common/HorizonLiveNumber';
import SliderSection from '@/components/screens/common/SliderSection';
import GetAFreeDemo from '@/components/screens/home/GetAFreeDemo';
import DiscoverSection from '@/components/screens/solution/DiscoverSection';
import HeroSection from '@/components/screens/solution/HeroSection';
import React from 'react';

const DriveData = [
  {
    title: 'Drive Engagement </br> and Retention',
    image: '/assets/solution/image-1.svg',
    AccordionData: [
      {
        title: 'Increase interactions',
        content:
          'Make your users click, like, comment, and share. Social interactions are no longer monopolized by big tech. With Horizon, you can spark meaningful interactions and keep audiences engaged.',
      },
      {
        title: 'Increase session times',
        content:
          'Increased interactions lead to longer in-app sessions. With Horizon, you can strategically deliver the right content and place products to seamlessly turn session time into revenue.',
      },
      {
        title: 'Increase CTR ',
        content:
          'Shorts are proven to drive clicks. Horizon helps you place intelligent CTAs at the perfect moment, inspiring users to take immediate action.',
      },
      {
        title: 'Improve retention',
        content:
          'Keep your audience coming back with relevant, impactful content. Horizon ensures a seamless streaming experience that amplifies your content’s reach and engagement.',
      },
    ],
  },
  {
    title: 'Drive Monetization </br> and Growth',
    image: '/assets/solution/image-2.svg',
    AccordionData: [
      {
        title: 'Data sales ',
        content:
          'Horizon gives you full ownership and control of your platform’s data. By connecting with affiliated brands, you can unlock new revenue streams by securely sharing valuable customer data points.',
      },
      {
        title: 'Content & subscription sales ',
        content:
          'Shorts drive action - users are 30% more likely to subscribe or make purchases while watching them. With Horizon’s intelligent ad targeting and AI recommendations, boosting subscriptions has never been easier.',
      },
      {
        title: 'Ecommerce sales ',
        content:
          'E-commerce is everywhere - stand out with shoppable Shorts that highlight your products or embed interactive catalogs directly into product videos.',
      },
      {
        title: 'Ad sales',
        content:
          'Unlock new revenue opportunities with Horizon’s intelligent ad engine. Promote your brand or sponsor others’ content to generate additional revenue effortlessly.',
      },
    ],
  },
  {
    title: 'Deliver Super  </br> Personalization',
    image: '/assets/solution/image-3.svg',
    AccordionData: [
      {
        title: 'AI recommendations ',
        content:
          'Horizon’s AI engine analyzes user interactions to deliver tailored content, keeping audiences engaged with contents they love the most.',
      },
      {
        title: 'Ad targeting ',
        content:
          'By analyzing user behavior, activity, and preferences, Horizon delivers perfectly targeted ads to the right audience at the right moment.',
      },
      {
        title: 'Sentiment Analysis',
        content:
          'Gain deeper audience insights. Horizon’s AI tools analyze reactions and comments to help you craft smarter, more effective engagement strategies.',
      },
      {
        title: 'Zero & first party data ownership ',
        content:
          'Horizon ensures complete ownership of your zero and first-party data, empowering secure insights and better decision making - without relying on third-party sources.',
      },
    ],
  },
];

export const dataCardImage = [
  {
    image: 'image-1',
  },
  {
    image: 'image-2',
  },
  {
    image: 'image-3',
  },
  {
    image: 'image-4',
  },
  {
    image: 'image-5',
  },
  {
    image: 'image-5',
  },
  {
    image: 'image-5',
  },
];

const SolutionPage = () => {
  return (
    <main>
      <div className="space-y-200px mb-200px">
        <HeroSection />
        <div className="space-y-100px">
          <DiscoverSection />
          {DriveData.map((data, index) => (
            <div key={index}>
              <DynamicStatsCard DynamicData={data} index={index} />
            </div>
          ))}
        </div>
        <SliderSection
          title="Horizon is your ultimate  </br> growth engine across industries"
          dataCardImage={dataCardImage}
          styleHeroTitle="!items-start text-[#15234E]"
        />
        <HorizonLive
          title="Horizon is driving engagement on </br> the world’s leading platforms"
          intro="Join the innovators transforming user experiences and unlocking unparalleled growth."
        />
        <GetAFreeDemo title="Become a trailblazer. </br> Try Horizon for Free." />
        <FAQDetails FAQDetailsData={FAQDetailsDataSolution} />
      </div>
    </main>
  );
};

export default SolutionPage;
