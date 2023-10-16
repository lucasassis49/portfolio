import './aboutme.css';
import Link from "next/link";
import Image from "next/image";
import lucasassis from "../../../public/lucasassis.jpeg";
import './aboutme.css';
import { Roboto } from "next/font/google";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {FaNode} from "react-icons/fa";

const roboto = Roboto({
    subsets:['latin'],
    weight:'400',
});



export default function AboutMe() {
  return (
    
    <main className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-6xl xl:leading-[5rem]">Prazer, sou&nbsp;
        <span className="font-bold text-cyan-300 shadow-lg bg-black rounded-lg animate-pulse">Lucas Assis</span>
        </h1>
        <div className="mb-8">
        <h2 className={`${roboto.className}`}>
          Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!
        </h2>
        <ul className="flex py-2 mx-auto  mad:space-y-">
                <li className="md:text-xl">
                    <span className="font-bold"></span>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a href="https://www.linkedin.com/in/lucas-assis-4602a01aa/" className="text-sm md:text-lg hover:text-cyan-400"><AiFillLinkedin id='icon-aifill' size={40}/></a>
                    </div>
                </li>
                <li className="md:text-xl">
                    <span className="font-bold"></span>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a href="https://github.com/lucasassis49" className="text-sm md:text-lg  hover:text-cyan-400"><AiFillGithub size={40}/></a>
                    </div>
                </li>
                
            </ul>
        </div>
        <ul className="flex flex-wrap gap-2 justify-center xl:grid-cols-1 xl:w-fit">
          <li className="rounded w-[6rem] text-center shadow-white" style={{ backgroundColor: "#2F74C0", color: "#FFFFFF" }}>typescript</li>
          <li className="rounded w-[6rem] text-center shadow-white" style={{ backgroundColor: "#6BDDFA", color: "#000000" }}>react</li>
          <li className="rounded w-[6rem] text-center shadow-white" style={{ backgroundColor: "#EFD81D", color: "#000000" }}>javascript</li>
          <li className="rounded w-[6rem] text-center shadow-white" style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>next.js</li>
          <li className="rounded w-[6rem] text-center shadow-white" style={{ backgroundColor: "#1db563", color: "#000000" }}>node.js</li>
          <li className="rounded w-[6rem] text-center shadow-white" style={{ backgroundColor: "#FFFFFF", color: "#4fc4be" }}>tailwind</li>
          <li className="rounded w-[6rem] text-center shadow-white" style={{ backgroundColor: "#FFFFFF", color: "#605951" }}>wordpress</li>
          <li className="rounded w-[6rem] text-center shadow-white" style={{ backgroundColor: "#cc4e00", color: "#FFFFFF" }}>firebase</li>
        </ul>
      </div>
      <div className=" relative w-60 md:w-72">
        <Image
        className="rounded-full my-0 "
          src={lucasassis}
          alt="Foto de Perfil de Lucas Assis"
          width={300}
          height={300}
          unoptimized
        />
        <p className="p-4 w-fit text-base leading-tight bg-cyan-500 rounded-xl text-black absolute-bottom-[0.75rem] sm:bottom-3 animate-bounce">
          <span className="text-3xl">3+</span>
          <br/>
          anos de experiência
        </p>
      </div>
    </main>
    
  );
}
