// Data
import projectsDataProps from './interface';


export default function Card(props: projectsDataProps) {

    return (
        <>
        <div key={props.id}>
			<h3>
				{props.name}
			</h3>
			<p>
				{props.description}
			</p>
            <p>
				{props.link}
			</p>
            <p>
                {props.technos}
            </p>
		</div>
        </>
    )
}
