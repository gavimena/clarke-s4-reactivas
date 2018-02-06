import React from 'react';

class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.editForm=this.editForm.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {
			editForm: false
}
	}

	editForm() {
		this.setState({editForm: !this.state.editForm})
	}

	handleDelete(event) {
      this.props.updatePreview("position", "");
			this.props.updatePreview("experience", "");
			this.props.updatePreview("montStart", "");
			this.props.updatePreview("year", "");
			this.props.updatePreview("monthEnd", "");
			this.props.updatePreview("year-end", "");
			this.props.updatePreview("actuality", "");
			this.refs.position.value = "";
			this.refs.experience.value = "";
			this.refs.montStart.value = "";
			this.refs.year.value = "";
			this.refs.monthEnd.value = "";
			this.refs.yearEnd.value = "";
			this.refs.actuality.value = "";
	}


	render(){
		return(
			<div className="experience section">
				<div className="info">
					<h2 className="section-title">Experiencia laboral</h2>
					<div className="section-buttons">
						<button type="button" className="form__button--edit" value="Editar" onClick={this.editForm}> { this.state.editForm? 'Cerrar':'Editar'}  </button>
					</div>
				</div>

				{ this.state.editForm === true ? <div id="content-experience" className="form__sectionContent">
					<div className="addMore">
						<div className="form__newItem">
							<div className="work">
								<input id="position" type="text" name="name" placeholder="Cargo" ref="position" />
								<input id="experience" type="text" name="name" placeholder="Empresa" ref="experience" />
								<div className="form__experience--startBlock">
									<label>Fecha de inicio</label>
									<div className="form__experience--startDate">
										<select className="month select" name="start-month" id="montStart" ref="montStart"></select>
										<select className="year select" name="start-year" id="year" ref="year"></select>
									</div>
								</div>
								<div className="form__experience--endBlock">
									<label>Fecha de fin</label>
									<div className="form__experience--endDate">
										<select className="month select" name="end-month" id="monthEnd" ref="monthEnd"></select>
										<select className="year select" name="end-year" id="yearEnd" ref="yearEnd"></select>
									</div>
								</div>

								<div className="form__experience--currentContainer">
									<label>Actualmente</label>
									<input className="form__experience--currentCheckbox" id="actuality" type="checkbox" value="" name="actual" ref="actuality" />
									<div className="buttonrelative">
										<img className="prueba_experience" src="images/more.png" alt="botonprueba" title="prueba" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<input type="button" value="Borrar" className="delete-profile form__button--saveDeleteClose" onClick={this.handleDelete}/>
				</div> :null }
			</div>
		);
	}
}

export default Experience;
