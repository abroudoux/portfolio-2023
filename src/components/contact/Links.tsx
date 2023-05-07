// Interface
interface contactDataProps {
    id: number,
    name: string,
    value: string,
    link: string,
    target: string,
};


export default function Links(props: contactDataProps) {

    return (

        <div key={props.id} className="flex py-5">
			<p className="text-xl">
				<span className="bg-blue p-1 font-medium hover:cursor-pointer ">{props.name} :</span>
                <span className="font-normal hover:cursor-pointer "><a href={props.link} target={props.target} className="underline"> {props.value}</a></span>
			</p>
		</div>
    )
}