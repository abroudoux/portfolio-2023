// Data
import contents from './content-contact';

// Components
import Links from './Links';


export default function Contact() {

    return (

        <section className="w-full h-auto px-5 md:p-12 pt-5 md:pt-16 lg:pr-128">

            <div>
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
            </div>

            <div className="mt-12">
                <h2 className="text-3xl py-7 font-medium">
                    Merci beaucoup d'être parvenu jusque ici !
                </h2>

                <p className="text-xl py-5 font-normal leading-10">
                    Comme vous avez du le comprendre, je suis à la recherche d'une alternance en développement web à partir de Septembre 2023
                    <br/>
                    Si vous êtes intéressés ou que quelqu'un de votre entourage est à la recherche d'un profil comme le mien, n'hésitez pas à leur partager mon travail, cela m'aiderait beaucoup!
                    <br/>
                    <br/>
                    <span className="bg-blue p-1 font-medium"> MERCI !</span><span className="ml-4 text-lg font-light">Et peut-être à bientôt ?</span>
                </p>
            </div>

        </section>
    )
}
