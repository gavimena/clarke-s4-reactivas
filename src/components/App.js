import React from 'react';
import '../scss/main.css'

class App extends React.Component {
	render() {
		return (
			<div className="overflow">
			<header className="header">
			<a href="#home"><img src="images/Mediaqueers.png" className="logo--header" alt="logo-header__menu" /></a>
			<nav>
			<ul className="header__menu list">
			<li className="header__menu__item header__menu__section"><a className="header__menu__section--link" href="#home">Home</a></li>
			<li className="header__menu__item header__menu__item--vista header__menu__section"><a className="header__menu__section--link" href="#vista" onclick="vistaPrevia('preview')">Vista previa</a></li>
			<li className="header__menu__item__print"  onclick="printCurriculum()" id="btnprint" title="Imprimir"></li>
			</ul>
			</nav>
			</header>

			<main>
			<div className="cover">
			<div className="create">
			<h1>Crea tu propio CV</h1>
			<a href="#empezar" className="scroll" data-speed="1000">Empezar</a>
			</div>
			</div>

			<div className="resume-container" id="empezar">
			<div className="split-div">
			<form className="resume-form" action="/signup" method="post">

			<div className="profile section">
			<div className="info">
			<h2 className="section-title">Perfil</h2>
			<div className="section-buttons">
			<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-profile')" />
			</div>
			</div>

			<div id="content-profile" className="form__sectionContent">
			<input type="text" name="name" id="name" placeholder="Nombre" />
			<input type="text" name="lastname" id="lastname" placeholder="Apellidos" />
			<input type="text" name="profession" id="profession" placeholder="Profesión" />
			<input type="button" name="save" className="saveProfile form__button--saveDeleteClose" value="Guardar" />
			<input type="button" name="delete" value="Borrar" className="delete-profile form__button--saveDeleteClose" />
			<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-profile')" />
			</div>
			</div>

			<div className="summary section">
			<div className="info">
			<h2 className="section-title">Extracto</h2>
			<div className="section-buttons">
			<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-summary')" />
			</div>
			</div>

			<div id="content-summary" className="form__sectionContent">
			<textarea name="summary" id="summary" className="form__textarea--summary" rows="8" cols="80" placeholder="Introduce una pequeña descripción"></textarea>
			<input type="button" name="save" value="Guardar" className="saveSumary form__button--saveDeleteClose" />
			<input type="button" name="delete" value="Borrar" className="delete-summary form__button--saveDeleteClose" />
			<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-summary')" />
			</div>
			</div>

			<div className="contact-information section">
			<div className="info">
			<h2 className="section-title">Datos de contacto</h2>
			<div className="section-buttons">
			<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-contact-info')"/>
			</div>
			</div>
			<div id="content-contact-info" className="form__sectionContent">
			<input type="tel" name="telephone" id="telephone" placeholder="Teléfono" />
			<span className="error error_telephone"></span>
			<input type="email" name="email" id="email" placeholder="Email" />
			<span className="error error_email"></span>
			<input type="button" name="save" value="Guardar" className="saveContact form__button--saveDeleteClose" />
			<input type="button" name="delete" value="Borrar" className="delete-contact form__button--saveDeleteClose" />
			<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-contact-info')" />
			</div>
			</div>

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


			<div className="personalize section">
			<div className="info">
			<h2 className="section-title">Personaliza tu CV</h2>
			<div className="form__container--colorButtons">
			<input className="form__colorButton button_green" type="button" data-theme-className="theme1" value="" />
			<input className="form__colorButton button_purple" type="button" data-theme-className="theme2" value="" />
			<input className="form__colorButton button_yellow" type="button" data-theme-className="theme3" value="" />
			<input className="form__colorButton button_blue" type="button" data-theme-className="theme4" value="" />
			</div>
			</div>
			</div>
			</form>

			<div className="preview__generalContainer printPreview" id="preview">
			<div className="preview__showContainer preview__container--padding">
			<img className="preview__button--hide" src="images/cancel.png" alt="boton cerrar" onclick="cerrar('preview')" />

			<div className="printPreview preview__container--print preview__container--padding" id="preview2">
			<div className="resume-header preview__container--padding">
			<h2 className="resume__title" id="data-profile"></h2>
			</div>

			<div className="resume__header__profession preview__container--padding">
			<span id="data-profession"></span>
			</div>
			<hr className="line__top" />
			<div className="resume__header__summary preview__container--padding">
			<span id="data-summary"></span>
			</div>

			<div className="preview__section preview__container--padding">
			<div className="preview__section__title">
			<div className="titles preview__container--padding"><h3 className="preview__section--h">Datos de contacto</h3></div>
			<hr className="line__bottom" />
			</div>
			<div className="preview__container--padding">
			<span className="preview__section__subtitle">Teléfono:</span> <span id="data-telephone"></span>
			</div>
			<div className="preview__container--padding">
			<span className="preview__section__subtitle">Email:</span> <span id="data-email"></span>
			</div>
			</div>

			<div className="preview__section preview__container--padding">
			<div className="preview__section__title preview__container--padding">
			<div className="titles preview__container--padding"><h3 className="preview__section--h">Experiencia laboral</h3></div>
			<hr className="line__bottom" />
			</div>
			<div className="preview__container--padding">
			<ul id="data-position" className="preview__experience--position"></ul>
			</div>
			</div>

			<div className="preview__section preview__container--padding">
			<div className="preview__section__title preview__container--padding">
			<div className="titles preview__container--padding"><h3 className="preview__section--h">Más información</h3></div>
			<hr className="line__bottom" />
			</div>
			<div className="preview__container--padding">
			<span className="preview__section__subtitle">Estudios:</span> <br />
			<ul id="data-studies" className="preview__data__studies"></ul>
			</div>
			<div className="preview__container--padding">
			<span className="preview__section__subtitle">Idiomas:</span>
			<ul className="preview__data__languages"></ul>
			</div>

			<div className="skill_container preview__container--padding">
			<span className="preview__section__subtitle">Habilidades:</span>
			<div className="barSkillsSection preview__container--padding">
			<div className="preview__levelSkill preview__container--padding">
			<p id="skillName1" className="preview__data__skillName"></p>
			</div>
			</div>
			<div className="barSkillsSection preview__container--padding">
			<div className="preview__levelSkill preview__container--padding">
			<p id="skillName2" className="preview__data__skillName"></p>
			</div>
			</div>
			<div className="barSkillsSection preview__container--padding">
			<div className="preview__levelSkill preview__container--padding">
			<p id="skillName3" className="preview__data__skillName"></p>
			</div>
			</div>
			</div>

			<div className="preview__container--padding">
			<span className="preview__section__subtitle">Intereses:</span>
			<ul className="preview__data__interest"></ul>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</main>

			<footer className="footer">
			<div className="footer__items">
			<img src="images/Mediaqueers.png" className="footer__logo"  alt="logo" />
			<p> &copy; 2017 </p>
			</div>

			<div className="footer_items">
			<p>¿Dónde estamos? </p>
			<div className="footer__map"> <iframe className="footer__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8243883784326!2d-3.708031684604198!3d40.412740979365644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d58772a6e1%3A0xf3b5fc75d6a7b133!2sutopic_US!5e0!3m2!1ses!2ses!4v1511432618667" width="400" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
			</div>
			</div>

			<div className="footer__items">
			<div className="footer__questions">
			<a className="footer__link" href="formulario.html" target="_blank" className="main__form">¿Qué tal lo hemos hecho?</a>
			<span className="footer__pencil"><a href="formulario.html" target="_blank" className="main__form"><img src="images/writing.png" alt="dibujo hoja lapiz" /></a></span>
			</div>
			</div>
			</footer>
			</div>
		);
	}
}

export default App;
