import React from "react";
import Image from "next/image";

const SeamlessSocialSection = () => {
  return (
    <div className="w-full h-full bg-[#F1F4F7] space-y-100px py-[100px] px-[120px]">
      <div className="flex flex-col gap-12">
        <h1
          className="font-100px font-bold leading-snug text-text-main"
          dangerouslySetInnerHTML={{ __html: "Seamless Social Interaction" }}
        ></h1>
        <p className="font-28px font-normal text-text-main">
          Inspire user interaction and engagement, make them active participants
          in your brand journey.
        </p>
      </div>
      <div className="grid grid-cols-12 space-x-6">
        <div className="bg-white px-[36px] pt-[36px] rounded-[32px] col-span-4 flex flex-col gap-[60px] items-center justify-end">
          <p className="font-28px text-[#67788A]">
            <span className="text-text-main">Let users React:</span>
            Understand what resonates with your audience by tracking their
            reactions and shared content.
          </p>
          <Image
            src="/assets/product/SeamlessOne.png"
            width={780}
            height={386}
            alt="interaction"
          />
        </div>
        <div className="bg-white px-[36px] pt-[36px] pb-[59px] rounded-[32px] col-span-4 flex flex-col gap-[60px] items-center">
          <p className="font-28px text-[#67788A]">
            <span className="text-text-main">Let users React:</span>
            Understand what resonates with your audience by tracking their
            reactions and shared content.
          </p>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/product/SeamlessTwo.png')",
              backgroundSize: "contain", // Display the whole image
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat", // Prevent the image from repeating
            }}
          ></div>
        </div>

        <div className="bg-white px-[36px] pb-[36px] rounded-[32px] col-span-4 flex flex-col gap-[60px] items-center">
          <Image
            src="/assets/product/SeamlessThree.png"
            width={780}
            height={386}
            alt="interaction"
          />
          <p className="font-28px text-[#67788A]">
            <span className="text-text-main">Let users React:</span>
            Understand what resonates with your audience by tracking their
            reactions and shared content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeamlessSocialSection;
