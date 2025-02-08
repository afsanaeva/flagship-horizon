import React from 'react';
import HeroTitle from '../common/HeroTitle';
import Image from 'next/image';
import VertsatileContent from './VertsatileContent';

const VersatileSection = () => {
  return (
    <div className="size-full bg-[#F1F4F7]">
      <HeroTitle
        MainTitle="Versatile Entry Points."
        SecTitle="Social media inspired layouts that your audience can’t resist clicking."
        styleContainer="pt-[6.25rem] text-[#15234E] text-center"
      />
      <div className="container-xl mt-12 lg:mt-[6.25rem] flex size-full items-center justify-between lg:flex-row flex-col gap-16 lg:gap-[8.75rem]">
        <div className="relative 3xl:min-h-[880px] 3xl:min-w-[967px] flex-1">
          <Image
            src={'/assets/product/Infinity/bg.svg'}
            alt={'Versatile Entry Points'}
            width={458}
            height={832}
            className="absolute 3xl:top-[-260px] lg:top-[-160px] z-10 size-full overflow-visible object-cover"
          />
          <Image
            src={'/assets/product/Infinity/bg.svg'}
            alt={'Versatile Entry Points'}
            width={458}
            height={832}
            className="absolute lg:block hidden left-[-350px] top-[-140px] z-10 size-full overflow-visible object-cover"
          />

          <Image
            src={'/assets/product/Versatil/instaPage.svg'}
            alt={'Versatile Entry Points'}
            width={458}
            height={832}
            className="relative z-10 size-full object-contain lg:block hidden"
          />

          <Image
            src={'/assets/product/Versatil/instaPageMobile.svg'}
            alt={'Versatile Entry Points'}
            width={257}
            height={532}
            className="relative z-10 size-full object-contain block lg:hidden"
          />
        </div>

        <VertsatileContent />
      </div>
    </div>
  );
};

export default VersatileSection;
