import Link from "next/link"
import Image from "next/image"
import { MenuCloseIcon } from "../icons/MenuCloseIcon"
import { Saira } from "next/font/google";


interface MenuProps{
    isVisible:boolean;
    onClose:()=> void;
}


const saira = Saira({
    subsets:['latin'],
    weight:'500',
  });

export const Menu = ({isVisible, onClose}:MenuProps)=>{
    return(
        <div className={`${isVisible ? 'flex' : 'invisible'} fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}
        onClick={onClose}>
            <div className="w-full bg-h-blue-900 h-96 shadow-md py-4 px-5"
            onClick={(e)=> e.stopPropagation()}>
                <div className="flex justify-between mb-5">
                    <Link href='/'>
                    <span className= "text-2xl m space ">/L.A DEV/</span>
                    </Link>
                    <button>
                        <MenuCloseIcon className="fill-white w-10 h-10"/>
                    </button>
                </div>
                <nav className="flex flex-col gap-5 text-xl p-5 items-center">
                    <Link href="/"> Sobre mim</Link>
                    
                    <Link href="/contatos"> Contatos</Link>
                </nav>
            </div>
        </div>
    )
}