"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Promotion = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef.current?.addEventListener("scroll", (e) => {
      const target = e.target as HTMLDivElement;
      if (!target) return;
      const scrollLeft = target.scrollLeft;
      const width = target.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      setIndex(newIndex);
    });
  }, [containerRef]);
  console.log(index);
  return (
    <section className="bg-[#f3eee6]">
      <div
        className="flex flex-row overflow-x-scroll overflow-y-hidden text-black snap-x snap-mandatory scroll-smooth hide-scrollbar"
        ref={containerRef}
      >
        {promotionData.map(
          ({ subTitle, description, image, title, bgText }, index) => (
            <div className="min-w-screen flex snap-start" key={index}>
              <div className="flex flex-col justify-between md:flex-row w-full pl-[calc((100vw-1280px)/2)] md:h-128 ">
                <div className="md:w-[45%] p-8 relative flex flex-col justify-center">
                  <div className="text-black text-xs">{subTitle}</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[425px] font-bold z-1 pointer-events-none text-[#ded7bd] opacity-40 text-center">
                    {bgText}
                  </div>
                  <h2 className="relative z-10 mb-4 text-[#054d1a] font-sree-krushnadevaraya-regular text-3xl">
                    {title}
                  </h2>
                  <p className="relative z-10 text-[16px] leading-6 mb-6 text-[#3a3a3a]">
                    {description}
                  </p>
                  <button className="relative rounded-full w-fit border shadow-md flex items-center justify-center overflow-hidden cursor-pointer border-[#151515] hover:border-[#151515] text-md md:text-lg px-8 py-2 transition-all">
                    Get Started
                  </button>
                </div>
                <div className="h-64 md:w-[55%] md:h-full relative">
                  <Image
                    src={image}
                    alt={"Promotion Image" + index}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex flex-row items-center justify-center gap-2 py-4">
        {promotionData.map((_, idx) => (
          <div
            key={idx}
            onClick={() => {
              containerRef.current?.scrollTo({
                left:
                  idx *
                  (containerRef.current?.offsetWidth
                    ? containerRef.current?.offsetWidth
                    : 0),
                behavior: "smooth",
              });
            }}
            className={
              "w-2 h-2 rounded-full transition-all ease-in " +
              (index == idx ? "bg-[#04581D]" : "bg-[#E3D0BC]")
            }
          ></div>
        ))}
      </div>
    </section>
  );
};

const promotionData = [
  {
    subTitle: "心身の調和",
    title: "Protect Your Metabolic Rhythm",
    description:
      "Metabolic and gut health are the control center of your life: energy, focus, body composition, mood, recovery, longevity. Modern routines strain the microbiome and starve your cells of what they need. Okura is built to protect that foundation every day with complete daily nutrition and carefully selected probiotics, supporting a resilient microbiome and steady metabolic rhythm.",
    image: "/promotion/1.png",
    bgText: "和",
  },
  {
    subTitle: "技力の融合",
    title: "Where Ritual Meets Performance",
    description:
      "Rooted in centuries of Japanese wellness wisdom, Okura transforms your daily supplement into a moment of calm intention. Each serving honors traditional rituals like the tea ceremony, blending mindful simplicity with clinically backed performance. With our authentic Matcha flavor, Okura invites you to slow down, nourish deeply, and elevate your health through ritual.",
    image: "/promotion/2.png",
    bgText: "精",
  },
  {
    subTitle: "健意の調和",
    title: "Engineered for Wellness. Designed with Intention",
    description:
      "Okura is more than a supplement. It combines science and cultural heritage into a daily ritual that delivers essential nutrients in highly bioavailable forms. Each dose provides vitamin A as beta-carotene, vitamin D3 with K2, natural vitamin E, a full B-complex, magnesium, zinc, and selenium to support immunity, energy metabolism, muscle and nerve function, and cellular protection.",
    image: "/promotion/3.png",
    bgText: "健",
  },
  {
    subTitle: "心身の調和",
    title: "Protect Your Metabolic Rhythm",
    description: `Metabolic and gut health are the control center of your life: energy, focus, body composition, mood, recovery, longevity. When they drift, the costs add up quietly with crashes, cravings, brain fog, restless sleep. Modern routines strain the microbiome and starve your cells of what they need. Okura is built to protect that foundation every day with complete daily nutrition and carefully selected probiotics, to support a resilient microbiome and steady metabolic rhythm. `,
    image: "/promotion/4.png",
    bgText: "和",
  },
];
