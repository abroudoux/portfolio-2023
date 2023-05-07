// Interface
interface skillsDataProps {
    id: number,
    name: string,
    description: string,
};


export default function Technos(props: skillsDataProps) {

    return (

        <div key={props.id} className="flex py-5">
            <p className="text-xl">
                <span className="bg-blue p-1 font-medium">{props.name} :</span>
                <span className="font-normal"> {props.description}</span>
            </p>
		</div>
    )
}