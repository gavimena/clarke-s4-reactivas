import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleButtonDelete = this.handleButtonDelete.bind(this);
		this.editForm=this.editForm.bind(this);
		this.state = {
			editForm: false
}
	}

	handleChange(event) {
		this.props.updatePreview(event.target.id,event.target.value);
	}

	handleButtonDelete (event){
		this.props.onClickListener(event.target.value);
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
					<input type="tel" name="telephone" id="telephone" placeholder="Teléfono" onChange={this.handleChange} />
					<span className="error error_telephone"></span>
					<input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
					<span className="error error_email"></span>
					<button onReset={this.handleButtonDelete} name="delete" value="Borrar" className="delete-contact form__button--saveDeleteClose">Borrar</button>
				</div> : null }
			</div>
		);
	}
}

export default Contact;
