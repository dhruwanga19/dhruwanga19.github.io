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
import remarkGfm from "remark-gfm";

const BLUR_FADE_DELAY = 0.05;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-20">
      <div className="max-w-2xl space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <AboutMe
            name="dhruwang"
            role="Software Engineer"
            availability="open"
            location="Canada"
            image={"/dhruwang0.jpg"}
          />
        </BlurFade>
        {/* <section
          className="max-w-2xl w-full flex flex-col items-start justify-start mt-6"
          id="about"
        >
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Who Am I?</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              <Markdown remarkPlugins={[remarkGfm]}>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </section> */}

        <section id="work">
          <div className="max-w-2xl w-full flex flex-col min-h-0 mt-6 gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <TimelineSection items={DATA.work} />
            </BlurFade>
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <TimelineSection items={DATA.education} />
            </BlurFade>
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skillsOther.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
            <div className="flex justify-center w-full gap-1">
              <BlurFade className="flex w-full" delay={BLUR_FADE_DELAY * 11}>
                <CosmicSkills skills={DATA.skills} />
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
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
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 13 + id * 0.05}
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
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-150 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
          <div className="flex flex-col items-center justify-center gap-6 py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl text-muted-foreground">
                  Made with ❤️ by Dhruwang
                </h3>

                {/* Social Links */}
                <div className="flex gap-4">
                  {Object.entries(DATA.contact.social).map(([key, social]) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={key}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </div>
    </main>
  );
}
