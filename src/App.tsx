// Components
import Infos from './components/infos/Infos';
import Header from './components/header/Header';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';
// import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


export default function App() {

	return (

		<div>
			
			<Infos />
			<Header />
			{/* <AboutMe />
			<Skills />
			<Experiences /> */}
			{/* <Projects /> */}
			<Contact />

			<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  			<script>AOS.init();</script>

		</div>
	);
}

