'use strict';

const interestName = document.querySelector("#interest");
let interestList = [];
const interestListPreview = document.querySelector(".preview__data__interest");

function addInterest() {
	var interest = {
		interes: interestName.value
	};
	interestList.push(interest);
	let allInterestList = '';

	for (let i = 0; i < interestList.length; i++) {
		allInterestList += '<li>' + interestList[i].interes +'</li>';

	}
	interestListPreview.innerHTML = allInterestList;
	document.querySelector("#interest").value = '';
	vistaPrevia("preview");
}
const botonInteres = document.querySelector('.prueba_interest');
botonInteres.addEventListener('click', addInterest);

function deleteInterest() {
	interestList = [];
	interestListPreview.innerHTML = '';
}

function fillMore(){
	vistaPrevia("preview");
	const datosHabilidades1 = document.querySelector("#skills1").value;
	const datosHabilidades2 = document.querySelector("#skills2").value;
	const datosHabilidades3 = document.querySelector("#skills3").value;

	const newSkill= document.querySelectorAll('.skillName');
	const inputSkill = document.querySelectorAll('.skills');
	const inputLevel = document.querySelectorAll('.level_skills');

	for (let i = 0; i < newSkill.length; i++) {
		newSkill[i].innerHTML = inputSkill[i].value;
		newSkill[i].parentElement.style.width = inputLevel[i].value + '%';
	}
	document.querySelector("#skillName1").innerHTML = datosHabilidades1;
	document.querySelector("#skillName2").innerHTML = datosHabilidades2;
	document.querySelector("#skillName3").innerHTML = datosHabilidades3;
}
const saveMore = document.querySelector('.saveMore');
saveMore.addEventListener('click', fillMore);

function deleteSkills(){
	const previewSkillNames= document.querySelectorAll('.skillName');
	const previewSkillLevels= document.querySelectorAll('.levelSkill');

	const inputSkillNames = document.querySelectorAll('.skills');
	const inputSkillLevels = document.querySelectorAll('.level_skills');

	for (let i = 0; i < previewSkillNames.length; i++) {
		previewSkillNames[i].innerHTML = '';
		previewSkillNames[i].parentElement.style.width = 0;
	}

	for (let i = 0; i < inputSkillNames.length; i++) {
		inputSkillNames[i].value = '';
		inputSkillLevels[i].value = '';
	}
}
