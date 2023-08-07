import footerImg from '../assets/footer.png';

export default function Footer() {
  return (
    <footer className="bg-background pt-[27px] pb-[66px] px-[32px] flex justify-center lg:justify-between">
      <div className="hidden lg:flex gap-6 uppercase ">
        <img
          className=''
          src={footerImg}
          alt="footer"
        />
        <h2 className="max-w-[443px] leading-[52.8px]">
          Would you like to work with us? Let&apos;s! work together
        </h2>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col justify-between max-w-[209px]">
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          <p>
            +62 824 - 2637 - 8823 <br /> +62 813 - 3445 - 9349
          </p>
          <a href="mailto:Nuxstudio@design.io">Nuxstudio@design.io</a>
        </div>
        <div className="flex flex-col justify-between">
          <a
            href="https://github.com/ichsansandy"
            className='hover:scale-110'
            target="_blank"
            rel="noreferrer"
          >
            Dribble
          </a>
          <a
            href="https://github.com/ichsansandy"
            className='hover:scale-110'
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
          <a
            href="https://github.com/ichsansandy"
            className='hover:scale-110'
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ichsansandy"
            className='hover:scale-110'
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com/ichsansandy"
            className='hover:scale-110'
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
