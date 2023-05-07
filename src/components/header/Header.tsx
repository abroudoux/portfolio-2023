// React
import { NavLink } from "react-router-dom";


export default function Header() {

    let activeNav = 'bg-blue p-2 text-lg font-medium'
    let inactiveNav = 'bg-transparent p-2 text-lg font-normal'

    return (

        <header className="w-full h-auto flex flex-row mt-5 px-10 justify-between align-middle">

            <NavLink to="/" className={({ isActive }) => isActive ? activeNav:inactiveNav}>
                <h2 className="w-6/12 text-3xl font-semibold">
                    abroudoux
                </h2>
            </NavLink> 

            <nav className="w-6/12"> 
                <ul className="h-auto flex flex-row justify-end cursor-pointer">
                    {/* <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? activeNav:inactiveNav}>
                            Présentation
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? activeNav:inactiveNav}>
                            Projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={({ isActive }) => isActive ? activeNav:inactiveNav}>
                            Compétences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/education" className={({ isActive }) => isActive ? activeNav:inactiveNav}>
                            Formations & Expériences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? activeNav:inactiveNav}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
