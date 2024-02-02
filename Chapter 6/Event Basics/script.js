// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// })

const items = document.querySelectorAll('li');

items.forEach(li => {
    li.addEventListener('click', e =>{
        // console.log('item clicked');
        // console.log(e.target);
        // console.log(li);
        e.target.style.textDecoration = 'line-through';
    });
});