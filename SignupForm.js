//Student 1 Pramuditha

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const occupation = document.getElementById('occupation');
const pactives = document.getElementById('pactives');
const ftype = document.getElementById('ftype');
const time = document.getElementById('time');
const gend = document.getElementById('gender');
const gender_male = document.getElementById('gender_male');
const gender_female = document.getElementById('gender_female');

//Display error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'input-box error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Display success
function showSuccess(input){
    formControl = input.parentElement;
    formControl.className = 'input-box success'
}

//
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === ''){
        showError(username, 'Name is required!');
    }else{
        showSuccess(username);

        if(email.value === ''){
            showError(email, 'Email is required!');
        }else{
            showSuccess(email);

            if(age.value === ''){
                showError(age, 'Age is required!');
            }else{
                showSuccess(age);

                if(occupation.value === ''){
                    showError(occupation, 'Occupation is required!');
                }else{
                    showSuccess(occupation);

                    if(pactives.value === ''){
                        showError(pactives, 'Physical actives is required!');
                    }else{
                        showSuccess(pactives);
                    
                        if(ftype.value === ''){
                            showError(ftype, 'Physical actives is required!');
                        }else{
                            showSuccess(ftype);
                        
                            if (!(gender_male.checked || gender_female.checked)) {
                                showError(gend, 'Gender is required!');
                            }else{
                                showSuccess(gend)
                            }
                        }
                    }                  
                }
            }
        }
    }

    // var gender = form.gender;
    
    // if(!(gender_male == true || gender_female == true)){
    //     showError(gender, 'Gender is required!');
    // }else{
    //     showSuccess(gender);
    // }

    // if (!gend.checked) {
    //     alert("Please enter a gender you idiot.");
    // }

    

    
})





