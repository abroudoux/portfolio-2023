interface projectsDataProps {
    id: number,
    name: string,
    description: string,
    link: string,
    technos: string,
    target: string,
};


export default function Card(props: projectsDataProps) {

    return (
        
        <div key={props.id} className="py-5 flex flex-col">
			<h3 className="card-title text-2xl p-1 mb-3 block font-medium">{props.name}</h3>
			<p className="text-xl mb-2 font-normal">{props.description}</p>
            <p className="mb-5">
                <a href={props.link} target={props.target} className="hover:cursor-pointer underline text-lg font-normal">
                    Lien du projet Github
                </a>
			</p>
            <p className="text-lg font-light">Technos et langages utilisés : {props.technos}</p>
		</div>
    )
}
