// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');


//CHALLENGE
const content = document.querySelectorAll('p');


content.forEach(element => {
    if(element.textContent.includes('error')){
        element.classList.add('error');
    }else if (element.textContent.includes('success')){
        element.classList.add('success');
    }

});


const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');
