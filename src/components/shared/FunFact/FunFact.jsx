import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import ActionButton from '../ActionButton/ActionButton';
import NavButton from '../NavButton/NavButton';
import Styles from './styles';

const FunFact = () => {

	const [funFact, setFunFact] = useState([])
	const [index, setIndex] = useState(0)

	var funFacts = [
		'"I have a ligament from my leg holding my scapula in place"',
		'"I got my undergraduate degree writing a dissertation on General Relativity"',
		'"I start coding when I was 14 years old "',
		'"I do rock climbing regularly, yet I am afraid of heights"',
		'"I have diched an summer trip to stay home playing WoW for a week"'
	]

		
	const nextFact = () => {
	setFunFact(funFacts[index])
	setIndex((index+1)%(funFacts.length+1))
	// console.log(funFacts)
	console.log(index)
	}

	return (
		<Styles.Container className="d-flex flex-column ">
			<h1 className="m-5 text-center">Fun Facts </h1>

			<Container className="d-flex ">
				<ActionButton className='m-auto' label="Fun Fact" action={nextFact} />
				<Card body className="m-auto">{index ? funFact : 'Four facts are true one is false ' }</Card>

			</Container>
			<Container className="mt-auto d-flex justify-content-center">
				<h5 className='mr-3' >Check the answer In the About page</h5>
				<NavButton className="" linkTo="/about" label="About "/>
				

			</Container>


		</Styles.Container>
	);
}

export default FunFact;