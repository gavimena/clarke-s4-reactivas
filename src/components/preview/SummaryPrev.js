import React from 'react';

class Summary extends React.Component {
	render(){
		return(
			<div className="resume__header__summary preview__container--padding">
				<span id="data-summary">{this.props.summary}</span>
			</div>
		);
	}
}
export default Summary;
