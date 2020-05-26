import _ from 'lodash';
import './style.css';
import Corn from './corn.png';

function component() {
	const element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// Add the image to our existing div.
	const myCorn = new Image();
	myCorn.src = Corn;
	element.appendChild(myCorn);

	return element;
}

document.body.appendChild(component());
