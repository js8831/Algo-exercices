const prompt = require("prompt-sync")();

// ALGORITHME calcPrixTtcAvecRemise
// DEBUT
//     // Declaration
//     VARIABLE prixHt, tauxRemise, montantRemise, tauxTva, montantTva, prixTtc : REEL
let prixHt;
let tauxRemise;
let montantRemise;
let tauxTva;
let montantTva;
let prixFinal;
let prixTtc;

//     //Entrées
//     ECRIRE("Entrez le prix HT : ", prixHt)
//     LIRE(prixHt)
prixHt = parseFloat(prompt("Entrez le prix HT : "));

//     ECRIRE("Entrez le taux de remise : ", tauxRemise)
//     LIRE(remise)
tauxRemise = parseFloat(prompt("Entrez le taux de remise : "));

//     ECRIRE("Entrez le taux de TVA : ", tauxTva)
//     LIRE(tauxTva)
tauxTva = parseFloat(prompt("Entrez le taux de TVA : "));

//     // Traitement
//     montantRemise <- prixHt * tauxRemise
montantRemise = (prixHt * tauxRemise) / 100;
//     prixFinal <- prixHt - montantRemise
prixFinal = prixHt - montantRemise;
//     montantTva <- prixHt * tauxTva
montantTva = (prixFinal * tauxTva) / 100;
//     prixTtc <- prixHt - remise + montantTva
prixTtc = prixFinal + montantTva;

//     // Sortie
//     ECRIRE("Le montant de la remise est de : ", remise)
console.log(`Le montant de la remise est de : ${montantRemise} euros`);
//     ECRIRE("Le prix final est de : ", prixFinal)
console.log(`Le prix final est de : ${prixFinal} euros`);
//     ECRIRE("Le montant de la TVA est de : ", montantTva)
console.log(`Le montant de la TVA est de : ${montantTva} euros`);
//     ECRIRE("Le prix TTC est de : ", prixTtc)
console.log(`Le prix TTC est de : ${prixTtc} euros`);
// FIN
