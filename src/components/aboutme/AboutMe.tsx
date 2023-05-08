export default function AboutMe() {
    
    return (
        
        <section className="w-full h-auto pt-16 pr-128 pl-10 pb-10">

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
                Fiable et introspectif, je sais fournir une image honnête de moi-même et montrer les efforts nécessaires pour m'améliorer
                <br/>
                J'accorde un soin tout particulier à fournir un travail <span className="text-blue">soigné</span> et <span className="text-blue">accessible</span> ainsi qu'à maintenir un environnement de travail propre et correctement agencé
                <br/>
            </p>

            <p className="text-lg py-3 font-medium leading-7">
                📍 Angers & Le Mans
                <br/>
                🎉 19 ans
                <br/>
                Très bon niveau en Français, niveau professionnel en Anglais
            </p>

            <div className="mt-24">
                <ul className="flex row">
                    <li className="px-1">
                        <a href="mailto:arthur.broudoux@gmail.com" className="underline hover:bg-white hover:text-black transition-all 300ms ease-in-out p-1 font-medium text-lg ">
                            Mail
                        </a>
                    </li>
                    <li className="px-1">
                        <a href="/Users/arthur/Documents/dev/portfolio/public/img/cv_arthur_2023.pdf" target="_blank" className="underline hover:bg-white hover:text-black transition-all 300ms ease-in-out p-1 font-medium text-lg ">
                            Curriculum vitae.pdf
                        </a>
                    </li>
                    <li className="px-1">
                        <a href="https://github.com/abroudoux" target="_blank" className="underline hover:bg-white hover:text-black transition-all 300ms ease-in-out p-1 font-medium text-lg ">
                            Github
                        </a>
                    </li>
                    <li className="px-1">
                        <a href="https://www.linkedin.com/in/arthur-broudoux-b318a8251/" target="_blank" className="underline hover:bg-white hover:text-black transition-all 300ms ease-in-out p-1 font-medium text-lg ">
                            Linkedin
                        </a>
                    </li>
                </ul>

            </div>

        </section>

    ) 
}