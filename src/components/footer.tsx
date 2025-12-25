import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div
        className="absolute w-full h-full top-0 left-0  background-move"
        style={{
          backgroundColor: "black",
          backgroundImage: "url(/bg.png)",
          backgroundSize: "1200px 1200px",
          backgroundPosition: "center",
          filter: "blur(50px)",
        }}
      ></div>
      <div className="inner-container flex flex-col md:flex-row justify-between items-center z-10 relative gap-4">
        <div className="mb-4 md:mb-0 flex items-center flex-col">
          <h2 className="text-2xl font-sree-krushnadevaraya-regular">
            <Image src="/okura.png" alt="Okura Logo" width={282} height={104} />
          </h2>
          <p className="text-lg text-center sree-krushnadevaraya-regular">
            Refined for modern rituals. <br />
            Rooted in tradition.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="sree-krushnadevaraya-regular text-xl text-center">
            Discover Okura
            <br />
            before anyone else
          </h3>
          <div className=" border-y border-white text-md text-white md:w-3xs">
            <p>Email</p>
          </div>
          <p className="text-sm text-center">
            Crafted with intention. Shared with care. <br /> Okura is more than
            matcha. <br />
            It’s a daily ritual.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="sree-krushnadevaraya-regular capitalize font-bold">
            QUICK LINKS
          </h3>
          <a
            href="/about"
            className="hover:underline sree-krushnadevaraya-regular"
          >
            Research behind Okura
          </a>
          <a
            href="/about"
            className="hover:underline  sree-krushnadevaraya-regular"
          >
            Terms of Use
          </a>
          <a
            href="/privacy"
            className="hover:underline  sree-krushnadevaraya-regular"
          >
            Privacy Policy
          </a>
          <a
            href="/disclaimer"
            className="hover:underline  sree-krushnadevaraya-regular"
          >
            Health disclaimer
          </a>
          <a
            href="/faq"
            className="hover:underline  sree-krushnadevaraya-regular"
          >
            FAQ section
          </a>
          <a
            href="/formula"
            className="hover:underline  sree-krushnadevaraya-regular"
          >
            Formula
          </a>
        </div>
      </div>
    </footer>
  );
};
