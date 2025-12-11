import Image from "next/image";

export const Source = () => {
  return (
    <section className="inner-container flex flex-col items-center justify-cn my-32">
      <h1 className="text-[#054d1a] font-sree-krushnadevaraya-regular text-3xl sree-krushnadevaraya-regular">
        Sourced with Intention. Verified with Integrity.
      </h1>
      <p className="font-sans text-sm mt-8 mb-8 text-center">
        Every ingredient in Okura is sourced exclusively from certified
        suppliers in Japan and the European Union, regions known for the highest
        quality standards in food and nutraceuticals. Our formula is third-party
        lab tested for purity and potency, and backed by multiple
        certifications to ensure quality you can trust, down to the last scoop.
      </p>
      <div className="flex flex-row flex-wrap">
        <Image
          src="/approval/1.png"
          alt="Source 1"
          width={118}
          height={118}
          className="m-4"
        />
        <Image
          src="/approval/2.png"
          alt="Source 2"
          width={118}
          height={118}
          className="m-4"
        />
        <Image
          src="/approval/3.png"
          alt="Source 3"
          width={118}
          height={118}
          className="m-4"
        />
        <Image
          src="/approval/4.png"
          alt="Source 4"
          width={118}
          height={118}
          className="m-4"
        />
        <Image
          src="/approval/5.png"
          alt="Source 5"
          width={160}
          height={118}
          className="m-4"
        />
      </div>
    </section>
  );
};
