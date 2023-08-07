import SectionMainTitle from '../components/SectionMainTitle';
import SectionSubTitle from '../components/SectionSubTitle';
import { teams } from '../data/team';

export default function AboutSection() {
  return (
    <section
      id="contact"
      className="pt-[90px] px-[32px] bg-ntrlThird text-ntrlPrime flex flex-col items-center gap-[72px]"
    >
      <div className="max-w-[916px]">
        <SectionSubTitle>04 / About Us</SectionSubTitle>
        <SectionMainTitle>
          Collaborate between systems thinking and good craftsmanship.
        </SectionMainTitle>
      </div>
      <div className="flex justify-evenly flex-wrap gap-4">
        {teams.map((team) => (
          <div
            className={`w-[40%] md:w-[20%] lg:w-max aspect-square`}
            key={team.id}
          >
            <img
              className="grayscale hover:grayscale-0 transition-all"
              src={team.image}
              alt="photo"
            />
          </div>
        ))}
      </div>
      <button className="px-6 py-3 mb-3 bg-ntrlPrime text-ntrlThird w-fit rounded-3xl hover:scale-125 transition-all">
        Meet The Team
      </button>
    </section>
  );
}
