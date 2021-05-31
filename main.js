
let linia = document.querySelector('#linia');
// let linia2 = document.querySelector('#linia2');
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let a4 = document.querySelector('#a4');
let a5 = document.querySelector('#a5');

a1.addEventListener('click', (e) => { 
                                        podkresl(e.target); })

a2.addEventListener('click', (e) => { 
                                        podkresl(e.target); })

a3.addEventListener('click', (e) => { 
                                        podkresl(e.target); })

a4.addEventListener('click', (e) => { 
                                        podkresl(e.target); })

a5.addEventListener('click', (e) => { 
                                        podkresl(e.target); })


//funkcja odpowiedzialna za linię
function podkresl(e) {
    linia.style.left = e.offsetLeft+'px';
    linia.style.width = e.offsetWidth+'px';

    // linia2.style.left = e.offsetLeft - 8 +'px';
    // linia2.style.height = e.offsetHeight + 5+'px' ;
   
    // console.log( linia.style.left = e.offsetLeft+'px');
    // console.log( linia.style.width = e.offsetWidth+'px');
} 
 