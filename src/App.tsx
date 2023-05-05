// Components
import Header from './components/Header'
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';

// Icons
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'

// library.add()

export default function App() {

	return (
		<>
		<Header />
		<Presentation />
		<Skills />
		<Experiences />
		<Projects />
		<Contact />
		</>
  );
}

