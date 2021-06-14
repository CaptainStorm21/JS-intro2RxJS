// Alterinative Observable synthax

//Low Level Observables
const { Observable } = Rx;


const observable = new Observable ((subscriber) => {
  
  // Throw the value 1 into our pipeline
  //emitting a new value
  subscriber.next(2);
  

  // stops all  and new values comes out of this obsereverable
  subscriber.complete();
  
      // will emit an error, no more values will come oout
  subscriber.error(new Error ('error is here'));
  
  
  //will not run after complete()
  //subscribe.next(1);
  
	// this goin to emit an object that is goign to skip over all those different
  // operators inside of pipeline and go directly t that observer where we will have
  // some function that's goign to handle and error
  

  
});

observable.subscribe (
	(value) => console.log (value),
  (err) => console.error(err.message),
  () => console.log ('complete')
);

observable; 
