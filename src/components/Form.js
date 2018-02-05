import React from 'react';
import Profile from './form/ProfileForm';
import Summary from './form/SummaryForm';
import Contact from './form/ContactForm';
import Experience from './form/ExperienceForm';
import Additional from './form/AdditionalForm';
import Personalize from './form/PersonalizeForm';


class Form extends React.Component {


	// constructor(prosps) {
	// 	super(props);
	// 	this.editDivState=this.editDivState.bind(this);
	// }

	// editDivState(key,value){
	// 	const showEditDiv = {};
	// 	showEditDiv[key] = value;
	// 	this.setState(showEditDiv);
	// }

	render(){
		return(
			<form className="resume-form" action="/signup" method="post">
				<Profile scroll={this.props.scroll} updatePreview= {this.props.updatePreviewForm}	/>
				<Summary updatePreview= {this.props.updatePreviewForm} />
				<Contact updatePreview= {this.props.updatePreviewForm} />
				<Experience />
				<Additional />
				<Personalize />
			</form>
		);
	}
}

export default Form;
