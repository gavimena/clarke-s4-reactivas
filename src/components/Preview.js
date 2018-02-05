import React from 'react';
import Profile from './preview/ProfilePrev';
import Summary from './preview/SummaryPrev';
import Contact from './preview/ContactPrev';
import Experience from './preview/ExperiencePrev';
import Additional from './preview/AdditionalPrev';
import cancel from '../images/cancel.png';


class Preview extends React.Component {
	constructor(props){
		super(props);

	}

	render(){
		let visible = this.props.visible;
		let clase = (visible) ? 'preview__generalContainer' : 'preview__generalContainer--off';

		return(
            <div className={`${clase} printPreview`} id="preview">
							<div className="preview__showContainer preview__container--padding">
								<img className="preview__button--hide" src={cancel} alt="boton cerrar" onClick={this.props.closePreview} />
								<Profile submit={this.props.submit} imagePreviewUrl={this.props.imagePreviewUrl} name={this.props.namePrev}  lastname= {this.props.surname}  profession={this.props.job} />
								<hr className="line__top" />
								<Summary summary={this.props.summary}/>
								<Contact telephone={this.props.phone} email={this.props.mail} />
								<Experience />
								<Additional />
							</div>
            </div>
        )
	}
}

export default Preview;
