import ProjectCard from '../components/ProjectCard';
import SectionMainTitle from '../components/SectionMainTitle';
import SectionSubTitle from '../components/SectionSubTitle';
import { portfolios } from '../data/portfolio';

export default function ProjectSection() {
  return (
    <section className="bg-background pt-[120px] px-[32px] flex flex-col">
      <div className="flex flex-col gap-3 md:flex-row justify-between items-center mb-4">
        <div className="max-w-[350px]">
          <SectionSubTitle>02 / Project</SectionSubTitle>
          <SectionMainTitle>OUR LATEST PROJECT</SectionMainTitle>
        </div>
        <div className="max-w-[443px]">
          <SectionSubTitle>
            Only full-service thinking can lead to progress. We&apos;ve
            developed a company that covers the entire customer experience,
            concentrating on internet usage and the effects that each touchpoint
            has on your brand.
          </SectionSubTitle>
        </div>
      </div>
      <div className="flex flex-col gap-[50px]">
        {portfolios.map((porto) => (
          <ProjectCard
            key={porto.id}
            project={porto}
          />
        ))}
      </div>
    </section>
  );
}
