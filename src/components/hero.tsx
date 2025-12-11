import Image from "next/image";
export const Hero = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center py-10 bg-[#090E0A] text-white">
      <p className="text-xl font-bold">抹茶</p>
      <div className="w-full aspect-square sm:w-75 sm:h-75 max-w-75 max-h-75 rounded-full relative">
        <div
          className="rounded-full w-full h-full animate-pulse"
          style={{
            boxShadow: "0px 0px 80px 20px #3a4b01",
          }}
        ></div>
        <Image
          src="/hero.png"
          alt="Hero Image"
          fill
          className="absolute top-0"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-11 sm:w-47.5 sm:h-17.5 relative mb-4">
          <Image src="/okura.png" alt="Okura Logo" fill />
        </div>
        <h1 className="text-xl md:text-3xl font-sans font-light">
          Breathe in. Breathe out.
        </h1>
      </div>
      <button className="relative bg-[#151515] rounded-full border shadow-md flex items-center justify-center overflow-hidden cursor-pointer border-[#151515] hover:border-white hover:bg-[#1a1a1a] text-lg md:text-xl px-8 py-2 transition-all">
        Begin Ritual
      </button>
    </section>
  );
};
