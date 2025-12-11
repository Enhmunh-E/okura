import {
  Detail,
  Header,
  Hero,
  Promotion,
  Ritual,
  Supports,
  Tradition,
  Source,
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
    </div>
  );
}
