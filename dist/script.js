const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  let text = event.target.value;
  // console.log(parseInt(text));
  text = parseInt(text)
  if (isNaN(text)){
    throw new Error('You must enter a number ');
  }
  logValue(text);
});

const logValue = (value) => {
  console.log(`Your value: ${value}`);
}

/*
Input element - source of Events
            |
            \/
Get value through event object
parse a number out of the value 
inspect the number throw error it is i not a number - processing complete
hand off the number to something to consume it 
           |
          \/
Funcction to use this value
*/



/*
RxJS
                  Input element - source of Events Observable
                              |
                              \/
                  | Get value through event object -- operator 1
       Pipe       | parse a number out of the value --- operator 2
                  | inspect the number throw error it is i not a number -                             processing complete -- operator 3
                  | hand off the number to something to consume it 
                             |
                             \/
                  Funcction to use this value &
Inspect the numbeer, throw erorr it is not a number ---> process complete and both are  Observer
*/