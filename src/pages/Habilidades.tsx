"use client";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejs,
} from "react-icons/di";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
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
import tailwind from "../../public/tailwind.png";
import mysql from "../../public/mysql.png";
import next from "../../public/next.png";
import firebase from "../../public/firebase.png";
import wordpress from "../../public/wordpress.png";

const saira = Saira({
  subsets: ["latin"],
  weight: "500",
});

export default function Habilidades() {
  const [mostrarMais, setMostrarMais] = useState(false);
  const toggleMostrarMais = () => {
    setMostrarMais(!mostrarMais);
  };

  return (
    <div className={`${saira.className}`}>
      <div className="flex items-center text-center justify-center gap-6 pt-10">
        <FaChevronLeft size={50} />
        <h1 className="text-2xl md:text-4xl text-center items-center text-white">
          Habilidades
        </h1>
        <FaChevronRight size={50} />
      </div>
      <div className="xl:px-80 xl:pt-32">
        <div>
          <h2 className="flex justify-start text-4xl">HTML,CSS e JavaScript</h2>
        </div>
        <div className="flex items-center">
          <p className="pr-20 xl:pt-20 text-white">
            HTML, CSS e Javascript, também conhecidas como santíssima trindade
            da web, formam o principal conjunto de tecnologias para qualquer
            aplicação web. Já deu para ver que é de suma importância entender
            MUITO bem esses caras.
          </p>
          <Image
            className="rounded-full my-0  "
            src={html}
            alt="Foto de Perfil de Lucas Assis"
            width={50}
            height={50}
            unoptimized
          />
          <Image
            className="rounded-full my-0  "
            src={css}
            alt="Foto de Perfil de Lucas Assis"
            width={50}
            height={50}
            unoptimized
          />
          <Image
            className="rounded-full my-0  "
            src={js}
            alt="Foto de Perfil de Lucas Assis"
            width={50}
            height={50}
            unoptimized
          />
        </div>
      </div>

      <div className="xl:px-80 xl:pt-20">
        <div>
          <h2 className="flex justify-start text-4xl ">React JS</h2>
        </div>
        <div className="flex items-center">
          <p className="pr-20  text-white">
            O React é uma biblioteca JavaScript declarativa, eficiente e
            flexível para criar interfaces. Ele permite compor UIs complexas a
            partir de pequenos e isolados códigos chamados “componentes”.
          </p>
          <Image
            className="rounded-full my-0  "
            src={react}
            alt="Foto de Perfil de Lucas Assis"
            width={150}
            height={150}
            unoptimized
          />
        </div>
      </div>

      <div className="xl:px-80 xl:pt-20">
        <div>
          <h2 className="flex justify-start text-4xl ">Next JS</h2>
        </div>
        <div className="flex items-center">
          <p className="pr-20  text-white">
            Next.js é um framework de código aberto baseado em JavaScript,
            projetado para o desenvolvimento de aplicativos da web rápidos e
            eficientes.
          </p>
          <Image
            className="rounded-full my-0  "
            src={next}
            alt="Foto de Perfil de Lucas Assis"
            width={150}
            height={150}
            unoptimized
          />
        </div>
      </div>

      <div className="xl:px-80 xl:pt-20">
        <div>
          <h2 className="flex justify-start text-4xl">TypeScript</h2>
        </div>
        <div className="flex items-center">
          <p className="pr-20  text-white">
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
      {mostrarMais && (
        <>
          <div className="xl:px-80 xl:pt-20">
            <div>
              <h2 className="flex justify-start text-4xl">Node Js</h2>
            </div>
            <div className="flex items-center">
              <p className="pr-20  text-white">
                Node.js é um software de código aberto, multiplataforma, baseado
                no interpretador V8 do Google e que permite a execução de
                códigos JavaScript fora de um navegador web.
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
          <div className="xl:px-80 xl:pt-20">
            <div>
              <h2 className="flex justify-start text-4xl">Tailwind</h2>
            </div>
            <div className="flex items-center">
              <p className="pr-20 xl:pt-10  text-white">
                O Tailwind CSS é um framework de design de código aberto que
                facilita a criação de interfaces de usuário atraentes e
                responsivas em sites e aplicativos da web. Ele se destaca por
                utilizar classes HTML simples para aplicar estilos, o que torna
                o desenvolvimento mais eficiente e flexível. Com o Tailwind CSS,
                você pode criar estilos personalizados, espaçamentos e layouts
                de forma rápida e consistente, simplificando a manutenção e o
                design de seus projetos. É uma ferramenta popular entre
                desenvolvedores web para acelerar o processo de criação de
                designs bonitos e funcionais.
              </p>
              <Image
                className="rounded-full my-0  "
                src={tailwind}
                alt="Foto de Perfil de Lucas Assis"
                width={150}
                height={150}
                unoptimized
              />
            </div>
          </div>

          <div className="xl:px-80 xl:pt-20">
            <div>
              <h2 className="flex justify-start text-4xl">MySQL</h2>
            </div>
            <div className="flex items-center">
              <p className="pr-20 xl:pt-10  text-white">
                O MySQL é um sistema de gerenciamento de banco de dados, que
                utiliza a linguagem SQL como interface. É atualmente um dos
                sistemas de gerenciamento de bancos de dados mais populares da
                Oracle Corporation, com mais de 10 milhões de instalações pelo
                mundo.
              </p>
              <Image
                className="rounded-full my-0  "
                src={mysql}
                alt="Foto de Perfil de Lucas Assis"
                width={150}
                height={150}
                unoptimized
              />
            </div>
          </div>

          <div className="xl:px-80 xl:pt-20">
            <div>
              <h2 className="flex justify-start text-4xl">Firebase</h2>
            </div>
            <div className="flex items-center">
              <p className="pr-20 xl:pt-10  text-white">
                O Firebase é uma plataforma de desenvolvimento de aplicativos
                móveis e web criada pelo Google. Ele oferece uma variedade de
                serviços e ferramentas para ajudar os desenvolvedores a criar
                aplicativos de alta qualidade de forma mais eficiente. Aqui está
                um resumo básico dos principais recursos e serviços do Firebase.
              </p>
              <Image
                className="rounded-full my-0   "
                src={firebase}
                alt="Foto de Perfil de Lucas Assis"
                width={150}
                height={150}
                unoptimized
              />
            </div>
          </div>

          <div className="xl:px-80 xl:pt-20">
            <div>
              <h2 className="flex justify-start text-4xl">Wordpress</h2>
            </div>
            <div className="flex items-center">
              <p className="pr-20 xl:pt-10  text-white">
                O WordPress é uma plataforma de gerenciamento de conteúdo (CMS)
                amplamente utilizada para criar e gerenciar sites e blogs
              </p>
              <Image
                className="rounded-full my-0  "
                src={wordpress}
                alt="Foto de Perfil de Lucas Assis"
                width={150}
                height={150}
                unoptimized
              />
            </div>
          </div>
        </>
      )}
      <div className="flex justify-center my-4">
        <button
          className="bg-cyan-500 hover:bg-white text-black font-bold py-2 px-4 rounded xl:mt-10 shadow-white"
          onClick={toggleMostrarMais}
        >
          {mostrarMais ? "Mostrar Menos" : "Mostrar Mais"}
        </button>
      </div>
    </div>
  );
}
