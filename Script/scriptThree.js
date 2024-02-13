let myClock = document.createElement('p');
myClock.classList.add('clock');

let aboutContainer = document.createElement('div');
	aboutContainer.classList.add('about-container');
	aboutContainer.setAttribute('id', 'display-about');

function pageThree() {
	let pOne = '555-555-5555';
	let pTwo = '555-555-5555-011111';
	let pThree = 'Pepe Pepe';

	let pAbout = document.createElement('p');
	pAbout.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto delectus culpa minima amet aut commodi eum illum rem, soluta recusandae earum, hic, nam neque porro, quos rerum et. Quia, nulla.';
	
	let myContactOne = document.createElement('div');
    myContactOne.classList.add('contact');
    myContactOne.classList.add('contact-one');

    let myContactTwo = document.createElement('div');
    myContactTwo.classList.add('contact');
    myContactTwo.classList.add('contact-two');

    let myContactThree = document.createElement('div');
    myContactThree.classList.add('contact');
    myContactThree.classList.add('contact-three');

    let myContactFour = document.createElement('div');
    myContactFour.classList.add('contact');
    myContactFour.classList.add('contact-four');

    let myLocationOne = document.createElement('div');
    myLocationOne.classList.add('contact');
    myLocationOne.classList.add('location-one');

    let myLocationTwo = document.createElement('div');
    myLocationTwo.classList.add('contact');
    myLocationTwo.classList.add('location-two');

    let pContactOne = document.createElement('p');
    let pTwoContactOne = document.createElement('p');

    pContactOne.textContent = pThree;
    pTwoContactOne.textContent = pOne;

    let ptwo = document.createElement('p');
    let pTwoTwo = document.createElement('p');

    ptwo.textContent = pThree;
    pTwoTwo.textContent = pOne;

    let pThre = document.createElement('p');
    let pThreThree = document.createElement('p');

    pThre.textContent = pThree;
    pThreThree.textContent = pOne;

    let pFour = document.createElement('p');
    let pFourFour = document.createElement('p');

    pFour.textContent = pThree;
    pFourFour.textContent = pOne;

    let pFive = document.createElement('p');
    let pFiveFive = document.createElement('p');

    pFive.textContent = pThree;
    pFiveFive.textContent = pTwo;

    let pSix = document.createElement('p');
    let pSixSix = document.createElement('p');

    pSix.textContent = pThree;
    pSixSix.textContent = pTwo;

    //////

    let myFooter = document.createElement('footer');
    myFooter.classList.add('footer');

    let mySpanDate = document.createElement('span');
	mySpanDate.classList.add('date');

	mySpanDate.innerHTML = new Date().getFullYear();

    let myCopyright = document.createElement('p');
    myCopyright.classList.add('copyright');

    myCopyright.innerHTML = `Copyright © `;
    myCopyright.appendChild(mySpanDate);
    myCopyright.innerHTML += `Nvandres075 
				            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				              <title>github</title>
				              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
				            </svg>`

	myCenterDiv.appendChild(aboutContainer);
	aboutContainer.appendChild(pAbout);
	aboutContainer.appendChild(myContactOne);
	myContactOne.appendChild(pContactOne);
	myContactOne.appendChild(pTwoContactOne);

	aboutContainer.appendChild(myContactTwo);
	myContactTwo.appendChild(ptwo);
	myContactTwo.appendChild(pTwoTwo);

	aboutContainer.appendChild(myContactThree);
	myContactThree.appendChild(pThre);
	myContactThree.appendChild(pThreThree);

	aboutContainer.appendChild(myContactFour);
	myContactFour.appendChild(pFour);
	myContactFour.appendChild(pFourFour);

	aboutContainer.appendChild(myLocationOne);
	myLocationOne.appendChild(pFive);
	myLocationOne.appendChild(pFiveFive);

	aboutContainer.appendChild(myLocationTwo);
	myLocationTwo.appendChild(pSix);
	myLocationTwo.appendChild(pSixSix);

	document.querySelector('body').appendChild(myFooter);
	myFooter.appendChild(myCopyright);
	myFooter.appendChild(myClock);
} 