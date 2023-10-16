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

import {useState} from 'react';

const saira = Saira({
  subsets: ["latin"],
  weight: "500",
});

export default function Habilidades() {
  const [mostrarMais, setMostrarMais] = useState(false);



  return (
    <div className={`${saira.className} xl:p-20`}>
      <div className="">
        <div className="flex items-center text-center justify-center gap-6 pt-10">
          <FaChevronLeft size={50} />
          <h1 className="text-2xl md:text-4xl text-center items-center text-white">
            Habilidades
          </h1>
          <FaChevronRight size={50} />
        </div>
      </div>
      <div>
        {" "}
        <h3 className="flex justify-center text-2xl font-bold pt-20 xl:justify-start xl:pl-40">
          HTML,CSS e JavaScript
        </h3>
      </div>

      <div className="flex items-center">
        <p className=" flex p-10 text-lg text-center xl:justify-start xl:pl-32  text-white">
          HTML, CSS e Javascript, também conhecidas como santíssima trindade da
          web, formam o principal conjunto de tecnologias para qualquer
          aplicação web. Já deu para ver que é de suma importância entender
          MUITO bem esses caras.
        </p>
        <div className="flex xl:p-28">
          <DiHtml5 className="hidden xl:flex" size={100} />
          <DiCss3 className="hidden xl:flex" size={100} />
          <DiJavascript className="hidden xl:flex" size={100} />
        </div>
      </div>

      <div className="absolute">
        {" "}
        <h3 className="flex justify-center text-2xl font-bold pt-20 xl:justify-start xl:pl-40">
          React JS
        </h3>
      </div>

      <div className="flex items-center">
        <p className=" flex p-10 text-lg text-center xl:justify-start xl:pl-32  text-white">
          O React é uma biblioteca JavaScript declarativa, eficiente e flexível
          para criar interfaces. Ele permite compor UIs complexas a partir de
          pequenos e isolados códigos chamados “componentes”.
        </p>
        <div className="flex xl:p-28">
          <DiReact className="hidden xl:flex" size={200} />
        </div>
      </div>

      <div className="absolute">
        {" "}
        <h3 className="flex justify-center text-2xl font-bold pt-20 xl:justify-start xl:pl-40">
          Node JS
        </h3>
      </div>

      <div className="flex items-center">
        <p className=" flex p-10 text-lg text-center xl:justify-start xl:pl-32  text-white">
          Node.js é um software de código aberto, multiplataforma, baseado no
          interpretador V8 do Google e que permite a execução de códigos
          JavaScript fora de um navegador web.
        </p>
        <div className="flex xl:p-28">
          <DiNodejs className="hidden xl:flex" size={200} />
        </div>
      </div>

      <div>
        {" "}
        <h3 className="flex justify-center text-2xl font-bold pt-20 xl:justify-start xl:pl-40">
          HTML,CSS e JavaScript
        </h3>
      </div>

      <div className="flex items-center">
        <p className=" flex p-10 text-lg text-center xl:justify-start xl:pl-32  text-white">
          HTML, CSS e Javascript, também conhecidas como santíssima trindade da
          web, formam o principal conjunto de tecnologias para qualquer
          aplicação web. Já deu para ver que é de suma importância entender
          MUITO bem esses caras.
        </p>
        <div className="flex xl:p-28">
          <DiHtml5 className="hidden xl:flex" size={100} />
          <DiCss3 className="hidden xl:flex" size={100} />
          <DiJavascript className="hidden xl:flex" size={100} />
        </div>
      </div>

      <div>
        {" "}
        <h3 className="flex justify-center text-2xl font-bold pt-20 xl:justify-start xl:pl-40">
          HTML,CSS e JavaScript
        </h3>
      </div>

      <div className="flex items-center">
        <p className=" flex p-10 text-lg text-center xl:justify-start xl:pl-32  text-white">
          HTML, CSS e Javascript, também conhecidas como santíssima trindade da
          web, formam o principal conjunto de tecnologias para qualquer
          aplicação web. Já deu para ver que é de suma importância entender
          MUITO bem esses caras.
        </p>
        <div className="flex xl:p-28">
          <DiHtml5 className="hidden xl:flex" size={100} />
          <DiCss3 className="hidden xl:flex" size={100} />
          <DiJavascript className="hidden xl:flex" size={100} />
        </div>
      </div>

      <div>
        {" "}
        <h3 className="flex justify-center text-2xl font-bold pt-20 xl:justify-start xl:pl-40">
          HTML,CSS e JavaScript
        </h3>
      </div>

      <div className="flex items-center">
        <p className=" flex p-10 text-lg text-center xl:justify-start xl:pl-32  text-white">
          HTML, CSS e Javascript, também conhecidas como santíssima trindade da
          web, formam o principal conjunto de tecnologias para qualquer
          aplicação web. Já deu para ver que é de suma importância entender
          MUITO bem esses caras.
        </p>
        <div className="flex xl:p-28">
          <DiHtml5 className="hidden xl:flex" size={100} />
          <DiCss3 className="hidden xl:flex" size={100} />
          <DiJavascript className="hidden xl:flex" size={100} />
        </div>
      </div>
    </div>
  );
}
