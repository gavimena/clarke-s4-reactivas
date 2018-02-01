import React from 'react';

class Header extends React.Component {

	render() {
		return(
			<header className="header">
				<a href="#home"><img src="../images/Mediaqueers.png" className="logo--header" alt="logo-header__menu" /></a>
				<nav className="header__menu list">
					<li className="header__menu__item header__menu__section"><a className="header__menu__section--link" href="#home">Home</a></li>
					<li className="header__menu__item header__menu__item--vista header__menu__section" onClick=''><a className="header__menu__section--link" href="#vista">Vista previa</a></li>
					<li className="header__menu__item__print"  onclick="printCurriculum()" id="btnprint" title="Imprimir"></li>
				</nav>
			</header>
		);
	}
}

export default Header;
