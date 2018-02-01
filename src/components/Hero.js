import React from 'react';

class Hero extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="cover">
				<div className="create">
					<h1>Crea tu propio CV</h1>
					<a href="#empezar" className="scroll" data-speed="1000">Empezar</a>
				</div>
			</div>
		)
	}
}

export default Hero;
