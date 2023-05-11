// Data 
import contentsExp from './content-experiences'
import contentsForm from './content-formations'

// Components
import Experiences from './Experiences'
import Formations from './Formations'


export default function Education() {

    return (

        <section className="w-full h-auto pt-5 md:pt-16 px-5 md:pr-128 md:pl-10 pb-10">

            <div className="pb-5">
                <h1 className="text-4xl font-semibold">
                    Mes expériences
                </h1>

                {contentsExp.map(contentsExp => (
                    <Experiences
                        id={contentsExp.id}
                        name={contentsExp.name}
                        entreprise={contentsExp.entreprise}
                        missions={contentsExp.missions}
                        quand={contentsExp.quand}
                        competences={contentsExp.competences}
                    />
                ))}
            </div>

            <div className="py-12">
                <h2 className="text-4xl font-semibold">
                    Mes formations
                </h2>

                {contentsForm.map(contentsForm => (
                    <Formations
                        id={contentsForm.id}
                        name={contentsForm.name}
                        etablissement={contentsForm.etablissement}
                        description={contentsForm.description}
                        specialisation={contentsForm.specialisation}
                        quand={contentsForm.quand}
                        diplome={contentsForm.diplome}
                    />
                ))}
            </div>

        </section>
    )
}