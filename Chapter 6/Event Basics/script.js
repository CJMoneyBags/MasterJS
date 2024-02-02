// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// })

const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () =>{
    // ul.innerHTML += '<li>Something new </li>';
    const li = document.createElement('li');
    li.textContent = "Something New to do";
    // ul.append(li);
    ul.prepend(li);
})

const items = document.querySelectorAll('li');

// items.forEach(li => {
//     li.addEventListener('click', e =>{
//         // console.log('item clicked');
//         // console.log(e.target);
//         // console.log(li);
//         // e.target.style.textDecoration = 'line-through';
//     console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

ul.addEventListener('click' , e =>{
    // console.log('event in UL');
    // console.log(e);
    if(e.target.nodeName === 'LI'){
    e.target.remove();
    }
});