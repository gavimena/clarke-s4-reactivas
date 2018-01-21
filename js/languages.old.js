'use strict';

const languageName = document.querySelector(".languages");
const languageLevel = document.querySelector(".level");
const languageListPreview = document.querySelector(".preview__data__languages");
const languageList = [];


function addLanguage() {
	const language = {
		name: languageName.value,
		lvl:languageLevel.value
	};
	languageList.push(language);
	const allLanguageList = '';

	for (let i = 0; i < languageList.length; i++) {
		allLanguageList += '<li>' + languageList[i].name +'</li>';
		allLanguageList += '<li>' + languageList[i].lvl +'</li><hr class="line">';

	}
	languageListPreview.innerHTML = allLanguageList;
	document.querySelector(".languages").value = '';
	document.querySelector('.level').value = '';
	vistaPrevia("preview");
}
const botonIdioma = document.querySelector('.prueba_language');
botonIdioma.addEventListener('click', addLanguage);

function deleteLanguage() {
	languageList = [];
	languageListPreview.innerHTML = '';
}
