import Head from "next/head";
import AboutMe from "@/components/Home/AboutMe";
import Header from '@/components/common/Header';
import Contato from "@/pages/contatos";
import Projects from "@/components/Home/Projects";
import Habilidades from "@/pages/Habilidades";


import lladev from "../../public/LLADEV.png"
import intranet from "../../public/INTRANET.png"
import vob from "../../public/VOB.png"
import oba from "../../public/OBA.png"

import { DiGhostSmall } from "react-icons/di";



export default function Home() {

  const projects = [
    {
      slug:'Portifolio LAA DEV',
      name:'Portifolio LLA DEV',
      info:"Portifolio",
      image:{
        url:lladev,
        alt:'Portifolio LLA DEV'
      },
    },
    {
      slug:'https://americavistosonline.com/',
      name:'Intranet América',
      info:"Sistema desenvolvido com o objetivo de fornecer informações diárias e auxiliar os colaboradores a melhorar seu desempenho na empresa (REACT/FIREBASE)",
      image:{
        url:intranet,
        alt:'Intranet América'
      }
    },
    {
      slug:'https://lojavob.com.br/',
      name:'VOB',
      info:"Site e-commerce desenvolvido em (Wordpress) para a loja VOB que trabalha com moda feminina",
      image:{
        url:vob,
        alt:'Loja E-commerce VOB',
      }
    },
    {
      slug:'https://obamercado.com.br/',
      name:'OBA MERCADO',
      info:"Site e-commerce desenvolvido em (Wordpress) para a loja OBA que tem o segmento de vendas igual Mercado Livre, Shopee e Shein",
      image:{
        url:oba,
        alt:'Oba mercado'
      }
    },
    
    
  ]

  return (
    <>
    <Head><title>Lucas Assis Dev</title></Head>
    <Header/>
    <meta name="description" content="Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!"/>
    <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe/>
        
    </div>

    <section className="flex xl:items-center xl:justify-center xl:pt-[6rem] bg-black">
    <Projects projects={projects}/>
    </section>
    <section className="">
      <Habilidades/>
    </section>

    <section className=" bg-black">
      <Contato/>
    </section>
    </>
  )
}
