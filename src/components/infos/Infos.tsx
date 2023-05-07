// React
import { useState } from 'react';
import { NavLink } from "react-router-dom";


export default function Infos() {

    const [hovered, setHovered] = useState(false);

    return (

        <section className="w-screen bg-blue flex justify-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

            <NavLink to="/contact" className="flex items-center hover:cursor-pointer">

                <p className="pt-2 pb-2 text-base text-center sm:text-left">
                    Je suis actuellement à la recherche d'une alternance à partir de septembre 2023, contactez-moi plus plus d'informations!
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`transition ease-in-out duration-300 h-5 w-5 ml-1 sm:block hidden ${hovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                    
            </NavLink>
            
        </section>

    )
}