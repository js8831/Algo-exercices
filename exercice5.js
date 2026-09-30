const prompt = require("prompt-sync")();
// ALGORITHME devisPeinture
// DEBUT
//     VARIABLE longueur, largeur : ENTIER
let longueur;
let largeur;
//     VARIABLE hauteur : REEL
let hauteur;

//     ECRIRE("Entrer la longueur : ", longueur)
//     LIRE (longueur)
longueur = parseFloat(prompt("Entrer la longueur : "));

//     ECRIRE("Entrer la largeur : ", largeur)
//     LIRE (largeur)
largeur = parseFloat(prompt("Entrer la largeur : "));

//     ECRIRE("Entrer la hauteur : ", hauteur)
//     LIRE(hauteur)
hauteur = parseFloat(prompt("Entrer la hauteur : "));

//     surfaceNette <- ((longueur+largeur) *2)*0.8
let surfaceNette = (longueur + largeur) * 2 * hauteur * 0.8;

//     nmbrPot <- surfaceNette/10
let nmbrPot = surfaceNette / 10;
let nmbrPotArr = Math.ceil(nmbrPot);

//     prixPot <- 29.90
let prixPot = 29.9;

//     prixTotal <- prixPot * nmbrPot
let prixTotal = prixPot * nmbrPotArr;
let prixTotalArr = prixTotal.toFixed(2);

//     ECRIRE("La surface nette est de : ", surfaceNette)
console.log(`La surface nette est de : ${surfaceNette}m²`);
//     ECRIRE("Le nombre de pots est de : ", nmbrPot)
console.log(`Le nombre de pots est de : ${nmbrPotArr}`);
//     ECRIRE("Et le prix total est de : ", prixTotal)
console.log(`Et le prix total est de : ${prixTotalArr} €`);
// FINv
