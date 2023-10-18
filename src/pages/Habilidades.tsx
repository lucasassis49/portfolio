"use client";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejs,
} from "react-icons/di";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Saira } from "next/font/google";

import { useState } from "react";
import Image from "next/image";

import lucas from "../../public/lucasassis.jpeg";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/js.png";
import react from "../../public/react.png";
import typescript from "../../public/typescript.png";
import node from "../../public/nodejs.png";

const saira = Saira({
  subsets: ["latin"],
  weight: "500",
});

export default function Habilidades() {
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    <div className={`${saira.className}`}>
      <div className="flex items-center text-center justify-center gap-6 pt-10">
        <FaChevronLeft size={50} />
        <h1 className="text-2xl md:text-4xl text-center items-center text-white">
          Habilidades
        </h1>
        <FaChevronRight size={50} />
      </div>
      <div className="xl:px-80 xl:pt-20">
        <div>
          <h2 className="flex justify-start text-4xl">HTML,CSS e JavaScript</h2>
        </div>
        <div className="flex items-center">
          <p className="pr-20">
            HTML, CSS e Javascript, também conhecidas como santíssima trindade
            da web, formam o principal conjunto de tecnologias para qualquer
            aplicação web. Já deu para ver que é de suma importância entender
            MUITO bem esses caras.
          </p>
          <Image
            className="rounded-full my-0  "
            src={html}
            alt="Foto de Perfil de Lucas Assis"
            width={100}
            height={100}
            unoptimized
          />
          <Image
            className="rounded-full my-0  "
            src={css}
            alt="Foto de Perfil de Lucas Assis"
            width={100}
            height={100}
            unoptimized
          />
          <Image
            className="rounded-full my-0  "
            src={js}
            alt="Foto de Perfil de Lucas Assis"
            width={80}
            height={80}
            unoptimized
          />
        </div>
      </div>

      <div className="xl:px-80 xl:pt-20">
        <div>
          <h2 className="flex justify-start text-4xl">React JS</h2>
        </div>
        <div className="flex items-center">
          <p className="pr-20">
            O React é uma biblioteca JavaScript declarativa, eficiente e
            flexível para criar interfaces. Ele permite compor UIs complexas a
            partir de pequenos e isolados códigos chamados “componentes”.
          </p>
          <Image
            className="rounded-full my-0  "
            src={react}
            alt="Foto de Perfil de Lucas Assis"
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>

      <div className="xl:px-80 xl:pt-20">
        <div>
          <h2 className="flex justify-start text-4xl">TypeScript</h2>
        </div>
        <div className="flex items-center">
          <p className="pr-20">
            TypeScript é uma linguagem de programação de código aberto
            desenvolvida pela Microsoft. É um superconjunto sintático estrito de
            JavaScript e adiciona tipagem estática opcional à linguagem.
          </p>
          <Image
            className="rounded-full my-0  "
            src={typescript}
            alt="Foto de Perfil de Lucas Assis"
            width={150}
            height={150}
            unoptimized
          />
        </div>
      </div>

      <div className="xl:px-80 xl:pt-20">
        <div>
          <h2 className="flex justify-start text-4xl">Node Js</h2>
        </div>
        <div className="flex items-center">
          <p className="pr-20">
            Node.js é um software de código aberto, multiplataforma, baseado no
            interpretador V8 do Google e que permite a execução de códigos
            JavaScript fora de um navegador web.
          </p>
          <Image
            className="rounded-full my-0  "
            src={node}
            alt="Foto de Perfil de Lucas Assis"
            width={150}
            height={150}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
