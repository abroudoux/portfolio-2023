// React
import { useState } from 'react';


export default function Infos() {

    const [hovered, setHovered] = useState(false);

    return (

        <section className="w-screen bg-blue flex justify-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

            <a href="#contact">
                <div className="flex items-center hover:cursor-pointer">

                    <p className="pt-2 pb-2 text-base text-center sm:text-left">
                        I'm currently looking for an alternation for September 2023, contact me for more information!
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`transition ease-in-out duration-300 h-5 w-5 ml-1 sm:block hidden ${hovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    
                </div>
            </a>    
            
        </section>

    )
}