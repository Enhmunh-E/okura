import Image from "next/image";

export const Tradition = () => {
  return (
    <section className="flex snap-start inner-container">
      <div className="flex flex-col justify-between md:flex-row w-full md:h-128 ">
        <div className="md:w-[45%] p-8 relative flex flex-col justify-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[300px] text-nowrap z-1 pointer-events-none text-[#F3EEE6] opacity-60 text-center">
            伝道
          </div>
          <h2 className="relative z-10 mb-4 text-[#054d1a] font-sree-krushnadevaraya-regular text-3xl">
            Rooted in Tradition. Refined for Modern Rituals.
          </h2>
          <p className="relative z-10 text-[16px] leading-6 mb-6 text-[#3a3a3a]">
            Each serving reflects the mindful simplicity of chanoyu, offering a
            moment of pause and intention in a busy day. Rooted in authentic,
            shade-grown matcha, Okura brings refined elegance and a balanced
            profile that nods to nature. It’s where science meets ritual —
            inviting high performers and wellness seekers to turn daily routine
            into intentional health practice.
          </p>
          <button className="relative rounded-full w-fit z-20 border shadow-md flex items-center justify-center overflow-hidden cursor-pointer border-[#151515] hover:border-[#151515] text-md md:text-lg px-8 py-2 transition-all">
            Join Waitlist
          </button>
        </div>
        <div className="md:w-[55%] md:h-full relative">
          <div>
            <div style={{ boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.3)" }}>
              <div className="w-full h-64 relative flex items-center justify-center">
                <Image
                  src="/matcha-wood.png"
                  className="object-contain"
                  width={215}
                  height={157}
                  alt={"Mathca bowl"}
                />
              </div>
            </div>
            <div className="relative text-center p-5 bg-repeat-space overflow-hidden bg-black h-52">
              <div
                className="absolute w-full h-full top-0 left-0  background-move"
                style={{
                  backgroundColor: "black",
                  backgroundImage: "url(/bg.png)",
                  backgroundSize: "400px 400px",
                  backgroundPosition: "center",
                  filter: "blur(50px)",
                }}
              ></div>
              <h2 className="text-white relative z-10 sree-krushnadevaraya-regular text-2xl mb-2">
                Ceremonial Okura Matcha
              </h2>
              <p className="text-white relative z-10 opacity-60">
                Our Matcha flavor features ceremonial-grade matcha sourced from
                Uji, Kyoto – a region renowned for producing Japan’s finest
                green tea. It offers more than a caffeine boost; it provides a
                centered, stable, and crash-free energy
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-[#f1ece2] text-black text-sm mt-4 p-2 md:mx-4">
            Only 12% of EU adults hit &quot;5-a-day.&quot;
            <span className="font-bold">Okura:</span>
            spirulina, spinach, broccoli, carrot to broaden antixodiant
            coverage.
          </div>
        </div>
      </div>
    </section>
  );
};
