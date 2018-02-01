import React from 'react';

class Personalize extends React.Component {
	render(){
		return(
			<div className="personalize section">
				<div className="info">
					<h2 className="section-title">Personaliza tu CV</h2>
					<div className="form__container--colorButtons">
						<input className="form__colorButton button_green" type="button" data-theme-className="theme1" value="" />
						<input className="form__colorButton button_purple" type="button" data-theme-className="theme2" value="" />
						<input className="form__colorButton button_yellow" type="button" data-theme-className="theme3" value="" />
						<input className="form__colorButton button_blue" type="button" data-theme-className="theme4" value="" />
					</div>
				</div>
			</div>
		);
	}
}

export default Personalize;
