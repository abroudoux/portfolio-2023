// Data
import contents from './content-skills';

// Components
import Technos from './Technos';


export default function Skills() {

    return (
        
        <section id="skills" className="w-full h-auto pt-16 pr-128 pl-10 pb-10">

            <h2 className="text-4xl pb-5 font-semibold">
                Quelles sont les solutions que je peux vous apporter ?
            </h2>

            {contents.map(contents => (
                <Technos 
                    id={contents.id}
                    name={contents.name}
                    description={contents.description}
                />
            ))}

        </section>
        
    )
}