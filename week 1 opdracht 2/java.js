const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

var aantal = winkelmandje.length;
document.getElementById('opdracht1').innerHTML = "Aantal producten in het winkelmandje is: + Aantal;"

document.getElementById('opdracht2').innerHTML = winkelmandje.join('br');

document.getElementById('opdracht3').innerHTML = 'Het 4e product is: ' +winkelmandje

winkelmandje[1] = 'Bier';
document.getElementById('opdracht4').innerHTML = 'whiskey is vervangen door biet: ' + winkelmandje.join(', ')

function addProduct() {
    const nieuwProduct = prompt("voer het nieuwe roduct in:");
    winkelmandje.push(nieuwProduct);
    document.getElementById("opdracht5").innerHTML = winkelmandje
}
if (winkelmandje.length > 1){
    document.getElementById("opdracht6").innerHTML = "<p>U heeft genoeg producten om te tonen </p>"
    + winkelmandje.join('br');
    } else {
        document.getElementById("opdracht6").innerHTML =  "<p>U heeft genoeg producten om te tonen </p>"


    }
    ////
    if (winkelmandje[4] =='Drop') {
        document.getElementById("opdracht7").innerHTML = "<p> U heeft drop </p>"
    } else { document.getElementById("opdracht7").innerHTML = "<p> U heeft drop </p>"
 }
 
document.getElementById("opdracht8").innerHTML = "<p> Producten met spaties </p>"
+ winkelmandje.join(' - ')

document.getElementById('opdracht9').innerHTML ="Oude winkelmand: " + winkelmandje.join(', ')

winkelmandje.splice(0,2)
document.getElementById('nieuwewinkelmand').innerHTML = "Nieuwe winkelmand: " + winkelmandje.join(', ')

const winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
winkelmand.sort();
document.getElementById('opdracht10').innerHTML = 'Gesorteerd array: ' + winkelmand.join(', ')
--
-
-
-