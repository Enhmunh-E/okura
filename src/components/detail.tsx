export const Detail = () => {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center gap-4 px-4 my-8">
      {detailData.map((detail, index) => (
        <div
          key={index}
          className="p-4 bg-[#F3EEE6] rounded-2xl min-w-64 md:w-64"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#054d1a] sree-krushnadevaraya-regular text-center">
            {detail.title}
          </h2>
          <ul className="list-disc list-inside text-[#3a3a3a]">
            {detail.description.map((desc, descIndex) => (
              <li key={descIndex} className="mb-2">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

const detailData = [
  {
    title: "How to Take",
    description: [
      "RDI: 1 scoop daily (15 g)",
      "Servings: 30 per pouch",
      "Total weight: 470 g",
    ],
  },
  {
    title: "Vitamins",
    description: [
      "Vitamin A(beta - carotene): 800 µg RE",
      "Vitamin D3 (lichen): 25 µg (1,000 IU)",
      "Vitamin E (natural): 80 mg",
      "Vitamin K2 (MK-7): 100 µg",
      "Vitamin B1–B6",
      "Vitamin B12",
      "Folate Biotin, Pantothenic Acid",
    ],
  },
  {
    title: "Minerals",
    description: [
      "Zinc",
      "Magnesium",
      "Iodine",
      "Selenium",
      "Manganese",
      "Chromium",
      "Copper",
    ],
  },
  {
    title: "Probiotics & Digestive Enzymes",
    description: [
      "L. acidophilus: 3.6 bn CFU",
      "B. bifidum: 3.6 bn CFU",
      "Enzymes: amylase, protease, lactase, lipase, cellulase",
    ],
  },
  {
    title: "Botanicals & Superfoods",
    description: [
      "Inulin (chicory): 7.8 g",
      "Spirulina, spinach, broccoli, carrot powders",
    ],
  },
];
