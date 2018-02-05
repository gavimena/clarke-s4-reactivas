import React from 'react';

class Additional extends React.Component {
	constructor(props){
		super(props);
		this.editForm=this.editForm.bind(this);
		this.handleChangeSkill=this.handleChangeSkill.bind(this);
		this.state = {
			editForm: false
}
	}

	editForm() {
		this.setState({editForm: !this.state.editForm})
	}

	handleChangeSkill(event) {
				 this.props.updatePreview(event.target.id,event.target.value);
	 }

	render(){
		return(
			<div className="additional section">
				<div className="info">
					<h2 className="section-title">Más información</h2>
					<div className="section-buttons">
						<button type="button" className="form__button--edit" value="Editar" onClick={this.editForm}> { this.state.editForm? 'Cerrar':'Editar'}  </button>
					</div>
				</div>

				{ this.state.editForm === true ? <div id="content-additional" className="form__sectionContent">
					<div className="addMore">
						<div className="form__newItem">
							<input className="education" type="text" name="education" placeholder="Estudios" />
							<input className="education_university" type="text" name="education_university" placeholder="Institucion" />
						</div>
					</div>

					<div className="addMore">
						<div className="form__newItem">
							<input className="languages" type="text" name="languages" placeholder="Idiomas" />
							<label for="level">Nivel</label>
							<select id="level" className="select level" name="level"></select>
						</div>
					</div>

					<div className="input-skill">
						<input type="text" id="skills1" className="skills" name="skills1" placeholder="Habilidad 1" onChange={this.handleChangeSkill}/>
						<input className="level_skills" id="idlevel1" type="text" name="level_skills1" placeholder="Nivel del 1 al 100" onChange={this.handleChangeSkill} />
						<input type="text" id="skills2" className="skills" name="skills2" placeholder="Habilidad 2" onChange={this.handleChangeSkill}/>
						<input className="level_skills" id="idlevel2" type="text" name="level_skills2" placeholder="Nivel del 1 al 100" onChange={this.handleChangeSkill}/>
						<input type="text" id="skills3" className="skills" name="skills3" placeholder="Habilidad 3" onChange={this.handleChangeSkill}/>
						<input className="level_skills" id="idlevel3" type="text" name="level_skills3" placeholder="Nivel del 1 al 100" onChange={this.handleChangeSkill}/>
					</div>
					<div className="addMore">
						<div className="form__newItem">
							<input id="interest" type="text" name="interest" placeholder="Intereses" />
						</div>
					</div>
					<input type="button" name="delete" value="Borrar" className="delete-additional form__button--saveDeleteClose" />
				</div> : null }
			</div>

		);
	}
}

export default Additional;
