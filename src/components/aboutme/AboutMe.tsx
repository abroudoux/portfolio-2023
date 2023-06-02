// CV
import cv from '../../img/cv-arthur-2023.jpg';


export default function AboutMe() {

    return (

        <section className="w-full h-auto pt-5 lg:pt-16 px-5 lg:pr-128 lg:pl-10 pb-10">

            <h1 className="text-4xl pb-5 font-semibold">
                Bonjour ! Je m'appelle Arthur
                <br/>
                <span className="text-blue">
                    Développeur front junior
                </span>
            </h1>

            <p className="text-xl py-5 font-medium leading-8">
                Développeur web depuis un an, je cherche à me perfectionner au travers de nouveaux projets et défis en tous genres
                <br/>
                <br/>
                Fiable et introspectif, je sais fournir une image honnête de moi-même et faire les efforts nécessaires pour m'améliorer
                <br/>
                <br/>
                J'accorde un soin tout particulier à fournir un travail <span className="text-blue">soigné</span> et <span className="text-blue">accessible</span> ainsi qu'à maintenir un environnement de travail organisé
                <br/>
            </p>

            <p className="text-lg pt-12 font-medium leading-8">
                Basé à Angers & Le Mans 📍
                <br/>
                Très bon niveau en Français, Niveau professionnel en Anglais
            </p>

            <div className="mt-16 lg:mt-20">

                <ul className="flex row">
                    <li className="pr-1">
                        <a href="mailto:arthur.broudoux@gmail.com" className="underline hover:bg-white hover:text-black transition-all 300ms ease-in-out p-1 font-medium text-lg ">
                            Mail
                        </a>
                    </li>
                    <li className="px-1">
                        <a href={cv} target="_blank" rel="noreferrer" className="underline hover:bg-white hover:text-black transition-all 300ms ease-in-out p-1 font-medium text-lg ">
                            Curriculum Vitae
                        </a>
                    </li>
                    <li className="px-1">
                        <a href="https://github.com/abroudoux" target="_blank" rel="noreferrer" className="underline hover:bg-white hover:text-black transition-all 300ms ease-in-out p-1 font-medium text-lg ">
                            Github
                        </a>
                    </li>
                    <li className="pl-1">
                        <a href="https://www.linkedin.com/in/arthur-broudoux-b318a8251/" target="_blank" rel="noreferrer"className="underline hover:bg-white hover:text-black transition-all 300ms ease-in-out p-1 font-medium text-lg ">
                            Linkedin
                        </a>
                    </li>
                </ul>

            </div>

        </section>

    ) 
}