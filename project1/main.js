const liczba1 = document.querySelector('#liczba1')
//const liczba2 = document.querySelector('#liczba2')
const przeliczBtn = document.querySelector('#przelicz')
const WynikiPojemnik = document.querySelector('#wyniki')

console.dir(liczba1)
przeliczBtn.addEventListener('click', () => {
    console.log(+liczba1.value)
    //parseInt(liczba1.valule)
    WynikiPojemnik.innerHTML = 'Wynik: ${liczba1.value}'
})
//Math.min(), .max()