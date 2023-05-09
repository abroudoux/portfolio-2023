// React
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";


export default function Infos() {

    const [ hovered, setHovered ] = useState(false);
    const [ isInfosVisible, setIsInfosVisible ] = useState(true);
    const [ showCross, setShowCross ] = useState(false);
    const mobileBreakPoint = 976;

    const handleClick = () => {
        if (window.innerWidth <= mobileBreakPoint) {
            setIsInfosVisible(false);
        }
    };
    
    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setShowCross(true);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (

        <section className={`w-screen flex justify-center bg-blue ${isInfosVisible ? '' : 'hidden'}`}>

            <NavLink to="/contact" className="flex items-center px-5 hover:cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={handleClick}>

                <p className="text-center lg:text-left py-2 md:text-base">
                    Je suis actuellement à la recherche d'une alternance à partir de septembre 2023, contactez-moi plus plus d'informations!
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 hidden lg:block ml-1 transition ease-in-out duration-300 ${hovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                    
            </NavLink>

            {showCross && (
                <p className="absolute right-10 mt-3 transition ease-in-out duration-300 hover:cursor-pointer hover:scale-125" onClick={() => setIsInfosVisible(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 hidden lg:block" strokeWidth={1.5} stroke="currentColor">
                        <path fill="currentColor" d="M224 222.1L407 39.03C416.4 29.66 431.6 29.66 440.1 39.03C450.3 48.4 450.3 63.6 440.1 72.97L257.9 256L440.1 439C450.3 448.4 450.3 463.6 440.1 472.1C431.6 482.3 416.4 482.3 407 472.1L224 289.9L40.97 472.1C31.6 482.3 16.4 482.3 7.029 472.1C-2.343 463.6-2.343 448.4 7.029 439L190.1 256L7.029 72.97C-2.343 63.6-2.343 48.4 7.029 39.03C16.4 29.66 31.6 29.66 40.97 39.03L224 222.1z"/>
                    </svg>
                </p>
            )}
            
        </section>

    )
}
