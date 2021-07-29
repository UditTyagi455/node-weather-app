    const selectForm = document.querySelector('form');
    const searchField = document.querySelector('input');
    const para1 = document.querySelector('#msg-1');
    const para2 = document.querySelector('#msg-2');

    selectForm.addEventListener('submit',(e)=>{
       e.preventDefault();
 
       para1.textContent ="Loading..."
       para2.textContent = ""
       const location = searchField.value;
       fetch(`/weather?address=${location}`)
       .then(res => res.json())
       .then(result => {
           if(result.error){
               para1.innerHTML = result.error;
           }else{
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