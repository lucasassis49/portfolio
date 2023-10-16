"use client";
import { Project } from "@/types/Home";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Roboto } from "next/font/google";
import { Saira } from "next/font/google";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface ProjectsProps {
  projects: Project[];
}

const saira = Saira({
  subsets:['latin'],
  weight:'500',
});

const roboto = Roboto({
    subsets:['latin'],
    weight:'400',
});


export default function Projects({ projects }: ProjectsProps) {
  return (
    <article id="projetos" className={`${saira.className} space-y-16 2xl:p-0 text-center rounded-2xl p-10 xl:w-[50rem] md:items-center xl:mb-[10rem]`}>
      <div className="flex items-center text-center justify-center gap-6">
        <FaChevronLeft size={50}/><h2 className={`${saira.className}text-2xl md:text-4xl text-center items-center text-white `}>Projetos Recentes</h2><FaChevronRight size={50}/>
      </div>
      
      <div className="flex justify-center xl:items-center">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          showIndicators={false}
         
          className="items-center sm:flex w-72 xl:w-[40rem]"
        >
          {projects.map(({ slug, name, image, info }, index) => (
            <div key={name + index} className="project-container">
              <Link href={`${slug}`}>
                <div className="text-md relative items-center">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    className="object-cover rounded-2xl h-[18.75rem] mb-4 items-center h-30"
                  />
                  <span className="text-2xl">{name}</span>
                  <p />
                  <span>{info}</span>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </article>
  );
}
