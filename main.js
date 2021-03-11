// tady je místo pro náš program


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

let ctverecek = document.querySelector('.ctverecek')
let alertText = 'Gratulace, právě jsi spustila tuto funkci!'

//změna barvy čtverečku na zelenou
function obarviNaZeleno() {
  ctverecek.style.backgroundColor = "green";
}

//výsledek až po click na tlačítko
function ukazVysledek(a, b) {
  document.querySelector("#vysledek").innerHTML = secti(a, b);
}

//text upozorni() to konzole a čtverečku

function upozorni() {
  alert(alertText);
  console.log(alertText);
  ctverecek.innerHTML = (alertText);
  ctverecek.style.width = '500px';
}

