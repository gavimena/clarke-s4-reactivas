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
					<button onClick={this.props.scroll}><a href="" className="main__cover__create__link" >Empezar</a></button>
				</div>
			</div>
		)
	}
}

export default Hero;
