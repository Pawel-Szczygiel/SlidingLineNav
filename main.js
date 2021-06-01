
const linia = document.querySelector('#linia');
// let linia2 = document.querySelector('#linia2');
const ul = document.querySelector('ul');

const li = ul.querySelectorAll('li');

//funkcja odpowiedzialna za linię
function podkresl(e) {
    linia.style.left = e.offsetLeft+'px';
    linia.style.width = e.offsetWidth+'px';

    // linia2.style.left = e.offsetLeft - 8 +'px';
    // linia2.style.height = e.offsetHeight + 5+'px' ;
   
    // console.log( linia.style.left = e.offsetLeft+'px');
    // console.log( linia.style.width = e.offsetWidth+'px');
};

li.forEach( e => { e.addEventListener('click', e => { 
                                            podkresl(e.target); })       
 });
 