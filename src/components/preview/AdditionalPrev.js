import React from 'react';

class Additional extends React.Component {
	render(){
		const selectedTheme = this.props.selectedTheme;

		return(
			<div className="preview__section preview__container--padding">
				<div className="preview__section__title preview__container--padding">
					<div className={`titles titles--${selectedTheme} preview__container--padding`}><h3 className="preview__section--h">Más información</h3></div>
					<hr className={`line__bottom line__bottom--${selectedTheme}`}/>
				</div>
				<div className="preview__container--padding">
					<span className="preview__section__subtitle">Estudios:</span> <br />
					<ul id="data-studies" className="preview__data__studies">{this.props.studies}
						<br />
						{this.props.school}</ul>
				</div>
				<div className="preview__container--padding">
					<span className="preview__section__subtitle">Idiomas:</span>
					<ul className="preview__data__languages"></ul>
				</div>

				<div className="skill_container preview__container--padding">
					<span className="preview__section__subtitle">Habilidades:</span>
					<div className="barSkillsSection preview__container--padding">
						<div className="preview__levelSkill preview__container--padding" style={{ width: `${this.props.idlevel1}%` }}>
							<p id="skillName1" className="preview__data__skillName">{this.props.skills1}</p>
						</div>
					</div>
					<div className="barSkillsSection preview__container--padding">
						<div className="preview__levelSkill preview__container--padding"  style={{ width: `${this.props.idlevel2}%` }}>
							<p id="skillName2" className="preview__data__skillName">{this.props.skills2}</p>
						</div>
					</div>
					<div className="barSkillsSection preview__container--padding">
						<div className="preview__levelSkill preview__container--padding"  style={{ width: `${this.props.idlevel3}%` }}>
							<p id="skillName3" className="preview__data__skillName">{this.props.skills3}</p>
						</div>
					</div>
				</div>
				<div className="preview__container--padding">
						<span className="preview__section__subtitle">Intereses:</span>
						<ul className={`preview__data__interest preview__data__interest--${selectedTheme}`}>{this.props.interest}</ul>
				</div>
			</div>
		);
	}
}

export default Additional;
