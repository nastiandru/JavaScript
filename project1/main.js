const liczba1 = document.querySelector('#liczba1')
//const liczba2 = document.querySelector('#liczba2')
const przeliczBtn = document.querySelector('#przelicz')
const WynikiPojemnik = document.querySelector('#wyniki')

console.dir(liczba1)
przeliczBtn.addEventListener('click', przelicz)
//Math.min(), .max()

function przelicz()
{
    console.log(Math.min(+liczba1.value, +"4"))
    //parseInt(liczba1.valule)
    WynikiPojemnik.innerHTML = 'Wynik: ${liczba1.value}'
}