import React from 'react';
import user from '../../images/user.svg';

class Profile extends React.Component {
	render(){
		return(
			<div className="printPreview preview__container--print preview__container--padding" id="preview2">



				{ this.props.imagePreviewUrl === '' ? <img className="preview__photoLoad" src={user} /> : <img className="preview__photoLoad" src={this.props.imagePreviewUrl} />}
				<div className="preview__nameJob_column">
					<div className="resume-header preview__container--padding">
						<h2 className="resume__title" id="data-profile">{this.props.name}   {this.props.lastname}</h2>
					</div>
					<span className="resume__header__profession" id="data-profession">{this.props.profession}</span>
				</div>
			</div>
					);
					}
					}
					export default Profile;
