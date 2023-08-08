import SectionMainTitle from '../components/SectionMainTitle';
import SectionSubTitle from '../components/SectionSubTitle';
import { services } from '../data/service';
import serviceImage from '../assets/service.png';
import { BsArrowDown } from 'react-icons/bs';

export default function ServiceSection() {
  return (
    <section
      id="service"
      className="flex flex-col items-center py-28 bg-ntrlThird text-ntrlPrime"
    >
      <div className="flex px-5 flex-col justify-between xl:h-[370px] md:mb-[50px] xl:mb-[125px]">
        <div className="max-w-[900px]">
          <SectionSubTitle>01 / Service</SectionSubTitle>
          <SectionMainTitle>
            a full-service design firm whose perspective creates digital
            experiences.
          </SectionMainTitle>
        </div>
        <div className="max-w-[430px]">
          <SectionSubTitle>
            - We have a love for finding the best digital solutions for
            forward-thinking brands who want to push the envelope and make a big
            impact.
          </SectionSubTitle>
        </div>
      </div>
      <div className="max-w-[900px] w-full xl:max-w-none px-5 lg:px-5">
        <div className="flex flex-col xl:flex-row justify-end gap-2 ">
          {services.slice(0, 3).map((service) => (
            <h1
              className="group text-[30px] lg:text-h1 after:hidden xl:first:after:inline after:content-['/'] xl:after:mx-2 after:hover:text-ntrlPrime before:hidden  xl:last:before:inline before:content-['/'] xl:before:mx-2 before:text-ntrlPrime hover:text-brand transition-all"
              key={service.id}
            >
              <span className="inline-block align-top xl:pt-4 pr-1">
                {service.id}
              </span>
              <img
                className="inline-block align-top w-0 mx-1 group-hover:w-[100px] bg-brand transition-all rounded-xl"
                src={serviceImage}
                alt="service"
              />
              {service.name}
            </h1>
          ))}
        </div>
        <div className="flex flex-col xl:flex-row justify-start gap-2 ">
          {services.slice(3, 6).map((service) => (
            <h1
              className="group text-[30px] lg:text-h1 after:hidden xl:first:after:inline after:content-['/'] after:mx-5 after:hover:text-ntrlPrime before:hidden  xl:last:before:inline before:content-['/'] before:mx-5 before:text-ntrlPrime hover:text-brand transition-all"
              key={service.id}
            >
              <span className="inline-block align-top xl:pt-4 pr-1">
                {service.id}
              </span>
              <img
                className="inline-block align-top w-0 mx-1 group-hover:w-[100px] bg-brand transition-all rounded-xl"
                src={serviceImage}
                alt="service"
              />
              {service.name}
            </h1>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="flex flex-col items-center justify-center rotate-45 rounded-full bg-ntrlPrime mt-7 text-ntrlThird w-[133px] aspect-square transition-all hover:-rotate-45 hover:text-ntrlPrime hover:bg-ntrlThird hover:scale-105 border-ntrlPrime hover:border-2 "
      >
        View All <BsArrowDown />
      </button>
    </section>
  );
}
