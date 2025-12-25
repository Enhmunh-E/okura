import {
  Detail,
  Header,
  Hero,
  Promotion,
  Ritual,
  Supports,
  Tradition,
  Source,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Promotion />
      <Supports />
      <Tradition />
      <Detail />
      <Ritual />
      <Source />
      <Footer />
    </div>
  );
}
