import AboutMe from "@/components/headers/AboutMe";
import ItemCard from "@/components/ItemCard";
import Section from "@/components/Sections";
import { Item } from "@radix-ui/react-dropdown-menu";
import { Briefcase, Folder, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="bg-primary-foreground bg-opacity-90 p-2 flex flex-col items-center justify-between rounded-xl gap-4 px-10 py-5">
        <AboutMe
          name="Dhruwang Akbari"
          role="Software Engineer"
          availability="open"
          location="Toronto"
          email="dakbari2@uwo.ca"
          image={"./dhruwang0.jpg"}
          resume={"./Dhruwang2024T.pdf"}
        />
        <Section title="Projects" icon={<Folder />}>
          <ItemCard
            image="./next-js.svg"
            title={"NextJS Portfolio"}
            description={
              "Showcase of my skills using Nextjs. A gallery of my life experiences in the tech industry."
            }
            tags={["NextJS", "shadcn/ui", "React", "Tailwind"]}
            href={"/projects/portfolio"}
          />
          <ItemCard
            image="./react.svg"
            title={"Vercel Portfolio"}
            description={"Showcase of skills using Nextjs"}
            tags={["NextJS", "shadcn/ui", "React", "Tailwind"]}
            href={"/projects/portfolio"}
          />
          <ItemCard
            image="./next-js.svg"
            title="NextJS Portfolio"
            description="Showcase of my skills using Nextjs. A gallery of my life experiences in the tech industry."
            tags={["NextJS", "shadcn/ui", "React", "Tailwind"]}
            href="/projects/portfolio"
          />
          <ItemCard
            image="./react.svg"
            title="Vercel Portfolio"
            description="Showcase of skills using Nextjs"
            tags={["NextJS", "shadcn/ui", "React", "Tailwind"]}
            href="/projects/portfolio"
          />
          <ItemCard
            image="./next-js.svg"
            title="NextJS Portfolio"
            description="Showcase of my skills using Nextjs. A gallery of my life experiences in the tech industry."
            tags={["NextJS", "shadcn/ui", "React", "Tailwind"]}
            href="/projects/portfolio"
          />
        </Section>
        <Section title="Experience" icon={<Briefcase />}>
          <ItemCard
            image="./next-js.svg"
            title="Apple"
            description="Showcase of my skills using Nextjs. A gallery of my life experiences in the tech industry."
            tags={["5 YOE"]}
            href="/experiences/portfolio"
          />
          <ItemCard
            image="./react.svg"
            title="Google"
            description="Showcase of skills using Nextjs"
            tags={["6 YOE"]}
            href="/experiences/portfolio"
          />
        </Section>

        <Section title="Education" icon={<GraduationCap />}>
          <ItemCard
            image="./westernu.svg"
            title="Western University"
            description="Bacheolors of Science (B.Sc) in Computer Science"
            tags={["Minor in Software Engineering", "Dean's Honor List 23/24"]}
            href="/experiences/portfolio"
          />
        </Section>
      </div>
    </main>
  );
}
