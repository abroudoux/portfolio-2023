// Data 
import contents from './content-experiences'

// Components
import Experiences from './Experiences'


export default function Education() {

    return (
        
        <section className="w-full h-auto pt-5 md:pt-16 px-5 md:pr-128 md:pl-10 pb-10">
            
            <h1 className="text-4xl pb-5 font-semibold">
                Mes différentes expériences
            </h1>

            {contents.map(contents => (
                <Experiences
                    id={contents.id}
                    name={contents.name}
                    entreprise={contents.entreprise}
                    missions={contents.missions}
                    quand={contents.quand}
                    competences={contents.competences}
                />
            ))}

        </section>
    )
}