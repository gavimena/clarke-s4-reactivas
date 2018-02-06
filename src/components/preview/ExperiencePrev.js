import React from 'react';

class Experience extends React.Component {
	render(){
		const selectedTheme = this.props.selectedTheme;
		const jobList = this.props.jobList || [];
		return(
			<div className="preview__section preview__container--padding">
				<div className="preview__section__title preview__container--padding">
					<div className={`titles titles--${selectedTheme} preview__container--padding`}><h3 className="preview__section--h">Experiencia laboral</h3></div>
					{jobList.map((job, index) => {
						return(
							<div className="preview__container--padding">
								<ul id="data-position" className="preview__experience--position">
									<li>{job.position}</li>
									<li>{job.company}</li>
									<li>{job.monthStart} {`-`} {job.yearStart}</li>
									<li>{job.monthEnd} {`-`} {job.yearEnd}</li>
								</ul>
								<hr className={`line__bottom line__bottom--${selectedTheme}`}/>
							</div>);
					})}

				</div>
			</div>
		);
	}
}

export default Experience;
