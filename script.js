//Retriving HTML elements From the DOM
const form  = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 =document.getElementById('password2');

// Function to update class and message for error
function showError(input,message) {
    //Get the parent Element of the input field (.from-control)
    const formControl = input.parentElement;
    // Replace the class -add error
    formControl.className = 'form-control error';
    //Get the small element for the error message
    const small = formControl.querySelector ('small');
    // Replace the text for small element using the input message
    small.innerText = message;
    
}
//Function to update class for success
function showSuccess (input){
 //Get the parent Element of the input field (.from-control)   
    const formControl = input.parentElement;
    // Replace the class -add success
    formControl.className = 'form-control success';

}

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(input.value.trim ()) {
        showSuccess(input);
    }) else {
        showError(input, `Please provide a valid email}`)
    }
}
//Function to check if required fields
function checkrequired(inputArray) {
    inputArray.forEach(function(input){
        if ( input.value === '' ) {
            console.log(input.id);
            showError(input, `${getFieldId(input)} is requried`);
        } else {
            showSuccess(input);
        }
    });
}

// Function to check length of input field
function checkLength(input,min,max) {
    if ( input.value.length < min)  {
        showError(input, `${ getFieldId(input)} needs to be at least ${min} characters`)
    } else if (input.value.length > max ) {
        showError(input, `${ getFieldId(input)} needs to be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

//Function to check if password and confrim password match
function checkPasswordMatch( input1, input2){
    if ( input1.value === input2.value){
        showError( input2,"Password don't match")
    }
}


//Function to get the Id of the input field with proper case
function getFieldId(input)
return input.id.charAt(0).toUpperCase() + input.id.slice(1);

//Event listners
//Create event listner for submit button
form.addEventListener('submit' , function(e){
    //stop page from reloading on submit
    e.preventDefault();

    checkrequired([username,email,password,password2])
    checkrequired(username,3,10);
    checkrequired(password,6,30);
    checkEmail(email);
    checkPasswordMatch(password,password2);


});
