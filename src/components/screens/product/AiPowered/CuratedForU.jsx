import Image from "next/image";
import React from "react";

const CuratedForU = () => {
  return (
    <div className="flex-1">
      <p className="font-22px text-white bg-[#0032FD] rounded-full px-[1.125rem] py-3 w-fit">
        Curated For You
      </p>
      <div className="flex items-center justify-between gap-8 mt-[83px]">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="relative">
            <div
              className={`absolute w-fit h-fit right-[-40px] top-[-60px] z-40 ${
                i === 1 ? "block" : "hidden"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
              >
                <rect
                  width="62.7374"
                  height="62.7374"
                  rx="31.3687"
                  fill="#0032FD"
                />
                <mask
                  id="mask0_722_6547"
                  maskUnits="userSpaceOnUse"
                  x="12"
                  y="12"
                  width="40"
                  height="40"
                >
                  <rect
                    x="12.5312"
                    y="12.3398"
                    width="39.2109"
                    height="39.2109"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_722_6547)">
                  <path
                    d="M26.0531 45.9811L14.1324 34.0604C13.3991 33.3271 13.3991 32.1382 14.1324 31.405C14.8657 30.6717 16.0545 30.6717 16.7878 31.405L26.0531 40.6703L47.4876 19.2359C48.2209 18.5026 49.4097 18.5026 50.143 19.2359C50.8762 19.9691 50.8762 21.158 50.143 21.8913L38.7619 33.2723L26.0531 45.9811Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <Image
              src={`/assets/product/AiPowered/image-${i + 1}.svg`}
              width={150}
              height={266}
              alt="engagementPulse"
              className={`${i === 1 && "scale-125"}`}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end mt-[45px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
        >
          <path
            d="M10.6505 0.507566L10.6505 0.50791L20.3142 9.85531L20.2779 10.1357C20.278 10.1357 20.2781 10.1357 20.2782 10.1357C20.5856 10.1757 20.5761 10.6131 20.2789 10.6505L20.2784 10.6505C15.2515 11.2919 11.2923 15.2513 10.6506 20.2783L10.6505 20.2788C10.6131 20.5761 10.1758 20.5855 10.1358 20.2782C9.49428 15.2514 5.53716 11.2922 0.507926 10.6505L0.507572 10.6505C0.212348 10.6132 0.202988 10.1756 0.508253 10.1357C5.53716 9.49419 9.49395 5.53721 10.1358 0.508232C10.1757 0.20293 10.6132 0.212415 10.6505 0.507566Z"
            fill="#0032FD"
            stroke="#0032FD"
            stroke-width="0.565456"
          />
          <path
            d="M34.0492 12.7206L34.0492 12.721C35.3798 23.1416 43.5865 31.3486 54.0073 32.6768C54.8183 32.7808 54.8131 33.9514 54.0078 34.053L54.0074 34.0531C43.5866 35.3836 35.3797 43.5905 34.0492 54.0112L34.0492 54.0116C33.9475 54.8169 32.7769 54.822 32.673 54.0111C31.3446 43.5904 23.1378 35.3835 12.7171 34.0531L12.7167 34.053C11.9114 33.9514 11.9062 32.7808 12.7172 32.6768C23.1379 31.3484 31.3448 23.1417 32.673 12.7211C32.7769 11.9101 33.9475 11.9153 34.0492 12.7206Z"
            fill="#0032FD"
            stroke="#0032FD"
            stroke-width="0.565456"
          />
        </svg>
      </div>
    </div>
  );
};

export default CuratedForU;
