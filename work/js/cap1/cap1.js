// Menu de la Toscana
const taste = ["Vainilla", "Chocolate", "Fresa", "Napolitano", "Oreo"];
const malteadas = {
    vaso16oz: ["Malteada en vaso 16 oz", 13],
    miloConHelado: ["Milo con helado", 13]
};
const iceCreams = {
    conoSencillo: ["Cono Sencillo", 5],
    conoDoble: ["Cono doble", 6],
    copaSencilla: ["Copa de helado sencilla", 6],
    copaDoble: ["Copa de helado doble", 13]
};
// presentar los helado en pantalla
let createMalteadas = (name,taste,price)=> {
    name = `<h2>Name: ${name}</h2>`;
    taste = `<span>Name: ${taste}</span>`;
    price = `<h3>Name: ${price}</h3>`;
    return [name,taste,price];
};

// ejecutar el ejercicio en el boton RUN
const container = document.querySelector(".toscanaContainer");
const fragMalteadas = document.createDocumentFragment();
const fragIceCream = document.createDocumentFragment();
const iceShopButton = document.querySelector(".iceShop");

if(iceShopButton){
    iceShopButton.addEventListener('click',()=> {
    let name = prompt("Hola Bienvenido a la Toscana, ¿Como te llamas?");
    alert(`${name} este es el menu de la Toscana`);
        // malteadas 
    let mal = document.createElement("h2");
    mal.setAttribute("class","productsToscana");
    mal.innerHTML = "Malteadas";
    fragMalteadas.appendChild(mal);

    let divMalteadas = document.createElement("div");
    let h3Vaso = document.createElement("h3");
    let pPriceVaso = document.createElement("p");
    h3Vaso.innerHTML = `${malteadas.vaso16oz[0]}`;
    pPriceVaso.innerHTML = `Precio $${malteadas.vaso16oz[1]}`;
    divMalteadas.appendChild(h3Vaso);
    divMalteadas.appendChild(pPriceVaso);
    fragMalteadas.appendChild(divMalteadas);

    let divMiloConHelado = document.createElement("div");
    let h3Milo = document.createElement("h3");
    let pPriceMIlo = document.createElement("p");
    h3Milo.innerHTML = `${malteadas.miloConHelado[0]}`;
    pPriceMIlo.innerHTML = `Precio $${malteadas.miloConHelado[1]}`;
    divMiloConHelado.appendChild(h3Milo);
    divMiloConHelado.appendChild(pPriceMIlo);
    fragMalteadas.appendChild(divMiloConHelado);

    container.appendChild(fragMalteadas);
        //helados
    let ice = document.createElement("h2");
    ice.setAttribute("class","productsToscana");
    ice.innerHTML = "Helados";
    fragIceCream.appendChild(ice);
    
    let contIce = document.createElement("div");
    // let divIceConoSen = document.createElement("div");
    // let divIceConoDob = document.createElement("div");
    // let divIceCopaSen = document.createElement("div");
    // let divIceCopaDob = document.createElement("div");
    
    let h3IceConoSen = document.createElement("h3");
    let h3IceConoDob = document.createElement("h3");
    let h3IceCopaSen = document.createElement("h3");
    let h3IceCopaDob = document.createElement("h3");
    h3IceConoSen.innerHTML = `${iceCreams.conoSencillo[0]}`;
    h3IceConoDob.innerHTML = `${iceCreams.conoDoble[0]}`;
    h3IceCopaSen.innerHTML = `${iceCreams.copaSencilla[0]}`;
    h3IceCopaDob.innerHTML = `${iceCreams.copaDoble[0]}`;

    let priceIceConoSen = document.createElement("p");
    let priceIceConoDob = document.createElement("p");
    let priceIceCopaSen = document.createElement("p");
    let priceIceCopaDob = document.createElement("p");
    priceIceConoSen.innerHTML = `$${iceCreams.conoSencillo[1]}`;
    priceIceConoDob.innerHTML = `$${iceCreams.conoDoble[1]}`;
    priceIceCopaSen.innerHTML = `$${iceCreams.copaSencilla[1]}`;
    priceIceCopaDob.innerHTML = `$${iceCreams.copaDoble[1]}`;

    contIce.appendChild(h3IceConoSen);
    contIce.appendChild(priceIceConoSen);
    contIce.appendChild(h3IceConoDob);
    contIce.appendChild(priceIceConoDob);
    contIce.appendChild(h3IceCopaSen);
    contIce.appendChild(priceIceCopaSen);
    contIce.appendChild(h3IceCopaDob);
    contIce.appendChild(priceIceCopaDob);

    fragIceCream.appendChild(contIce)
    container.appendChild(fragIceCream);
})}