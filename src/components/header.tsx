import Image from "next/image";

export const Header = () => {
  return (
    <header className="noto-sans bg-[#151515] py-2 shadow-md w-full text-white">
      <div className="flex flex-row justify-between items-center flex-1 w-full inner-container">
        <Image
          src="/icon.png"
          alt="Okura Logo"
          width={32}
          height={32}
          className="inline-block mr-2"
        />
        <div>Explore</div>
        <div>FAQ</div>
      </div>
    </header>
  );
};
