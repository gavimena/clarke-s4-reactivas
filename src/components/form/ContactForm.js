import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.editForm=this.editForm.bind(this);
		this.state = {
			editForm: false
}
	}

	handleChange(event) {
		this.props.updatePreview(event.target.id,event.target.value);
	}

	handleDelete(event) {
      this.props.updatePreview("telephone", "");
			this.props.updatePreview("email", "");
			this.refs.telephone.value = "";
			this.refs.email.value = "";
	}

	editForm() {
		this.setState({editForm: !this.state.editForm})
	}

	render(){
		return(
			<div className="contact-information section">
				<div className="info">
					<h2 className="section-title">Datos de contacto</h2>
					<div className="section-buttons">
						<button type="button" className="form__button--edit" value="Editar" onClick={this.editForm}> { this.state.editForm? 'Cerrar':'Editar'}  </button>
					</div>
				</div>
				{ this.state.editForm === true ? <div id="content-contact-info" className="form__sectionContent">
					<input type="tel" name="telephone" id="telephone" placeholder="Teléfono" onChange={this.handleChange} ref="telephone"/>
					<span className="error error_telephone"></span>
					<input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} ref="email"/>
					<span className="error error_email"></span>
					<input type="button" value="Borrar" className="delete-profile form__button--saveDeleteClose" onClick={this.handleDelete}/>
				</div> : null }
			</div>
		);
	}
}

export default Contact;
