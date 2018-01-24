import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/main.css';

class App extends Component {
	render() {
		return (
			<div className="overflow">
			<header className="header">
			<a href="#home"><img src="/src/images/Mediaqueers.png" className="logo--header" alt="logo-header__menu" /></a>
			<nav>
			<ul className="header__menu list">
			<li className="header__menu__item header__menu__section"><a className="header__menu__section--link" href="#home">Home</a></li>
			<li className="header__menu__item header__menu__item--vista header__menu__section"><a className="header__menu__section--link" href="#vista" onclick="vistaPrevia('preview')">Vista previa</a></li>
			<li className="header__menu__item__print"  onclick="printCurriculum()" id="btnprint" title="Imprimir"></li>
			</ul>
			</nav>
			</header>

			<main>
			<div className="main__cover">
			<div className="main__cover__create">
			<h1 className="main__cover__create__title">Crea tu propio CV</h1>
			<a className="main__cover__create__link scroll" href="#empezar" data-speed="1000">Empezar</a>
			</div>
			</div>

			<div className="main__resumeContainer" id="empezar">
			<div className="split-div">
			<form className="main__resumeContainer__form" action="/signup" method="post">

			<div className="main__resumeContainer__form__section profile">
			<div className="info">
			<h2 className="main__resumeContainer__form__section__title">Perfil</h2>
			<div className="main__resumeContainer__form__section__buttons">
			<input className="input input__buttonInfo" type="button" value="Editar" onclick="editar('content-profile')" />
			</div>
			</div>

			<div id="content-profile" className="content">
			<input className="input" type="text" name="name" id="name" placeholder="Nombre" />
			<input className="input" type="text" name="lastname" id="lastname" placeholder="Apellidos" />
			<input className="input" type="text" name="profession" id="profession" placeholder="Profesión" />
			<input className="input" type="button" name="save" className="saveProfile" value="Guardar" />
			<input className="input" type="button" name="delete" value="Borrar" className="delete-profile" />
			<input className="input" type="button" value="cerrar" onclick="cerrar('content-profile')" />
			</div>
			</div>

			<div className="main__resumeContainer__form__section summary">
			<div className="info">
			<h2 className="main__resumeContainer__form__section__title">Extracto</h2>
			<div className="main__resumeContainer__form__section__buttons">
			<input className="input input__buttonInfo" type="button" value="Editar" onclick="editar('content-summary')" />
			</div>
			</div>

			<div id="content-summary" className="content">
			<textarea name="summary" id="summary" rows="8" cols="80" placeholder="Introduce una pequeña descripción"></textarea>
			<input className="input" type="button" name="save" value="Guardar" className="saveSumary" />
			<input className="input" type="button" name="delete" value="Borrar" className="delete-summary" />
			<input className="input" type="button" value="cerrar" onclick="cerrar('content-summary')" />
			</div>
			</div>

			<div className="main__resumeContainer__form__section contact-information">
			<div className="info">
			<h2 className="main__resumeContainer__form__section__title">Datos de contacto</h2>
			<div className="main__resumeContainer__form__section__buttons">
			<input className="input input__buttonInfo" type="button" value="Editar" onclick="editar('content-contact-info')" />
			</div>
			</div>
			<div id="content-contact-info" className="content">
			<input className="input" type="tel" name="telephone" id="telephone" placeholder="Teléfono" />
			<span className="error error_telephone"></span>
			<input className="input" type="email" name="email" id="email" placeholder="Email" />
			<span className="error error_email"></span>
			<input className="input" type="button" name="save" value="Guardar" className="saveContact" />
			<input className="input" type="button" name="delete" value="Borrar" className="delete-contact" />
			<input className="input" type="button" value="cerrar" onclick="cerrar('content-contact-info')" />
			</div>
			</div>

			<div className="main__resumeContainer__form__section main__resumeContainer__form__section--experience experience">
			<div className="info">
			<h2 className="main__resumeContainer__form__section__title">Experiencia laboral</h2>
			<div className="main__resumeContainer__form__section__buttons">
			<input className="input input__buttonInfo" type="button" value="Editar" onclick="editar('content-experience')" />
			</div>
			</div>

			<div id="content-experience" className="content">
			<div className="addMore">
			<div className="newbutton">
			<div className="main__resumeContainer__form__section--experience__addmore__newbutton__work">
			<input className="input" id="position" type="text" name="name" placeholder="Cargo" />
			<input className="input" id="experience" type="text" name="name" placeholder="Empresa" />
			<div className="period-initial">
			<label className="label">Fecha de inicio</label>
			<div className="initial">
			<select className="month" name="start-month" id="month-start"></select>
			<select className="year" name="start-year" id="year"></select>
			</div>
			</div>
			<div className="period-end">
			<label className="label">Fecha de fin</label>
			<div className="end">
			<select className="month" name="end-month" id="month-end"></select>
			<select className="year" name="end-year" id="year-end"></select>
			</div>
			</div>

			<div className="act">
			<label className="label">Actualmente</label>
			<input className="input" id="actuality" type="checkbox" value="" name="actual" />
			<div className="buttonrelative">
			<img className="main__resumeContainer__form__section--experience__prueba" src="images/more.png" alt="botonprueba" title="prueba" />
			</div>
			</div>
			</div>
			</div>
			</div>

			<input className="input" type="button" name="save" value="Guardar" className="saveExperience" />
			<input className="input" type="button" name="delete" value="Borrar" className="delete-experience" />
			<input className="input" type="button" value="cerrar" onclick="cerrar('content-experience')" />
			</div>
			</div>

			<div className="main__resumeContainer__form__section additional">
			<div className="info">
			<h2 className="main__resumeContainer__form__section__title">Más información</h2>
			<div className="main__resumeContainer__form__section__buttons">
			<input className="input input__buttonInfo" type="button" value="Editar" onclick="editar('content-additional')" />
			</div>
			</div>

			<div id="content-additional" className="content">
			<div className="addMore">
			<div className="newbutton">
			<input className="input" className="education" type="text" name="education" placeholder="Estudios" />
			<input className="input" className="education_university" type="text" name="education_university" placeholder="Institucion" />
			<img className="prueba" src="images/more.png" alt="botonprueba" title="prueba" />
			</div>
			</div>

			<div className="addMore">
			<div className="newbutton">
			<input className="input" className="languages" type="text" name="languages" placeholder="Idiomas" />
			<label className="label"for="level">Nivel</label>
			<select id="level" className=" level" name="level"></select>
			<img className="prueba_language" src="images/more.png" alt="botonprueba" title="prueba" />
			</div>
			</div>

			<div className="input-skill">
			<input className="input" type="text" id="skills1" className="skills" name="skills1" placeholder="Habilidad" />
			<input className="input" className="level_skills" type="text" name="level_skills1" value="" placeholder="Nivel del 1 al 100" />
			<input className="input" type="text" id="skills2" className="skills" name="skills2" placeholder="Habilidad" />
			<input className="input" className="level_skills" type="text" name="level_skills2" value="" placeholder="Nivel del 1 al 100" />
			<input className="input" type="text" id="skills3" className="skills" name="skills3" placeholder="Habilidad" />
			<input className="input" className="level_skills" type="text" name="level_skills3" value="" placeholder="Nivel del 1 al 100" />
			</div>
			<div className="addMore">
			<div className="newbutton">
			<input className="input" id="interest" type="text" name="interest" placeholder="Intereses" />
			<img className="prueba_interest" src="images/more.png" alt="botonprueba" title="prueba" />
			</div>
			</div>
			<input className="input" type="button" name="save" value="Guardar" className="saveMore" />
			<input className="input" type="button" name="delete" value="Borrar" className="delete-additional" />
			<input className="input" type="button" value="cerrar" onclick="cerrar('content-additional')" />
			</div>

			<div className="personalize main__resumeContainer__form__section main__resumeContainer__form__section__personalize">
			<div className="info">
			<h2 className="main__resumeContainer__form__section__title">Personaliza tu CV</h2>
			<div className="color-buttons">
			<input className="input botoncito button_green" type="button" data-theme-className="theme1" value="" />
			<input className="input botoncito button_purple" type="button" data-theme-className="theme2" value="" />
			<input className="input botoncito button_yellow" type="button" data-theme-className="theme3" value="" />
			<input className="input botoncito button_blue" type="button" data-theme-className="theme4" value="" />
			</div>
			</div>
			</div>
			</div>
			</form>

			<div className="preview printPreview" id="preview">
			<div className="showpreview">
			<img className="preview__button--hide" src="images/cancel.png" alt="boton cerrar" onclick="cerrar('preview')" />

			<div className="printPreview" id="preview2">
			<div className="resume-header">
			<h2 className="resume__title" id="data-profile"></h2>
			</div>

			<div className="resume__header__profession">
			<span id="data-profession"></span>
			</div>
			<hr className="line__top" />
			<div className="resume__header__summary">
			<span id="data-summary"></span>
			</div>

			<div className="preview__section">
			<div className="preview__section__title">
			<div className="titles"><h3>Datos de contacto</h3></div>
			<hr className="line__bottom" />
			</div>
			<div>
			<span className="preview__section__subtitle">Teléfono:</span> <span id="data-telephone"></span>
			</div>
			<div>
			<span className="preview__section__subtitle">Email:</span> <span id="data-email"></span>
			</div>
			</div>

			<div className="preview__section">
			<div className="preview__section__title">
			<div className="titles"><h3>Experiencia laboral</h3></div>
			<hr className="line__bottom" />
			</div>
			<div>
			<span id="data-position" className="span-experience"></span>
			</div>
			</div>

			<div className="preview__section">
			<div className="preview__section__title">
			<div className="titles"><h3>Más información</h3></div>
			<hr className="line__bottom" />
			</div>
			<div>
			<span className="preview__section__subtitle">Estudios:</span> <br />
			<ul id="data-studies" className="data-studies"></ul>
			</div>
			<div>
			<span className="preview__section__subtitle">Idiomas:</span>
			<ul className="preview__data__languages"></ul>
			</div>

			<div className="skill__container">
			<span className="preview__section__subtitle">Habilidades:</span>
			<div className="barSkillsSection">
			<div className="levelSkill">
			<p id="skillName1" className="skillName"></p>
			</div>
			</div>
			<div className="barSkillsSection">
			<div className="levelSkill">
			<p id="skillName2" className="skillName"></p>
			</div>
			</div>
			<div className="barSkillsSection">
			<div className="levelSkill">
			<p id="skillName3" className="skillName"></p>
			</div>
			</div>
			</div>

			<div>
			<span className="preview__section__subtitle">Intereses:</span>
			<ul id="data-interest" className="preview__data__interest"></ul>
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
			<div className="footer__map"> <iframe className="footer__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8243883784326!2d-3.708031684604198!3d40.412740979365644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d58772a6e1%3A0xf3b5fc75d6a7b133!2sutopic_US!5e0!3m2!1ses!2ses!4v1511432618667" width="400" height="300" frameborder="0" allowfullscreen></iframe>
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
