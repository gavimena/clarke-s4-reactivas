import React from 'react';
import Profile from './form/ProfileForm';
import Summary from './form/SummaryForm';
import Contact from './form/ContactForm';
import Experience from './form/ExperienceForm';
import Additional from './form/AdditionalForm';
import Personalize from './form/PersonalizeForm';

class Form extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<form className="resume-form" action="/signup" method="post">

				<Profile updatePreview= {this.props.updatePreviewForm}/>
				<Summary />
				<Contact />
				<Experience />
				<Additional />
				<Personalize />
			</form>
		);
	}
}

export default Form;
