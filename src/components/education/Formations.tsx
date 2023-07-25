interface formationsDataProps {
    id: number;
    name: string,
    etablissement: string;
    description: string;
    specialisation: string;
    quand: string;
    diplome: string;
};

export default function Formations(props: formationsDataProps) {

    return (

        <article key={props.id} className="py-7 flex flex-col">
            <h3 className="card-title text-2xl p-1 mb-3 font-medium bg-blue inline">{props.name} - {props.etablissement}</h3>
            <p className="text-xl mb-5 font-normal">{props.description}</p>
            <p className="text-xl mb-5 font-normal">Spécialisation : {props.specialisation}</p>
            <p className="text-xl mb-5 font-normal text-[#9d9c9c]">{props.quand}</p>
            <p className="text-lg font-light flex md:justify-end">{props.diplome}</p>
        </article>
    )

}