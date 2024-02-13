let menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
menuContainer.setAttribute('id', 'display-center');

let myMenu = document.createElement('div');
myMenu.classList.add('menu');

function secondPage() {

	let menuTitle = document.createElement('div');
	menuTitle.classList.add('menu-title');

	let h2MenuTitle = document.createElement('h2');
	h2MenuTitle.textContent = 'Menu';

	////

	let menuLine = document.createElement('div');
	menuLine.classList.add('menu-line');

	for (let i = 0; i < 4; i++) {
		let divMenuLine = document.createElement('div');
		menuLine.appendChild(divMenuLine);
	}

	for (let i = 0; i < 14; i++) {
		let menuOne = document.createElement('div');
		menuOne.classList.add('menu-one');

		let divMenuOne = document.createElement('div');
		let h4DivMenuOne = document.createElement('h4');
		let pDivMenuOne = document.createElement('p');
		let h5DivMenuOne = document.createElement('p');

		h4DivMenuOne.textContent = 'Title';
		pDivMenuOne.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae minus eos ab nihil ea esse hic.';
		h5DivMenuOne.textContent = '25$';

		myMenu.appendChild(menuOne);
		menuOne.appendChild(divMenuOne);
		divMenuOne.appendChild(h4DivMenuOne);
		divMenuOne.appendChild(pDivMenuOne);
		divMenuOne.appendChild(h5DivMenuOne);
	}

	myCenterDiv.appendChild(menuContainer);
	menuContainer.appendChild(menuTitle);
	menuTitle.appendChild(h2MenuTitle);

	menuContainer.appendChild(menuLine);

	menuContainer.appendChild(myMenu);
}