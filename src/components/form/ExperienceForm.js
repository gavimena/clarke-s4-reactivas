import React from 'react';
import add from '../../images/more.png';

class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.editForm= this.editForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			editForm: false, 
			job: {position: '',
					company: '',
					monthStart: '',
					monthEnd: '',
					yearStart: '',
					yearEnd: ''
				},
		}
	}

	editForm() {
		this.setState({editForm: !this.state.editForm})
	}

	handleChange(event) {
		this.props.updatePreview(event.target.id, event.target.value);
   }

	render(){
		let yearOptions = [];
		let currentDate = new Date();
		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth();

		for (let i = currentYear; i >= currentYear-30; i--) {
				yearOptions.push(<option value={i}>{i}</option>);
		}

		let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
								  'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
							     'Noviembre', 'Diciembre'];
		let monthOptions = [];
		for (let i = 0; i < months.length; i++) {
				monthOptions.push(<option value={months[i]}>{months[i]}</option>);
		}

		return(
			<div className="experience section">
				<div className="info">
					<h2 className="section-title">Experiencia laboral</h2>
					<div className="section-buttons">
						<button type="button" className="form__button--edit" value="Editar" onClick= {this.editForm}> { (this.state.editForm) ? 'Cerrar' : 'Editar'}  </button>
					</div>
				</div>

				{ this.state.editForm === true ? <div id="content-experience" className="form__sectionContent">
					<div className="addMore">
						<div className="form__newItem">
							<div className="work">
								<input id="position" type="text" name="name" placeholder="Cargo" onChange={this.handleChange}/>
								<input id="company" type="text" name="name" placeholder="Empresa" onChange={this.handleChange}/>
								<div className="form__experience--startBlock">
									<label>Fecha de inicio</label>
									<div className="form__experience--startDate">
										<select className="month select" name="start-month" id="monthStart" onChange={this.handleChange}>
											<option value="">-Mes-</option>
											{monthOptions}
										</select>
										<select className="year select" name="start-year" id="yearStart" onChange={this.handleChange}>
											<option value="">-Año-</option>
											{yearOptions}
										</select>
									</div>
								</div>
								<div className="form__experience--endBlock">
									<label>Fecha de fin</label>
									<div className="form__experience--endDate">
										<select className="month select" name="end-month" id="monthEnd" onChange={this.handleChange}>
											<option value="">-Mes-</option>
											{monthOptions}
										</select>
										<select className="year select" name="end-year" id="yearEnd" onChange={this.handleChange}>
											<option value="">-Año-</option>
											{yearOptions}
										</select>
									</div>
								</div>

								<div className="form__experience--currentContainer">
									<label>Actualmente</label>
									<input className="form__experience--currentCheckbox" id="actuality" type="checkbox" value="" name="actual" />
									<div className="buttonrelative">
										<img className="prueba_experience" src={add} alt="botonprueba" title="prueba" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<input type="button" name="delete" value="Borrar" className="delete-experience form__button--saveDeleteClose" />
				</div> :null }
			</div>
		);
	}
}

export default Experience;
