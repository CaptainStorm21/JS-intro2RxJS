// unicast

//Low Level Observables
const { Observable } = Rx;
// tap operator - utility operator
// 
const { tap } = RxOperators;
//share operator takes  
const { share } = RxOperators;

const observable = new Observable ((subscriber) => {
  
  // Throw the value 1 into our pipeline
  //emitting a new value
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  
  /*
  Disble  subscripber.complete();
  setTimeout(()=>{
    subscriber.next(4);
  }, 500);
  */
  
  // stops all  and new values comes out of this obsereverable
  //subscripber.complete() finishes 1st observerable pass and continues with the 2nd
  subscriber.complete();
  
  // will emit an error, no more values will come oout
  //subscriber.error(new Error ('error is here'));
}). pipe (
  tap(value => console.log('from 1st observer ', value)),
  share()
  );

observable.subscribe (
	(value) => console.log ('from tap ', value),
  (err) => console.error(err.message),
  () => console.log ('complete')
);

observable.subscribe ((value)=>{
	console.log('From second subscribe ', value);
  
});

//here we are looking only in the obseravable
new Observable( ()=> {});

// first observerable runs and completes
// when it get surbscribed to the observable line 20 + 
// 2nd observerable does not get executred
//
