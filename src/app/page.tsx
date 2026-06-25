import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Shop from "@/components/Shop";
import Partner from "@/components/Partner";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Story />
      <Shop />
      <Partner />
    </main>
  );
}
