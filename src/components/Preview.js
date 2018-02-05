import React from 'react';
import Profile from './preview/ProfilePrev';
import Summary from './preview/SummaryPrev';
import Contact from './preview/ContactPrev';
import Experience from './preview/ExperiencePrev';
import Additional from './preview/AdditionalPrev';


class Preview extends React.Component {

	render(){
		let visible = this.props.visible;
		let clase = (visible) ? 'preview__generalContainer' : 'preview__generalContainer--off';
		const selectedTheme = this.props.selectedTheme;

		return(
            <div className={`${clase} printPreview`} id="preview">
							<div className="preview__showContainer preview__container--padding">
								<img className="preview__button--hide" src="images/cancel.png" alt="boton cerrar" onClick={this.props.closePreview} />
								<Profile name={this.props.namePrev}  lastname= {this.props.surname}  profession={this.props.job} />
								<hr className={`line__top line__top--${selectedTheme}`} />
								<Summary summary={this.props.summary}/>
								<Contact selectedTheme={this.props.selectedTheme}/>
								<Experience selectedTheme={this.props.selectedTheme} />
								<Additional selectedTheme={this.props.selectedTheme} skills1={this.props.skills1} idlevel1={this.props.idlevel1}
									skills2={this.props.skills2} idlevel2={this.props.idlevel2}
									skills3={this.props.skills3} idlevel3={this.props.idlevel3}/>
							</div>
            </div>
        )
	}
}

export default Preview;
