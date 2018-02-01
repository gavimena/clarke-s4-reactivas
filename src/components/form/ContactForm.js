import React from 'react';

class Contact extends React.Component {
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
					<input type="tel" name="telephone" id="telephone" placeholder="Teléfono" />
					<span className="error error_telephone"></span>
					<input type="email" name="email" id="email" placeholder="Email" />
					<span className="error error_email"></span>
					<input type="button" name="save" value="Guardar" className="saveContact form__button--saveDeleteClose" />
					<input type="button" name="delete" value="Borrar" className="delete-contact form__button--saveDeleteClose" />
					<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-contact-info')" />
				</div>
			</div>
		);
	}
}

export default Contact;
