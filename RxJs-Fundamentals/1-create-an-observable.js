//creating an observable

//getting a function out of Rxjs library

const { fromEvent } = Rx;


const input = document.createElement('input');
const container = document.querySelector ('.container');

container.appendChild(input);

//everytime we enter any text / data 
// "observable" has emitted an event
const observable = fromEvent(input, 'input');

//this is specific to out.stegrider.sh
//not a production tool 
observable;
