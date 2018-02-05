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
		this.state = {
			jobList: []
		}
}
	render(){
		return(
			<form className="resume-form" action="/signup" method="post">
				<Profile scroll={this.props.scroll} updatePreview= {this.props.updatePreviewForm} submit={this.props.submit} imageChange={this.props.imageChange} />
				<Summary updatePreview= {this.props.updatePreviewForm} />
				<Contact updatePreview= {this.props.updatePreviewForm} />
				<Experience updatePreview= {this.props.updatePreviewForm}/>
				<Additional />
				<Personalize />
			</form>
		);
	}
}

export default Form;
