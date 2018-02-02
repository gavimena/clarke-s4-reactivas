import React from 'react';
import logo from '../images/Mediaqueers.png';
import contact from '../images/writing.png';

class Footer extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<footer className="footer">
				<div className="footer__items">
					<img className="footer__logo"  src={logo} alt="logo"/>
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
						<span className="footer__pencil"><a href="formulario.html" target="_blank" className="main__form"><img src={contact} alt="dibujo hoja lapiz" /></a></span>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;
