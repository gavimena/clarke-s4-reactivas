import React from 'react';

class Experience extends React.Component {
	render(){
		return(
			<div className="preview__section preview__container--padding">
				<div className="preview__section__title preview__container--padding">
					<div className="titles preview__container--padding"><h3 className="preview__section--h">Experiencia laboral</h3></div>
					<hr className="line__bottom" />
				</div>
				<div className="preview__container--padding">
					<ul id="data-position" className="preview__experience--position">{this.props.position}{this.props.company}{this.props.monthStart}{this.props.yearStart}{this.props.monthEnd}{this.props.yearEnd}</ul>
				</div>
			</div>
		);
	}
}

export default Experience;
