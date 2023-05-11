// React
import { Routes, Route } from "react-router-dom";

// Components
import Infos from './components/infos/Infos';
import Header from './components/header/Header';

// Pages
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import Education from "./components/education/Education";
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';



export default function App() {

	return (

		<div>
			<Infos />
			<Header />

			<Routes>
				<Route path="/" element={<AboutMe />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/skills" element={<Skills />}></Route>
				<Route path="/formations" element={<Education />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
            </Routes>
		</div>

	)
}
