import React from 'react';

class Personalize extends React.Component {

	constructor(props){
   super(props);
   this.handleClickColorButton = this.handleClickColorButton.bind(this);
 }

	handleClickColorButton(e) {
		this.props.updateThemeState(e.target.dataset.myTheme);
   }

	render(){
		return(
			<div className="personalize section">
				<div className="info">
					<h2 className="section-title">Personaliza tu CV</h2>
					<div className="form__container--colorButtons">
						<input className="form__colorButton button_green" type="button" data-my-theme ="theme1" onClick={this.handleClickColorButton}/>
						<input className="form__colorButton button_purple" type="button" data-my-theme ="theme2" onClick={this.handleClickColorButton}/>
						<input className="form__colorButton button_yellow" type="button" data-my-theme ="theme3" onClick={this.handleClickColorButton} />
						<input className="form__colorButton button_blue" type="button" data-my-theme ="theme4" onClick={this.handleClickColorButton} />
					</div>
				</div>
			</div>
		);
	}
}

export default Personalize;
