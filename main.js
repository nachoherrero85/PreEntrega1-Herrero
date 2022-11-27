alert("Vamos a pedirte un par de datos para calcular el consumo de tu auto y que modelos tienen consumo similar, los cuales seran mostrados en consola");
let tanque = parseInt(prompt("Cual es la capacidad de tu tanque en litros?"));
let distancia_recorrida = parseInt(prompt("Cuanto recorriste con el tanque?"));
let consumo_combustible = parseInt((tanque / distancia_recorrida) * 100);
let modeloSimilar;

if (consumo_combustible > 10) {
    console.log(`Tu consumo ${consumo_combustible}L c/100 KM, tu consumo está por encima de la media`);
}
else if (consumo_combustible < 10 && consumo_combustible > 8) {
    console.log(`Tu consumo ${consumo_combustible}L c/100km, lo cual se considera consumo dentro de la media`);
}
else {
    console.log(`Tu consumo ${consumo_combustible}L c/100km,  el cual está por debajo de la media, excelente!`);
}


let segmento = prompt("Ingrese el segmento con el que quiere comparar para ver cual modelo de ese grupo se asemeja a su consumo: COMPACTO, MEDIO, GRANDE (Mayúsculas o minúsculas)").toUpperCase();

switch (segmento) {
    case "GRANDE":
        if (consumo_combustible > 10) {
            modeloSimilar = "Haval H6,Jeep Compass,FIAT Toro,Jeep Renegade ";
        } else if (consumo_combustible < 10 && consumo_combustible > 8) {
            modeloSimilar = "Chevrolet Equinox, Hyundai Kona";
        } else {
            modeloSimilar = "VW Tiguan Allspace,Peugeot 308 S GT";
        }
        break;
    case "MEDIO":
        if (consumo_combustible > 10) {
            modeloSimilar = "BMW X3 M40i"
        } else if (consumo_combustible < 10 && consumo_combustible > 8) {
            modeloSimilar = "VW Virtus, Chery Arrizo 5, Ford Ecosport";
        } else {
            modeloSimilar = "Citroën C4 Lounge, BMW 330ia";
        }
        break;
    case "COMPACTO":
        if (consumo_combustible > 10) {
            modeloSimilar = "Ferrari Roma, Ferrari GTC4Lusso T "
        } else if (consumo_combustible < 10 && consumo_combustible > 8) {
            modeloSimilar = "Chevrolet Onix, FIAT Uno Way, Audi Q2";
        } else {
            modeloSimilar = "Chevrolet Onix Plus, VW Up! TSi";
        }
        break;
    default:
        alert("Por favor use las opciones disponibles y vuelva a intentarlo, gracias!");
        break;


}

console.log(`En base al consumo de tu auto y lo ingresado, estos modelos son los similares en consumo: ${modeloSimilar}`);