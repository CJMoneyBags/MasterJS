const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e =>{
    e.preventDefault();

    // validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        //feedback good info
        feedback.textContent = 'that username is valid!';
    }else{
        // feedback help helpful
        feedback.textContent = 'username must contain letters only & be beteween 6 to 12 charcters';
    }
});
