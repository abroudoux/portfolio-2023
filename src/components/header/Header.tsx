// React
import { NavLink } from "react-router-dom";
import { MouseEvent, useState, useEffect } from "react";


export default function Header() {

    // Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [title, setTitle] = useState<string>(() => {
        const storedTitle = localStorage.getItem("title");
        return storedTitle || "abroudoux";
    });

    function Menu(e: MouseEvent<HTMLSpanElement>) {
        setIsMenuOpen(!isMenuOpen);
    };

    function closeMenu() {
        setIsMenuOpen(false);
    };

    // Title
    const titleChange = (e: string) => {
        const newTitle = `abroudoux${e}`;
        setTitle(newTitle);
        localStorage.setItem("title", newTitle);
    };

    useEffect(() => {

        // Title
        const storedTitle = localStorage.getItem("title");
        if (storedTitle) {
            setTitle(storedTitle);
        }

        // Handle Resize
        function handleResize() {
            setIsMenuOpen(window.innerWidth >= 768);
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (

        <header className="bg-black w-full h-auto flex md:items-center flex-col md:flex-row py-5 px-5 md:px-10 md:justify-between sticky top-0">

            {/* Title + Menu Icon */}
            <div className="flex flex-row justify-between">
                <NavLink to="/" className="md:w-6/12 text-3xl font-semibold hover:text-blue" onClick={event => { closeMenu(); titleChange("") }}>
                    <h2 id="title_menu">
                        <h1>
                            {title}
                        </h1>
                    </h2>
                </NavLink> 

                {window.innerWidth < 767 && (
                <span onClick={Menu} data-name="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mt-2 w-6 h-6 md:hidden block cursor-pointer">
                        <path fill="currentColor" d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z"/>
                    </svg>
                </span>
                )}
            </div>

            {/* Nav Bar */}
            {(isMenuOpen || window.innerWidth >= 768) && (
            <nav id="nav" className="transition-all ease-in duration-500"> 
                <ul className="flex flex-col md:flex-row justify-around text-2xl md:text-xl mt-4 md:mt-0 ">
                    <li>
                        <NavLink to="/projects" className={ ({isActive}) => `md:p-2 text-md font-medium ${isActive ? 'md:bg-blue md:text-white text-blue hover:text-white' : 'bg-transaparent hover:text-blue'}` } onClick={event => { closeMenu(); titleChange("/projects") }}>
                            Projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={ ({isActive}) => `md:p-2 text-md font-medium ${isActive ? 'md:bg-blue md:text-white text-blue hover:text-white' : 'bg-transaparent hover:text-blue'}` } onClick={event => { closeMenu(); titleChange("/compétences") }}>
                            Compétences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/formations" className={ ({isActive}) => `md:p-2 text-md font-medium ${isActive ? 'md:bg-blue md:text-white text-blue hover:text-white' : 'bg-transaparent hover:text-blue'}` } onClick={event => { closeMenu(); titleChange("/formations") }}>
                            Formations & Expériences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={ ({isActive}) => `md:p-2 text-md font-medium ${isActive ? 'md:bg-blue md:text-white text-blue hover:text-white' : 'bg-transaparent hover:text-blue'}` } onClick={event => { closeMenu(); titleChange("/contact") }}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            )}

        </header>
    )
}
