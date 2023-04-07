var potrosnja, cena, cenaStoKm, cenaKm, velicinaR, distanca;

function novaCena(){
    potrosnja = parseFloat(document.querySelector('#potrosnja').value);
    cena = parseFloat(document.querySelector('#cena').value);
    cenaStoKm = potrosnja * cena;
    cenaKm = cenaStoKm/100;
    //console.log(cenaKm);
}

function noviRez(){
    velicinaR = parseFloat(document.querySelector('#rezervoar').value);
    distanca = parseFloat(document.querySelector('#distanca').value);
    //console.log(cenaKm);
}

function rezultat(){
    //ovo ce ici pod novaCena a dugme ce biti izbrisano
    document.querySelector('#cenaKilometra').innerText = 'Cena na 100 kilometara je ' + cenaKm;
}

function rezervoar(){
    //ovo ce ici pod noviRez a dugme ce biti izbrisano
    let distPun = (velicinaR/ potrosnja) * 100;
    document.querySelector('#predjenoKm').innerText = 'Sa punim rezervoarmon se moze preci ' + distPun + ' km';
    let zeljenaCena = distanca * cenaKm;
    document.querySelector('#zeljenaDist').innerText = 'Za zeljenu distancu je potrebno '+ distanca*potrosnja/100+ ' l ('  + zeljenaCena + 'din)';
}

function resetovanje(){
    document.querySelectorAll('input').forEach(element => {
        element.value = '';
    }); 
}