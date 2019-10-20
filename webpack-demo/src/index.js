import _ from 'lodash';
// insertion of css with webpack css loader and style loader
import './style.css';

function component () {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    //element.classList.add('hello');
    element.className = 'hello'; 

    return element;
}

document.body.appendChild(component());

// command is npx webpack --config webpack.config.js

// npm run build