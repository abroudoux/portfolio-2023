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

        <div key={props.id} className="py-7 flex flex-col">
            <h3 className="card-title text-2xl p-1 mb-3 font-medium bg-blue inline">{props.name} - {props.entreprise}</h3>
            <p className="text-xl mb-5 font-normal">Missions : {props.missions}</p>
            <p className="text-xl mb-5 font-light">{props.quand}</p>
            <p className="text-lg font-normal flex md:justify-end italic">Compétences développées : {props.competences}</p>
        </div>
    )

}