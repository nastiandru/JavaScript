const liczba1 = document.querySelector('#liczba')
consile.dir(liczba1)
const przeliczBtn = document.querySelector('#przelicz')
const WynikiPojemnik = document.querySelector('#wyniki')

przeliczBtn.addEventListener('click', () => {
    console.log(liczba1.value)
    WynikiPojemnik.innerHTML = liczba1.value
})
//Math.min(), .max()