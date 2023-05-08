// React
import { NavLink } from "react-router-dom";


export default function Header() {

    let activeNav = 'bg-blue p-2 text-lg font-medium'
    let inactiveNav = 'bg-transparent p-2 text-lg font-normal'

    return (

        <header className="bg-black w-full h-auto flex flex-row py-8 px-10 justify-between items-baseline sticky top-0">

            <NavLink to="/" className="w-6/12 text-3xl font-semibold hover:text-blue">
                <h2>
                    abroudoux
                </h2>
            </NavLink> 

            <nav className="w-6/12"> 
                <ul className="h-auto flex flex-row justify-end cursor-pointer">
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? activeNav + ' hover:text-white' : inactiveNav + ' hover:text-blue'}>
                            Projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={({ isActive }) => isActive ? activeNav + ' hover:text-white' : inactiveNav + ' hover:text-blue'}>
                            Compétences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/education" className={({ isActive }) => isActive ? activeNav + ' hover:text-white' : inactiveNav + ' hover:text-blue'}>
                            Formations & Expériences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? activeNav + ' hover:text-white' : inactiveNav + ' hover:text-blue'}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
