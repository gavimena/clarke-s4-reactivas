import React from 'react';

class Contact extends React.Component {
	render(){
		return(
			<div className="preview__section preview__container--padding">
				<div className="preview__section__title">
					<div className="titles preview__container--padding"><h3 className="preview__section--h">Datos de contacto</h3>
					</div>
					<hr className="line__bottom" />
				</div>
				<div className="preview__container--padding">
					<span className="preview__section__subtitle">Teléfono:</span><span id="data-telephone">{this.props.telephone}</span>
				</div>
				<div className="preview__container--padding">
					<span className="preview__section__subtitle">Email:</span> <span id="data-email">{this.props.email}</span>
				</div>
			</div>
		);
	}
}

export default Contact;
