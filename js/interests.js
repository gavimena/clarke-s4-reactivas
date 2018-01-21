'use strict';

var interestName = document.querySelector("#interest");
var interestList = [];
var interestListPreview = document.querySelector(".preview__data__interest");

function addInterest() {
	var interest = {
		interes: interestName.value
	};
	interestList.push(interest);
	var allInterestList = '';

	for (var i = 0; i < interestList.length; i++) {
		allInterestList += '<li>' + interestList[i].interes + '</li>';
	}
	interestListPreview.innerHTML = allInterestList;
	document.querySelector("#interest").value = '';
	vistaPrevia("preview");
}
var botonInteres = document.querySelector('.prueba_interest');
botonInteres.addEventListener('click', addInterest);

function deleteInterest() {
	interestList = [];
	interestListPreview.innerHTML = '';
}

function fillMore() {
	vistaPrevia("preview");
	var datosHabilidades1 = document.querySelector("#skills1").value;
	var datosHabilidades2 = document.querySelector("#skills2").value;
	var datosHabilidades3 = document.querySelector("#skills3").value;

	var newSkill = document.querySelectorAll('.skillName');
	var inputSkill = document.querySelectorAll('.skills');
	var inputLevel = document.querySelectorAll('.level_skills');

	for (var i = 0; i < newSkill.length; i++) {
		newSkill[i].innerHTML = inputSkill[i].value;
		newSkill[i].parentElement.style.width = inputLevel[i].value + '%';
	}
	document.querySelector("#skillName1").innerHTML = datosHabilidades1;
	document.querySelector("#skillName2").innerHTML = datosHabilidades2;
	document.querySelector("#skillName3").innerHTML = datosHabilidades3;
}
var saveMore = document.querySelector('.saveMore');
saveMore.addEventListener('click', fillMore);

function deleteSkills() {
	var previewSkillNames = document.querySelectorAll('.skillName');
	var previewSkillLevels = document.querySelectorAll('.levelSkill');

	var inputSkillNames = document.querySelectorAll('.skills');
	var inputSkillLevels = document.querySelectorAll('.level_skills');

	for (var i = 0; i < previewSkillNames.length; i++) {
		previewSkillNames[i].innerHTML = '';
		previewSkillNames[i].parentElement.style.width = 0;
	}

	for (var _i = 0; _i < inputSkillNames.length; _i++) {
		inputSkillNames[_i].value = '';
		inputSkillLevels[_i].value = '';
	}
}