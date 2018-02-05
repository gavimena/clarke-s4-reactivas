import React from 'react';
import Profile from './preview/ProfilePrev';
import Summary from './preview/SummaryPrev';
import Contact from './preview/ContactPrev';
import Experience from './preview/ExperiencePrev';
import Additional from './preview/AdditionalPrev';
import cancel from '../images/cancel.png'

class Preview extends React.Component {

	render(){
		let visible = this.props.visible;
		let clase = (visible) ? 'preview__generalContainer' : 'preview__generalContainer--off';
		const selectedTheme = this.props.selectedTheme;

		return(
            <div className={`${clase} printPreview`} id="preview">
					<div className="preview__showContainer preview__container--padding">
						<img className="preview__button--hide" src={cancel} alt="boton cerrar" onClick={this.props.closePreview} />
						<Profile submit={this.props.submit} imagePreviewUrl={this.props.imagePreviewUrl} name={this.props.namePrev}  lastname= {this.props.surname}  profession={this.props.job} />
						<hr className={`line__top line__top--${selectedTheme}`} />
						<Summary summary={this.props.summary}/>
						<Contact telephone={this.props.phone} email={this.props.mail} selectedTheme={this.props.selectedTheme} />
						<Experience selectedTheme={this.props.selectedTheme}
							position={this.props.position}
							company={this.props.company}
							monthStart={this.props.monthStart}
							yearStart={this.props.yearStart}
							monthEnd={this.props.monthEnd}
							yearEnd={this.props.yearEnd}/>
						<Additional selectedTheme={this.props.selectedTheme}
							studies={this.props.studies}
							school={this.props.school}
							language={this.props.language}
							languagelevel={this.props.languagelevel}
							skills1={this.props.skills1} idlevel1={this.props.idlevel1}
							skills2={this.props.skills2} idlevel2={this.props.idlevel2}
							skills3={this.props.skills3} idlevel3={this.props.idlevel3}
							interest={this.props.interest}/>
					</div>
            </div>
        )
	}
}

export default Preview;
