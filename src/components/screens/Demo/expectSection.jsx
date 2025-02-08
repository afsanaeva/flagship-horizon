'use client';

import React from 'react';
import ClockIcon from '@/components/icons/ClockIcon';
import ClickIcon from '@/components/icons/ClickIcon';
import ClipBoardIcon from '@/components/icons/ClipBoardIcon';
import useDeviceSize from '@/components/hooks/useDeviceSize';

const ExpectSection = () => {
  const { isMobile } = useDeviceSize();
  const titleSecSection = isMobile
    ? 'Demo Request Process'
    : 'Demo <br /> Request <br /> Process';
  return (
    <div className=" rounded-[36px] bg-[#F1F4F7] ">
      <div className="grid grid-cols-1 gap-10 py-16 pl-10 pr-[60px] lg:py-[138px] lg:px-[92px] md:grid-cols-4">
        <div className="flex flex-col items-start">
          <div
            className="font-42px mb-2 font-semibold text-[#15234E]"
            dangerouslySetInnerHTML={{ __html: titleSecSection }}
          ></div>
        </div>
        {/* Step 1 */}
        <div className="flex flex-col items-start">
          <div className="flex gap-3">
            <div>
              <ClockIcon />
            </div>
            <div>
              <div className="font-28px mb-2 font-semibold text-[#15234E]">
                Quick Response
              </div>
              <p className="font-22px text-[#15234E]">
                Once you request a demo, our team will contact you within 24
                hours to schedule a session.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-start">
          <div className="flex gap-3">
            <div>
              {' '}
              <ClickIcon />
            </div>
            <div>
              <div className="font-28px mb-2 font-semibold text-[#15234E]">
                Tailored Preparation
              </div>
              <p className="font-22px text-[#15234E]">
                Before the session, we’ll review your business and requirements
                to customize your demo.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-start">
          <div className="flex gap-3">
            <div>
              {' '}
              <ClipBoardIcon />
            </div>

            <div>
              <div className="font-28px mb-2 font-semibold text-[#15234E]">
                Looking Ahead
              </div>
              <p className="font-22px text-[#15234E]">
                We’re excited to connect with {!isMobile && <br />} you and help
                elevate your business!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectSection;
