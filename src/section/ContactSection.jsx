import eye from '../assets/eye.png';

export default function ContactSection() {
  return (
    <section className="py-[120px] px-[32px] bg-background flex flex-col gap-[32px]">
      <div className="text-h3 leading-[30px] md:leading-[50px] md:text-h1 xl:text-display xl:leading-[125px] max-w-[1378px] text-center uppercase font-extrabold">
        Let&apos;s{' '}
        <img
          className="inline-block align-baseline w-[60px] md:w-[100px] xl:w-fit"
          src={eye}
          alt="eye"
        />{' '}
        Works Together <br /> Let&apos;s Creative.
      </div>
      <div className="flex justify-center items-center gap-4">
        <button
          type="button"
          className="text-xs md:text-p capitalize p-3 md:px-6 md:py-4 rounded-[30px] bg-ntrlThird text-ntrlPrime hover:bg-ntrlSecond hover:scale-105 transition-all hover:text-ntrlThird"
        >
          Start with us
        </button>
        <button
          type="button"
          className="text-xs md:text-p p-3 md:px-6 md:py-4 rounded-[30px] bg-ntrlPrime text-ntrlThird hover:bg-ntrlSecond hover:scale-105 transition-all border-2 border-ntrlThird"
        >
          Consult with team
        </button>
      </div>
    </section>
  );
}
