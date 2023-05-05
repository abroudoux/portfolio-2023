// Data 
import contents from './content';
import projectsDataProps from './interface';

// Components
import Cards from './Card';


export default function Projects(props: projectsDataProps) {

    return (
        <>
        {contents.map(contents => (
            <Cards 
                id={contents.id}
                name={contents.name}
                description={contents.description}
            />
        ))}
        </>
    )
}