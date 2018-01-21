'use strict';

var languageName = document.querySelector(".languages");
var languageLevel = document.querySelector(".level");
var languageListPreview = document.querySelector(".preview__data__languages");
var languageList = [];

function addLanguage() {
	var language = {
		name: languageName.value,
		lvl: languageLevel.value
	};
	languageList.push(language);
	var allLanguageList = '';

	for (var i = 0; i < languageList.length; i++) {
		allLanguageList += '<li>' + languageList[i].name + '</li>';
		allLanguageList += '<li>' + languageList[i].lvl + '</li><hr class="line">';
	}
	languageListPreview.innerHTML = allLanguageList;
	document.querySelector(".languages").value = '';
	document.querySelector('.level').value = '';
	vistaPrevia("preview");
}
var botonIdioma = document.querySelector('.prueba_language');
botonIdioma.addEventListener('click', addLanguage);

function deleteLanguage() {
	languageList = [];
	languageListPreview.innerHTML = '';
}