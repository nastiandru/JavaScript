const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const liczba3 = document.querySelector('#liczba3')

const przeliczBtn = document.querySelector('#przelicz')
const sum = document.querySelector('#sum')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
const srednia = document.querySelector("#srednia")

const WynikiPojemnik = document.querySelector('#wyniki')

const dodacPole = document.querySelector('#dodać')
const usunacPole = document.querySelector('#usunąć')
let inputs


przeliczBtn.addEventListener('click', przelicz)
//Math.min(), .max()

function przelicz()
{
    sum.innerHTML = 'Suma: '+ (parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value))
    srednia.innerHTML = 'Srednia: ' + (parseInt(liczba1.value) + parseInt(liczba2.value) + parseInt(liczba3.value))/3
    min.innerHTML = 'Min: ' + Math.min(parseInt(liczba1.value), parseInt(liczba2.value), parseInt(liczba3.value))
    max.innerHTML = 'Max: ' + Math.max(parseInt(liczba1.value), parseInt(liczba2.value), parseInt(liczba3.value))
}

dodacPole.addEventListener('click', () => {
    const input = document.querySelector('#input')
    input.setAttribute('type', 'text');
    inputs = document.querySelectorAll('input')
})

usunacPole.addEventListener('click', () => {
    const input = document.querySelector("input")
    inputs = document.querySelectorAll('input')

})


