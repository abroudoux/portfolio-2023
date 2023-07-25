interface experiencesDataProps {
    id: number,
    name: string,
    entreprise: string,
    missions: string,
    quand: string,
    competences: string,
};

export default function Experiences(props: experiencesDataProps) {

    return (

        <article key={props.id} className="py-7 flex flex-col">
            <h3 className="card-title text-2xl p-1 mb-3 font-medium bg-blue inline">{props.name} - {props.entreprise}</h3>
            <p className="text-xl mb-5 font-normal">{props.missions}</p>
            <p className="text-xl mb-5 font-normal text-[#9d9c9c]">{props.quand}</p>
            <p className="text-lg font-light flex md:justify-end">Compétences développées : {props.competences}</p>
        </article>
    )

}