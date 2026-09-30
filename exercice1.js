const prompt = require("prompt-sync")();

// ALGORITHME conversionCelsiusEnFahreinheit
// DEBUT
//     // Declaration
//     VARIABLE tempCelsius : ENTIER
let tempCelsius = 0;
//     VARIABLE tempFahrenheit : ENTIER
let tempFahrenheit = 0;

//     // Entrée (saisie utilisateur)
//     ECRIRE("Entrez la température en celsius :", tempCelsius)
//     LIRE (tempCelsius)
tempCelsius = parseFloat(prompt("Entrez la température en celsius : "));

//     // Traitement
//     tempFahrenheit <- tempCelsius * 9/5 + 32
tempFahrenheit = (tempCelsius * 9) / 5 + 32;

//     // Sortie
//     ECRIRE("La Température en fahrenheit est de", tempFahrenheit, "degrés")
console.log(`La Température en fahrenheit est de ${tempFahrenheit} degrès`);
// FIN
