import { AiFillInstagram, AiOutlineDribbble } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex md:justify-between items-center px-[32px] py-[29px] w-full backdrop-blur-xl mix-blend-difference text-ntrlPrime drop-shadow z-10">
      <div className="hidden lg:flex gap-1">
        <a
          href="https://github.com/ichsansandy"
          target="_blank"
          rel="noreferrer"
          className="bg-ntrlThird text-ntrlPrime text-[16px] p-2 rounded-full cursor-pointer hover:bg-ntrlPrime hover:text-ntrlThird transition-all"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://github.com/ichsansandy"
          target="_blank"
          rel="noreferrer"
          className="bg-ntrlThird text-ntrlPrime text-[16px] p-2 rounded-full cursor-pointer hover:bg-ntrlPrime hover:text-ntrlThird transition-all"
        >
          <BsMedium />
        </a>
        <a
          href="https://github.com/ichsansandy"
          target="_blank"
          rel="noreferrer"
          className="bg-ntrlThird text-ntrlPrime text-[16px] p-2 rounded-full cursor-pointer hover:bg-ntrlPrime hover:text-ntrlThird transition-all"
        >
          <AiOutlineDribbble />
        </a>
      </div>
      <ul className="flex lg:justify-evenly items-center w-full max-w-[803px]">
        <div className="hidden lg:flex justify-evenly w-full">
          <li className="hover:underline hover:scale-110 transition-all">
            <a href="#hero">Home</a>
          </li>
          <li className="hover:underline hover:scale-110 transition-all">
            <a href="#service">Service</a>
          </li>
          <li className="hover:underline hover:scale-110 transition-all">
            <a href="#project">Project</a>
          </li>
        </div>
        <li className="uppercase text-[24px] xl:px-10 font-semibold hover:underline hover:scale-110 transition-all">
          <a href="#hero">Nuxdsgn.</a>
        </li>
        <div className="hidden lg:flex justify-evenly w-full">
          <li className="hover:underline hover:scale-110 transition-all">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="hover:underline hover:scale-110 transition-all">
            <a href="#blog">Blog</a>
          </li>
          <li className="hover:underline hover:scale-110 transition-all">
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
      <a
        className="hidden md:block bg-ntrlThird text-ntrlPrime px-6 py-3 rounded-3xl hover:bg-ntrlPrime hover:scale-110 hover:text-ntrlThird transition-all"
        type="button"
        href='#contact'
      >
        Collaborate?
      </a>
    </nav>
  );
}
