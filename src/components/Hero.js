import React from 'react';

class Hero extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="main__cover">
				<div className="main__cover__create">
					<h1 className="main__cover__create__title">Crea tu propio CV</h1>
					<a href="#empezar" className="main__cover__create__link" data-speed="1000">Empezar</a>
				</div>
			</div>
		)
	}
}

export default Hero;
