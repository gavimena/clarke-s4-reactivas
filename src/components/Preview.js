import React from 'react';
import Profile from './preview/ProfilePrev';
import Summary from './preview/SummaryPrev';
import Contact from './preview/ContactPrev';
import Experience from './preview/ExperiencePrev';
import Additional from './preview/AdditionalPrev';


class Preview extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="preview__generalContainer printPreview" id="preview">
				<div className="preview__showContainer preview__container--padding">
					<img className="preview__button--hide" src="images/cancel.png" alt="boton cerrar" onclick="cerrar('preview')" />
					<Profile />
					<hr className="line__top" />
					<Summary />
					<Contact />
					<Experience />
					<Additional />
				</div>
			</div>
		)
	}
}

export default Preview;
