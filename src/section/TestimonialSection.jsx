import Crawler from '../components/Crawler';
import SectionMainTitle from '../components/SectionMainTitle';
import SectionSubTitle from '../components/SectionSubTitle';
import { services } from '../data/service';
import { testimonials } from '../data/testimonials';

export default function TestimonialSection() {
  return (
    <>
      <section
        id="testimonials"
        className="flex flex-col px-5 lg:pl-[149px] py-[120px] gap-[90px] bg-ntrlThird text-ntrlPrime"
      >
        <div className="max-w-[1015px]">
          <SectionSubTitle>05 / Testimonials</SectionSubTitle>
          <SectionMainTitle>
            Hear what our customers have to say about us.
          </SectionMainTitle>
        </div>
        <div className="max-w-[1015px]">
          {testimonials.map((testim) => {
            const result = testim.testimonial.match(/[^\\.!\\?]+[\\.!\\?]+/g);
            const first = result.shift();
            return (
              <div
                key={testim.id}
                className=""
              >
                <h3 className="mb-[49px]">
                  <span className="text-brand md:text-h3">“ </span>
                  <span className="text-brand md:text-h3">{first}</span>
                  <span className="md:text-h3">{result.join(' ')}</span>
                  <span className="text-brand md:text-h3"> “</span>
                </h3>
                <div className="flex gap-[16px]">
                  <img
                    alt="photo"
                    src={testim.img}
                  />
                  <div className="flex flex-col justify-between">
                    <p>{testim.name}</p>
                    <p className="font-light text-[16px]">{testim.profesion}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="h-[55px] bg-ntrlThird text-ntrlPrime flex items-center text-[32px]">
        <Crawler data={services} />
      </div>
    </>
  );
}
