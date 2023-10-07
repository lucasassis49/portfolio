import Head from "next/head";
import AboutMe from "@/components/Home/AboutMe";
import Header from '@/components/common/Header';
import Contato from "@/pages/contatos";
import Projects from "@/components/Home/Projects";

import lladev from "../../public/LLADEV.png"



export default function Home() {

  const projects = [
    {
      slug:'Portifolio LAA DEV',
      name:'Portifolio LLA DEV',
      image:{
        url:lladev,
        alt:'Portifolio LLA DEV'
      },
    },
    {
      slug:'Portifolio LAA DEV',
      name:'Portifolio LLA DEV',
      image:{
        url:lladev,
        alt:'Portifolio LLA DEV'
      }
    },
    {
      slug:'Portifolio LAA DEV',
      name:'Portifolio LLA DEV',
      image:{
        url:lladev,
        alt:'Portifolio LLA DEV'
      }
    },
    {
      slug:'Portifolio LAA DEV',
      name:'Portifolio LLA DEV',
      image:{
        url:lladev,
        alt:'Portifolio LLA DEV'
      }
    },
    {
      slug:'Portifolio LAA DEV',
      name:'Portifolio LLA DEV',
      image:{
        url:lladev,
        alt:'Portifolio LLA DEV'
      }
    }
  ]

  return (
    <>
    <Head><title>Lucas Assis Dev</title></Head>
    <Header/>
    <meta name="description" content="Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!"/>
    <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe/>
        <Projects projects={projects}/>
    </div>
    <section className="bg-black">
      <Contato/>
    </section>
    </>
  )
}
