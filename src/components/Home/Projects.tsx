"use client";
import { Project } from "@/types/Home";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Roboto } from "next/font/google";
interface ProjectsProps {
  projects: Project[];
}

const roboto = Roboto({
    subsets:['latin'],
    weight:'400',
});


export default function Projects({ projects }: ProjectsProps) {
  return (
    <article id="projetos" className="space-y-16 2xl:p-28 text-center bg-black shadow-white01 rounded-2xl p-10">
      <h2 className="text-2xl md:text-2xl text-center items-center">Projetos Recentes</h2>
      <div className="flex flex-wrap justify-center">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          showIndicators={false}
         
          className="items-center sm:flex w-72 xl:w-[50rem]"
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
