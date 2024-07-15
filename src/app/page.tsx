import ItemCard from "@/components/ItemCard";
import Section from "@/components/Sections";
import { Folder } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title="Home" icon={<Folder />}>
        <ItemCard
          image="./next.svg"
          title={"NextJS Portfolio"}
          description={"Showcase of skills using Nextjs"}
          tags={["NextJS", "shadcn/ui", "React", "Tailwind"]}
          href={"/projects/portfolio"}
        />
      </Section>
    </main>
  );
}
