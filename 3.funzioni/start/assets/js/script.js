corretta ();
sbagliata ();
eta();
torta();

/*----------*/

function corretta() {
    let mele = 4;
    let arance = 5;
    document.getElementById('corretta').innerHTML = `Succo con ${mele} mele e ${arance} arance`;
}

function sbagliata() {
    let mele = 6;
    let arance;
    document.getElementById('sbagliata').innerHTML = `Succo con ${mele} mele e ${arance} arance`;
}

/*-------*/

function eta() {
    let eta = 2022-1997;
    document.getElementById('eta').innerHTML += `${eta} anni`;
}

/*-------*/
anna = () => {
    let anno = 2022-30;
    document.getElementById('persona1').innerHTML = `L'anno di nascita di Anna è il ${anno}`;
}

anna();


maria = () => {
    let anno = 2022-24;
    document.getElementById('persona2').innerHTML = `L'anno di nascita di Maria è il ${anno}`;
}

maria();

/*-------*/
function torta() {
    let mela = 9;
    let arancia = 15;

    stampa(mela, arancia);
}

function stampa(mela, arancia) {
    document.getElementById('torta').innerHTML = `Torta con ${mela} fette di mela e ${arancia} fette di arancia.`
}

/*------*/

var btn = document.getElementById('calcola');
btn.addEventListener("click", function () {
document.getElementById('totale').innerHTML = "Il totale spesa è: &euro;";
let cibo = document.getElementById('cibo').value;
let detersivi = document.getElementById('detersivi').value;
let abiti = document.getElementById('abiti').value;
let totale = +cibo + +detersivi + +abiti;

document.getElementById('totale').innerHTML += `${totale}`;
});

