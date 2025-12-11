import Image from "next/image";

export const Ritual = () => {
  return (
    <section className="inner-container flex flex-col gap-8">
      <h1 className="text-[#054d1a] font-sree-krushnadevaraya-regular text-3xl sree-krushnadevaraya-regular">
        Create the Ritual. Savor the Moment.
      </h1>
      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-4
      "
      >
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="relative aspect-square w-full">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div>
              <h2 className="sree-krushnadevaraya-regular text-lg font-bold">
                {step.title}
              </h2>
              <p className="font-sans text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const steps = [
  {
    image: "/ritual/1.png",
    title: "Step 1: Choose Your Base",
    description:
      "Oat, almond, soy, or dairy milk create a rich, velvety texture. For a lighter experience, cold water brings clarity to every sip.",
  },
  {
    image: "/ritual/2.png",
    title: "Step 2: Measure with Intention",
    description:
      "One level serving (15g) using the spoon provided — measured for daily balance, crafted for ritual.",
  },
  {
    image: "/ritual/3.png",
    title: "Step 3: Mix to Perfection",
    description:
      "Whisk slowly, watching the powder dissolve into a soft, creamy blend. The ritual is already working.",
  },
  {
    image: "/ritual/4.png",
    title: "Step 4: Sip. Breathe. Begin.",
    description:
      "Take a moment. Sip slowly. Let the flavor and intention set the tone for your day.",
  },
];
