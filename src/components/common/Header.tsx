"use client";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { Saira } from "next/font/google";
import { Menu } from "./Menu";
import { useCallback, useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";

const roboto = Roboto({
  subsets:['latin'],
  weight:'500',
});

const saira = Saira({
  subsets:['latin'],
  weight:'500',
});


export default function Header(){
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() =>{
    setIsMenuOpen(true)
  },[]);

  const closeMenu = useCallback( ()=> {
    setIsMenuOpen(false);
  },[]);

    return(
  <header className={`${saira.className} bg-black text-lg flex py-3 px-5 justify-center items-center sticky top-0 z-20 gap-96 shadow-white `}>
          <span className= "text-4xl m space ">/L.A DEV/</span>
          <button className="p-1 md:hidden" onClick={openMenu}>
            <MenuIcon className="fill-white w-10 h-10"/>
          </button>
          <nav className="hidden md:flex items-center gap-8 t">
          <Link href="/" className="">Sobre mim</Link>
          <Link href="#projetos">Projetos</Link>
          <Link href="#contato">Entre em contato</Link>
          </nav>
          <Menu isVisible={isMenuOpen} onClose={closeMenu}/>
        </header>
)}