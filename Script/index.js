pageOne();
secondPage();
pageThree();

class Clock {
	constructor({template}) {
		this.template = template;
	}


	render() {
		let date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		myClock.innerHTML = output; 
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000)
	}
}

let clock = new Clock({template: 'h:m:s'});
clock.start();

// function in pagination //

firstLiUlDivHeader.addEventListener('click', () => {
	myHome.removeAttribute('id');
	menuContainer.setAttribute('id', 'display-center');
	aboutContainer.setAttribute('id', 'display-about');
});

secondLiUlDivHeader.addEventListener('click', () => {
	myHome.setAttribute('id', 'display-home');
	menuContainer.removeAttribute('id');
	aboutContainer.setAttribute('id', 'display-about');
});

firstUlLiHomeButton.addEventListener('click', () => {
	myHome.setAttribute('id', 'display-home');
	menuContainer.removeAttribute('id');
	aboutContainer.setAttribute('id', 'display-about');
});

thirdLiUlDivHeader.addEventListener('click', () => {
	myHome.setAttribute('id', 'display-home');
	menuContainer.setAttribute('id', 'display-center');
	aboutContainer.removeAttribute('id');
});

secontUlLiHomeButton.addEventListener('click', () => {
	myHome.setAttribute('id', 'display-home');
	menuContainer.setAttribute('id', 'display-center');
	aboutContainer.removeAttribute('id');
});