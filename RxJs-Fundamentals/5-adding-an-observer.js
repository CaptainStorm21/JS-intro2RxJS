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
    		//map(value => console.log(value)),
    		map(value => parseInt(value)),
    		//another map that will show or hide if an input value is a number or a string
    	//it will kick out if pipe if it isnot a number
    		map(value => {
          if (isNaN(value)) {
            throw new Error ('Enter a number');
          } 
          return value;
        })
    ) //goes to visualization 


/* an observer -
goal of an obserever is to take a look at any error that come out or any values
that comeout out of our proocessing pipepile 
we are adding an observer 
process complete + function to use this value
*/

observable.subscribe({
  //we are passing an object that has two keys in it
  //next() and error()
  
  next(value) {
    console.log(`Your value is ${value}`);
  },
  error(err) {
    console.error(`BAD THING! `, err.message);
  },
  //complete () {}

});
  
  
/*
obserevable.subscribe we are going to pass  in the actual technical 
observer so this right here subscribe

*/


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
    		map(value => 'Hello this is rxjs'
*/
