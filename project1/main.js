const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')
const liczba4 = document.querySelector('#liczba4')

const przeliczBtn = document.querySelector('#przelicz')
const sum = document.querySelector('#sum')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
const srednia = document.querySelector("#srednia")

const WynikiPojemnik = document.querySelector('#wyniki')


przeliczBtn.addEventListener('click', przelicz)
//Math.min(), .max()

function przelicz()
{
    console.log(Math.min(+liczba1.value, +"4"))
    //parseInt(liczba1.valule)
    WynikiPojemnik.innerHTML = 'Wynik: ${liczba1.value}'
    console.dir(liczba1.value)
}

function max(){

}

function min(){

}

