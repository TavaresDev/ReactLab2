import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import ActionButton from '../ActionButton/ActionButton';
// import Styles from './styles';



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
		<Container>
			<h1 className="m-5 text-center">Fun Facts </h1>
			{/* <h4 className="m-5 text-center">{funFacts.length -1} Facts are true 1 is false </h4> */}



			<Container className="d-flex ">
				<ActionButton className='m-auto' label="Fun Fact" action={nextFact} />
				<Card body className="m-auto">{index ? funFact : 'Four facts are true one is false ' }</Card>

			</Container>


		</Container>
	);
}

export default FunFact;