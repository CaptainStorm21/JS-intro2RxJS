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
        map( event => 
            event.target.value),
    		map(value => console.log(value)),
    		map(value => 'Hello this is rxjs')
    ) //goes to visualization 

//this is specific to out.stegrider.sh
//not a production tool 
observable;





/*

user types input ---> obsservable 
then observable emotions an event
event object { target: ... }
							//// processing pipeline
then { target: ... } uses map operator (example typing 'asdf')
        map( event => event.target.value),
then string 'asdf' moves on to new map operator statement
    		map(value => console.log(value))
 value returns as undefined it is a last statemnt inside of the pipeline
 3rd statement map( event => event.target.value),
    		map(value => 'Hello this is rxjs')

