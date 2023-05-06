export default function Header() {

    return (

        <header className="w-full h-auto flex flex-row mt-3">

            <h1 className="w-6/12 text-2xl">
                Arthur Broudoux
            </h1>   

            <nav className="w-6/12"> 
                <ul className="h-auto flex flex-row cursor-pointer">
                    <li>
                        <a href="#presentation" className="hover:blue duration-300">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#experiences">
                            Experiences & Education
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
