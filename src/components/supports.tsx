"use client";

import { useEffect } from "react";

export const Supports = () => {
  useEffect(() => {
    const ocuraSupportsContainer = document.getElementById(
      "ocura-supports-container"
    );
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");
    if (!ocuraSupportsContainer) return;

    scrollLeftBtn?.addEventListener("click", () => {
      const cardWidth =
        (
          ocuraSupportsContainer.querySelector(
            ".ocura-support-card"
          ) as HTMLDivElement
        )?.offsetWidth + 20; // including gap
      ocuraSupportsContainer?.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    });

    scrollRightBtn?.addEventListener("click", () => {
      const cardWidth =
        (
          ocuraSupportsContainer.querySelector(
            ".ocura-support-card"
          ) as HTMLDivElement
        ).offsetWidth + 20; // including gap
      ocuraSupportsContainer.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    <section id="ocura-supports-section">
      <h1 id="ocura-supports">Ocura Supports</h1>
      <div id="ocura-supports-container" className="hide-scrollbar">
        {ocuraSupportsData.map((support, index) => (
          <div key={index} className="ocura-support-card">
            <div className="bg-circle">{support.bg}</div>
            <h2 className="support-title sree-krushnadevaraya-regular">
              {support.title}
            </h2>
            <p className="support-body">{support.body}</p>
          </div>
        ))}
      </div>
      <div id="ocura-buttons-container">
        <button id="scroll-left" className="scroll-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left-icon lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button id="scroll-right" className="scroll-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right-icon lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

const ocuraSupportsData = [
  {
    title: (
      <>
        Immune System & <br /> Defense
      </>
    ),
    body: "Vitamins A, D3, E, zinc, and selenium support immune cell function and defense.",
    bg: "守",
  },
  {
    title: (
      <>
        Clearer, Brighter <br /> Skin
      </>
    ),
    body: "Vitamin E, biotin, and antioxidants from spirulina (phycocyanin, β-carotene, zeaxanthin) and carrot (β-carotene, lutein, chlorogenic acid) promote skin clarity and repair.",
    bg: "美",
  },
  {
    title: (
      <>
        Lean Muscle Mass & <br /> Physical Strength
      </>
    ),
    body: "Magnesium, B-complex vitamins, and protein cofactors support muscle function and energy metabolism.",
    bg: "力",
  },
  {
    title: (
      <>
        Lactose Digestion & <br /> Dairy Comfort
      </>
    ),
    body: "Lactase helps break down milk sugar (lactose), easing bloating and discomfort so you can enjoy Okura with dairy as well as plant milks.",
    bg: "乳",
  },
  {
    title: (
      <>
        Cognitive Focus & <br /> Mental Clarity
      </>
    ),
    body: "L-Theanine (matcha), B12, folate, and iodine help support brain energy and focus.",
    bg: "静",
  },
  {
    title: (
      <>
        Energy Production <br /> Without the Crash
      </>
    ),
    body: "B-complex vitamins support normal stamina, while spirulina (phycocyanin, carotenoids) and matcha (catechins with L-theanine) help sustain mental stamina.",
    bg: "活",
  },
  {
    title: (
      <>
        Hormonal Balance & <br /> Vitality
      </>
    ),
    body: "Vitamin D3, K2, and trace minerals like zinc and selenium play key roles in hormone production and balance.",
    bg: "調",
  },
  {
    title: (
      <>
        Inflammatory Response <br /> Regulation
      </>
    ),
    body: "Antioxidants in broccoli (quercetin, sulforaphane) and carrots (β-carotene, α-carotene, chlorogenic acid) help modulate inflammation at the cellular level.",
    bg: "抑",
  },
  {
    title: (
      <>
        Bone Density & <br /> Structural Support
      </>
    ),
    body: "Calcium-supportive nutrients like vitamin K2, magnesium, and D3 aid in bone mineralization.",
    bg: "骨",
  },
  {
    title: (
      <>
        Cellular Repair & <br /> Longevity
      </>
    ),
    body: "Vitamin A, C, E, and spirulina’s phytonutrients help protect cells from oxidative damage and promote regeneration.",
    bg: "再",
  },
  {
    title: (
      <>
        Calm Energy & Nervous <br /> System Support
      </>
    ),
    body: "L-Theanine, magnesium, and B6 support balanced energy and a healthy nervous system response.",
    bg: "安",
  },
  {
    title: (
      <>
        Nutrient Absorption & <br /> Metabolic Efficiency
      </>
    ),
    body: "Digestive enzymes (amylase, protease, lipase) help maximize nutrient breakdown and absorption.",
    bg: "栄",
  },
  {
    title: (
      <>
        Smooth Skin Texture & <br /> Elasticity
      </>
    ),
    body: "Vitamin E, biotin, and antioxidants from plant extracts help maintain skin hydration and firmness.",
    bg: "艶",
  },
  {
    title: (
      <>
        Detoxification & Natural <br /> Cleanse Support
      </>
    ),
    body: "Spirulina, inulin, and leafy green powders support gentle detox and liver health.",
    bg: "浄",
  },
  {
    title: (
      <>
        Hair, Skin & Nail <br /> Health
      </>
    ),
    body: "Biotin, zinc, B-complex, and spirulina provide structural support for keratin and collagen production.",
    bg: "潤",
  },
  {
    title: (
      <>
        Stress Adaptation & <br /> Cortisol Balance
      </>
    ),
    body: "L-Theanine and magnesium promote calm focus and help regulate stress response.",
    bg: "耐",
  },
];
