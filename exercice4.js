const prompt = require("prompt-sync")();

// ALGORITHME calcImcAvecInterpretation
// DEBUT
//     VARIABLE poids, taille, imc : REEL
let poids;
let taille;
let imc;

//     ECRIRE("Entrez votre poids : ", poids)
//     LIRE (poids)
poids = parseFloat(prompt("Entrez votre poids : "));

//     ECRIRE("Entrez votre taille : ", taille)
//     LIRE(taille)
taille = parseFloat(prompt("Entrez votre taille en m : "));

//     imc <- poids/taille * taille
imc = poids / (taille * taille);

//     SI imc < 18.5 ALORS
//         ECRIRE("Votre IMC est de : ", imc," - vous avez une insuffisance ponderale")
if (imc < 18.5) {
  console.log(
    "Votre IMC est de : ",
    imc,
    " - vous avez une isuffisance ponderale",
  );
  //     SINON SI imc > 18.4 ET < 25
  //         ECRIRE("Votre IMC est de : ", imc," - votre poids est normal")
} else if (imc > 18.4 && imc < 25) {
  console.log("Votre IMC est de : ", imc, " - votre poids est normal");
}
//     SINON SI imc > 24.9 ET < 30
//         ECRIRE("Votre IMC est de : ", imc," - vous êtes en surpoids")
else if (imc > 24.9 && imc < 30) {
  console.log("Votre IMC est de : ", imc, " - vous êtes en surpoids");
}
//     SINON SI imc > 29
//         ECRIRE("Votre IMC est de : ", imc," - vous êtes en obesite")
else if (imc > 29) {
  console.log("Votre IMC est de : ", imc, " - vous êtes en obesite");
}
//     FIN SI
// FIN
