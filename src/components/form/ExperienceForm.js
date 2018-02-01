import React from 'react';

class Experience extends React.Component {
	render(){
		return(
			<div className="experience section">
				<div className="info">
					<h2 className="section-title">Experiencia laboral</h2>
					<div className="section-buttons">
						<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-experience')" />
					</div>
				</div>

				<div id="content-experience" className="form__sectionContent">
					<div className="addMore">
						<div className="form__newItem">
							<div className="work">
								<input id="position" type="text" name="name" placeholder="Cargo" />
								<input id="experience" type="text" name="name" placeholder="Empresa" />
								<div className="form__experience--startBlock">
									<label>Fecha de inicio</label>
									<div className="form__experience--startDate">
										<select className="month select" name="start-month" id="month-start"></select>
										<select className="year select" name="start-year" id="year"></select>
									</div>
								</div>
								<div className="form__experience--endBlock">
									<label>Fecha de fin</label>
									<div className="form__experience--endDate">
										<select className="month select" name="end-month" id="month-end"></select>
										<select className="year select" name="end-year" id="year-end"></select>
									</div>
								</div>

								<div className="form__experience--currentContainer">
									<label>Actualmente</label>
									<input className="form__experience--currentCheckbox" id="actuality" type="checkbox" value="" name="actual" />
									<div className="buttonrelative">
										<img className="prueba_experience" src="images/more.png" alt="botonprueba" title="prueba" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<input type="button" name="save" value="Guardar" className="saveExperience form__button--saveDeleteClose" />
					<input type="button" name="delete" value="Borrar" className="delete-experience form__button--saveDeleteClose" />
					<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-experience')" />
				</div>
			</div>
		);
	}
}

export default Experience;
