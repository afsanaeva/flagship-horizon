"use client";
import React, { useEffect, useRef, useState } from "react";
import { fadeTop } from "@/components/layout/Header";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import display from "../../../../public/assets/home/pro/Pro.png";
import screen1 from "../../../../public/assets/home/pro/adj-1.png";
import screen2 from "../../../../public/assets/home/pro/adj-2.png";
import screen3 from "../../../../public/assets/home/pro/adj-3.png";
import screen4 from "../../../../public/assets/home/pro/adj-4.png";
import screen5 from "../../../../public/assets/home/pro/adj-5.png";
import screen6 from "../../../../public/assets/home/pro/adj-6.png";

const ProDisplay = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Inline styles for the container
  const containerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: isExpanded ? "4rem" : "0.5rem", // Dynamic gap
    transition: "gap 0.5s ease-in-out", // Smooth transition
  };

  return (
    <>
      {/* Header Section */}
      <section className="space-y-100px mt-12">
        <div className="space-y-40px flex flex-col items-center">
          <InfoCard2
            title="Create and launch super engagements <br/> effortlessly with Horizon Console."
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h1"
            headingClassName="font-100px font-semibold"
          />
          <InfoCard2
            title="Every super engagement is powered by a no-code control center, enabling you to <br/> seamlessly create and manage user experiences across your platforms with ease."
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h4"
            headingClassName="font-28px font-normal"
          />
        </div>
      </section>
      <section
        ref={sectionRef}
        className="relative flex justify-center items-center py-16"
      >
        {" "}
        <div
          className="absolute inset-0 blur-xl"
          style={{
            background: `
                    radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
                    radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
                    radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
                    radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)
                  `,
            zIndex: -1, // Keeps it behind the image
          }}
        ></div>
        <div style={containerStyles}>
          {/* Image Elements */}
          <img
            src={screen1.src}
            alt="Screen 1"
            className="w-80 h-50 rounded-lg shadow-lg col-span-2 justify-self-end"
          />
          <img
            src={screen2.src}
            alt="Screen 2"
            className="w-80 h-50 rounded-lg shadow-lg col-span-2 justify-self-start"
          />
          <img
            src={screen3.src}
            alt="Screen 3"
            className="w-80 h-50 rounded-lg shadow-lg col-start-1 row-start-2 self-center"
          />

          <div className="z-10 col-span-3 row-start-2 w-1/2 rounded-lg shadow-sm">
            {/* Blurred Background */}

            {/* Image */}
            <img src={display.src} alt="Main Display" />
          </div>
          <img
            src={screen4.src}
            alt="Screen 4"
            className="w-80 h-50 rounded-lg shadow-lg col-start-5 row-start-2 self-center"
          />
          <img
            src={screen5.src}
            alt="Screen 5"
            className="w-80 h-50 rounded-lg shadow-lg col-span-2 justify-self-end"
          />
          <img
            src={screen6.src}
            alt="Screen 6"
            className="w-80 h-50 rounded-lg shadow-lg col-span-2 justify-self-start"
          />
        </div>
      </section>
    </>
  );
};

export default ProDisplay;
