function novaCena(){
    var potrosnja = parseFloat(document.getElementById("potrosnja").innerText);
    var cena = parseFloat(document.getElementById("cena").innerText);
    var cenaStoKm = potrosnja * cena;
    var cenaKm = cenaStoKm/100;
}

function rezultat(){
    getElementById("cenaKm").innerText = 'Cena kilometra je ' + cenaKm;
}

function resetovanje(){

}