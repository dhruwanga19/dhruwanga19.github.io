import CosmicSkills from "@/components/cosmic-skills";
// import ExperienceSection from "@/components/experience-section";
import AboutMe from "@/components/headers/AboutMe";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { TimelineSection } from "@/components/timeline-experience";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.05;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-20">
      <div className="max-w-2xl space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <AboutMe
            name="dhruwang"
            role="Software Engineer"
            availability="available"
            location="Canada"
            image={"/dhruwang0.jpg"}
          />
        </BlurFade>
        <section
          className="max-w-2xl w-full flex flex-col items-start justify-start mt-6"
          id="about"
        >
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Who Am I?</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex justify-center w-full gap-1">
              <BlurFade className="flex w-full" delay={BLUR_FADE_DELAY * 6}>
                <CosmicSkills skills={DATA.skills} />
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="max-w-2xl w-full flex flex-col min-h-0 mt-6 gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <TimelineSection items={DATA.work} />
            </BlurFade>
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <TimelineSection items={DATA.education} />
            </BlurFade>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of{" "}
                    <Link
                      className="text-blue-500 hover:underline"
                      href={DATA.contact.social.GitHub.url}
                    >
                      {" "}
                      projects{""}
                    </Link>
                    , from simple websites to complex web applications. Here are
                    a few of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12 ">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me an{" "}
                  <Link
                    className="text-blue-500 hover:underline"
                    href={DATA.contact.social.Mail.url}
                  >
                    email
                  </Link>{" "}
                  or DM me on{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-blue-500 hover:underline"
                  >
                    LinkedIn
                  </Link>{" "}
                  I am quick to respond. Let&apos;s connect!
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
        <section id="footer">
          <div className=" flex text-l items-end justify-end p-5">
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              <span className="">Made with ❤️ by Dhruwang</span>
            </BlurFade>
          </div>
        </section>
      </div>
    </main>
  );
}
