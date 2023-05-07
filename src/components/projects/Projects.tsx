// React
import { useState } from 'react';

// Data
import contents from './content-projects';

// Components
import Cards from './Card';


export default function Projects() {

    const [hovered, setHovered] = useState(false);

    return (
        
        <section id="projects" className="w-full h-auto pt-16 pr-128 pl-10 pb-10">

            <h2 className="text-4xl pb-5 font-semibold">
                Quelqu'uns de mes projets...
            </h2>

            {contents.map(contents => (
                <Cards 
                    id={contents.id}
                    name={contents.name}
                    description={contents.description}
                    link={contents.link}
                    technos={contents.technos}
                    target={contents.target}
                />
            ))}

            <div className="flex items-center mt-10" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

                <p className="text-xl">
                    Découvrez-en plus sur <a href="https://github.com/abroudoux" target="_blank" className="underline">mon Github</a>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`transition ease-in-out duration-300 h-5 w-5 ml-1 sm:block hidden ${hovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                
            </div>

        </section>
    )
}