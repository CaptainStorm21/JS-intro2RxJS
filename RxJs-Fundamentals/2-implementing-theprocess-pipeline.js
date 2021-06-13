//creating an observable
//using opertor from rxjs library

//getting a function out of Rxjs library

const { fromEvent } = Rx;

//accessing a specific operator inside of the RxJS library
const { map  } = RxOperators;


const input = document.createElement('input');
const container = document.querySelector ('.container');

container.appendChild(input);


const observable = fromEvent(input, 'input')
	.pipe(
   // map( event => console.log(event))
        map( event => event.target.value),
    		map(value => console.log(value))
    )

//this is specific to out.stegrider.sh
//not a production tool 
observable;
