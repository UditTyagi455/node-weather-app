
console.log("JavaScript file loaded....");

// fetch('https://puzzle.mead.io/puzzle')
//     .then(response => response.json())
//     .then(data => console.log(data.puzzle))

    // Challenge :1 Fetch weather
    //
    // 1. setup a call to fetch to fetch weaher for boston 
    // 2. Get the parse JSON response
    //    - If error property print error
    //    - If no error property, print location and forecase

    // fetch('http://localhost:3200/weather?address=boston')
    //      .then(res => res.json())
    //      .then(result => {
    //          if(result.error){
    //              console.log(result.error);
    //          }else{
    //              console.log(result.location);
    //              console.log(result.forecast);
                 
    //          }
    //      })
    //      .catch(err => console.log(err))

    const selectForm = document.querySelector('form');
    const searchField = document.querySelector('input');
    const para1 = document.querySelector('#msg-1');
    const para2 = document.querySelector('#msg-2');

    selectForm.addEventListener('submit',(e)=>{
       e.preventDefault();
 
       para1.textContent ="Loading..."
       para2.textContent = ""
       const location = searchField.value;
       fetch(`http://localhost:3200/weather?address=${location}`)
       .then(res => res.json())
       .then(result => {
           if(result.error){
               para1.innerHTML = result.error;
           }else{
            //    console.log(result.location);
            //    console.log(result.forecast);
            para1.innerHTML = result.location ;
            para2.innerHTML = result.forecast;
               
           }
       })
       .catch(err => console.log(err))
       
    })

// Challenge 1: Use input value to get weather
//
// 1. Migrate fetch call into the submit callback.
// 2. use the search text as the address query string value.
// 3. submit the form with a valid and invalid value to test.