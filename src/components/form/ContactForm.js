import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {

	constructor(props){
   super(props);
   this.handleChange = this.handleChange.bind(this);
	 this.handleButtonDelete = this.handleButtonDelete.bind(this);
 }

 	handleChange(event) {
		this.props.updatePreview(event.target.id,event.target.value);
	}

	handleButtonDelete (event){
		this.props.onClickListener(event.target.value);
	}

	render(){
		return(
			<div className="contact-information section">
				<div className="info">
					<h2 className="section-title">Datos de contacto</h2>
					<div className="section-buttons">
						<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-contact-info')"/>
					</div>
				</div>
				<div id="content-contact-info" className="form__sectionContent">
					<input type="tel" name="telephone" id="telephone" placeholder="Teléfono" onChange={this.handleChange} />
					<span className="error error_telephone"></span>
					<input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
					<span className="error error_email"></span>
					<button onReset={this.handleButtonDelete} name="delete" value="Borrar" className="delete-contact form__button--saveDeleteClose">Borrar</button>
				</div>
			</div>
		);
	}
}

export default Contact;
