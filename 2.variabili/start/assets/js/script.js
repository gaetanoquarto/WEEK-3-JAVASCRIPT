var nome = 'Aldo,';
let cliente = ' cliente,';
const numero = ' 3.14';
concatena = nome + cliente + numero;

document.getElementById('concatena').innerHTML = nome + cliente + numero;

document.getElementById('concatena2').innerHTML = concatena;

/*----------*/

var nome = 'Mario';

document.getElementById('var').innerHTML = nome;
document.getElementById('final').innerHTML = nome;
document.getElementById('let2').innerHTML = nome;
{
    let nome = 'Carla';
    document.getElementById('let').innerHTML = nome;
    document.getElementById('let3').innerHTML = nome;
    document.getElementById('final2').innerHTML = nome;
}

/*---------*/

var iniziale = 15;
valore1 = iniziale + 15;
incremento = valore1++;

valore2 = iniziale - 10;
decremento = valore2--;

document.getElementById('iniziale').innerHTML += iniziale;
document.getElementById('valore1').innerHTML += `${iniziale + 15}, ${valore1}`;
document.getElementById('valore2').innerHTML += `${iniziale - 10}, ${valore2}`;
document.getElementById('valore3').innerHTML += iniziale * 3;
document.getElementById('valore4').innerHTML += iniziale / 5;
document.getElementById('valore5').innerHTML += `${iniziale} è un numero`;