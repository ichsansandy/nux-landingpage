import heroImage from '../assets/heroImg.png';
import { services } from '../data/service';
import Crawler from '../components/Crawler';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className='bg-background'>
        <div className="py-14 px-7 lg:px-14 max-w-[1375px] bg-transparent">
          <div className="inline tracking-tight text-[30px] leading-[35px] sm:text-[60px] md:text-[70px] md:leading-[60px] lg:text-display uppercase font-extrabold lg:leading-[125px]">
            super branding and creative ideas
          </div>
          <span className="hidden md:block lg:inline-block align-top p-4">
            <div className="bg-ntrlSecond flex justify-center items-center lg:px-16 lg:h-[94px] rounded-[50px] border-2 border-ntrlThird ">
              <svg
                width="54"
                height="58"
                viewBox="0 0 54 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.4588 10.126L27 6.59701L27.5412 10.126C28.9681 19.4306 35.7731 26.7909 44.5393 28.3418L48.2598 29L44.5393 29.6582C35.7731 31.2091 28.9681 38.5694 27.5412 47.874L27 51.403L26.4588 47.874C25.0319 38.5694 18.2269 31.2091 9.46071 29.6582L5.74016 29L9.46071 28.3418C18.2269 26.7909 25.0319 19.4306 26.4588 10.126Z"
                  className="fill-brand"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </span>
          <span className="inline-block align-super font-medium leading-[22.14px] w-[286px]">
            Nux Design creates distinctive brands, gorgeous websites, and
            campaigns that deviate from the ordinary.
          </span>
        </div>
      </div>
      <div className="h-[55px] bg-ntrlThird text-ntrlPrime flex items-center text-[32px]">
        <Crawler data={services} />
      </div>
      <div className="h-[130px] text-[52.5px] sm:text-[90px] lg:h-[299px] lg:text-[154px] xl:text-[230px] bg-brand uppercase  flex justify-center items-center tracking-tighter">
        nux design
      </div>
      <div className="overflow-hidden">
        <img
          alt="hero"
          src={heroImage}
          className="w-full grayscale hover:scale-105 hover:grayscale-0 transition-all"
        />
      </div>
    </section>
  );
}
