import Head from "next/head"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export default function Contato(){
    return(
        <>
        <Head><title>Lucas Assis Dev</title></Head>
        <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
            <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
            <ul className="table mx-auto space-y-6 mad:space-y-8">
                <li className="md:text-xl">
                    <span className="font-bold">E-mail para contato</span>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a href="mailto:lucasassisdev@gmail.com" className="text-sm md:text-lg ">lucasassisdev@gmail.com</a>
                    </div>
                </li>
                <li className="md:text-xl">
                    <span className="font-bold"></span>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <AiFillLinkedin size={40}/><a href="https://www.linkedin.com/in/lucas-assis-4602a01aa/" className="text-sm md:text-lg ">/lucas-assis-4602a01aa</a>
                    </div>
                </li>
                <li className="md:text-xl">
                    <span className="font-bold"></span>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <AiFillGithub size={40}/><a href="https://github.com/lucasassis49" className="text-sm md:text-lg">/lucasassis49</a>
                    </div>
                </li>
                
            </ul>
        </div>
        </>
    )
}