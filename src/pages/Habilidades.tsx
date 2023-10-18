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
            src={lucas}
            alt="Foto de Perfil de Lucas Assis"
            width={200}
            height={200}
            unoptimized
          />
        </div>
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
            src={lucas}
            alt="Foto de Perfil de Lucas Assis"
            width={200}
            height={200}
            unoptimized
          />
        </div>
      </div>

    </div>
  );
}
