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
