// Data
import contents from './content-contact';

// Components
import Links from './Links';


export default function Contact() {

    return (

        <section className="w-full h-auto p-12 pt-16">

            <h2 className="text-4xl pb-7 font-semibold">
                Vous pouvez me contacter via...
            </h2>

            {contents.map(contents => (
                    <Links 
                        id={contents.id}
                        name={contents.name}
                        link={contents.link}
                        value={contents.value}
                        target={contents.target}
                    />
                ))}

        </section>
    )
}
