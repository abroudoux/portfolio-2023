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
        
        <div key={props.id} className="py-7 flex flex-col">
			<h3 className="card-title text-2xl p-1 mb-3 font-medium bg-blue inline">{props.name}</h3>
			<p className="text-xl mb-5 font-normal">{props.description}</p>
            <p className="mb-7">
                <a href={props.link} target={props.target} className="hover:cursor-pointer hover:text-blue underline text-lg font-normal text-[#9d9c9c]">Lien du projet Github</a>
			</p>
            <p className="text-lg font-light flex md:justify-end italic">Technos utilisées : {props.technos}</p>
		</div>
    )
}
