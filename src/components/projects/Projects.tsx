// Data 
import contents from './content';
import projectsDataProps from './interface';

// Components
import Cards from './Card';


export default function Projects(props: projectsDataProps) {

    return (
        
        <div id="#projects">

            <h2>
                Some of my work ...
            </h2>

            {contents.map(contents => (
                <Cards 
                    id={contents.id}
                    name={contents.name}
                    description={contents.description}
                    link={contents.link}
                    technos={contents.technos}
                />
            ))}

            <p>
                Discover more on my 
                <a href="https://github.com/abroudoux" target="_blank">
                    Github
                </a>
            </p>

        </div>
    )
}