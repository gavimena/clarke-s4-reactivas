import React from 'react';

class Additional extends React.Component {
	render(){
		return(
			<div className="additional section">
				<div className="info">
					<h2 className="section-title">Más información</h2>
					<div className="section-buttons">
						<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-additional')" />
					</div>
				</div>

				<div id="content-additional" className="form__sectionContent">
					<div className="addMore">
						<div className="form__newItem">
							<input className="education" type="text" name="education" placeholder="Estudios" />
							<input className="education_university" type="text" name="education_university" placeholder="Institucion" />
							<img className="prueba" src="images/more.png" alt="botonprueba" title="prueba" />
						</div>
					</div>

					<div className="addMore">
						<div className="form__newItem">
							<input className="languages" type="text" name="languages" placeholder="Idiomas" />
							<label for="level">Nivel</label>
							<select id="level" className="select level" name="level"></select>
							<img className="prueba_language" src="images/more.png" alt="botonprueba" title="prueba" />
						</div>
					</div>

					<div className="input-skill">
						<input type="text" id="skills1" className="skills" name="skills1" placeholder="Habilidad" />
						<input className="level_skills" type="text" name="level_skills1" value="" placeholder="Nivel del 1 al 100" />
						<input type="text" id="skills2" className="skills" name="skills2" placeholder="Habilidad" />
						<input className="level_skills" type="text" name="level_skills2" value="" placeholder="Nivel del 1 al 100" />
						<input type="text" id="skills3" className="skills" name="skills3" placeholder="Habilidad" />
						<input className="level_skills" type="text" name="level_skills3" value="" placeholder="Nivel del 1 al 100" />
					</div>
					<div className="addMore">
						<div className="form__newItem">
							<input id="interest" type="text" name="interest" placeholder="Intereses" />
							<img className="prueba_interest" src="images/more.png" alt="botonprueba" title="prueba" />
						</div>
					</div>
					<input type="button" name="save" value="Guardar" className="saveMore form__button--saveDeleteClose" />
					<input type="button" name="delete" value="Borrar" className="delete-additional form__button--saveDeleteClose" />
					<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-additional')" />
				</div>
			</div>

		);
	}
}

export default Additional;
