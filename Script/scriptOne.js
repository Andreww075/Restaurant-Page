let myContentCenter = document.createElement('div');
myContentCenter.classList.add('content-center');

let myCenterDiv = document.createElement('div');
myCenterDiv.classList.add('center-div');
// content-center //

// home //

let firstLiUlDivHeader = document.createElement('li');
let secondLiUlDivHeader = document.createElement('li');
let thirdLiUlDivHeader = document.createElement('li');

let myHome = document.createElement('div');
myHome.classList.add('home');

let firstUlLiHomeButton = document.createElement('li');
let secontUlLiHomeButton = document.createElement('li');

firstUlLiHomeButton.textContent = 'Take a look';
secontUlLiHomeButton.textContent = 'Visit our contacts';

function pageOne() {
	let body = document.querySelector('body');

	let myHeader = document.createElement('header');
	myHeader.classList.add('header');

	let divHeader = document.createElement('div');
	divHeader.classList.add('list-header');

	let ulDivHeader = document.createElement('ul');

	firstLiUlDivHeader.textContent = 'HOME';
	secondLiUlDivHeader.textContent = 'MENU';
	thirdLiUlDivHeader.textContent = 'ABOUT';



	body.appendChild(myHeader);
	myHeader.appendChild(divHeader);
	divHeader.appendChild(ulDivHeader);
	ulDivHeader.appendChild(firstLiUlDivHeader);
	ulDivHeader.appendChild(secondLiUlDivHeader);
	ulDivHeader.appendChild(thirdLiUlDivHeader);

	let divHome = document.createElement('div');
	divHome.classList.add('home-title');

	let h1DivHome = document.createElement('h1');
	h1DivHome.textContent = 'Welcome';

	let h2DivHome = document.createElement('h2');
	h2DivHome.textContent = 'Lorem ipsum dolor sit amet consectetur adipisi.';

	/////

	let myHomeLine = document.createElement('div');
	myHomeLine.classList.add('home-line');

	for (let i = 0; i < 4; i++) {
		let divHomeLine = document.createElement('div');
		myHomeLine.appendChild(divHomeLine);
	}

	let myDivParaHome = document.createElement('div');
	myDivParaHome.classList.add('home-para');

	let myParaHome = document.createElement('div');
	myParaHome.textContent = 'Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, ullam dolorem, porro nobis a soluta maiores.';

	let homeButton = document.createElement('div');
	homeButton.classList.add('home-button');

	let ulHomeButton = document.createElement('ul');

	body.appendChild(myContentCenter);
	myContentCenter.appendChild(myCenterDiv);
	myCenterDiv.appendChild(myHome);
	myHome.appendChild(divHome);
	divHome.appendChild(h1DivHome);
	divHome.appendChild(h2DivHome);

	myHome.appendChild(myHomeLine);

	myHome.appendChild(myDivParaHome);
	myDivParaHome.appendChild(myParaHome);

	myHome.appendChild(homeButton);
	homeButton.appendChild(ulHomeButton);
	ulHomeButton.appendChild(firstUlLiHomeButton);
	ulHomeButton.appendChild(secontUlLiHomeButton);
}