let a = ''; //first number
let b = ''; //second number
let sign = ''; //znak operacii
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//jcran
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; //first number
    b = ''; //second number
    sign = ''; //znak operacii
    finish = false;
    out.textContent = 0;   
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //nagata ne knopka
    if(!event.target.classList.contains('btn')) return;
    //nagata knopka clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //poluchay nagatuy knopku
    const key = event.target.textContent;

    //esli nagata klavischa 0-9 ili .
    if(digit.includes(key)) {
        a += key;
        console.log(a, b , sign);
        out.textContent = a;
    }

}

