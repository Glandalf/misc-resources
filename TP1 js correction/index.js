// Notre jeu tourne tant qu'un joueur a encore de la vie, on peut ici paramétrer les noms et vie des joueurs.
const player1 = 'coincoin';
const player2 = 'john';
let player1Life = 100;  // On pourrait multiplier la vie par 3 pour que le combat dure 3 fois plus longtemps
let player2Life = 100;

console.clear();
console.log('/////////////////////////////////////');
console.log('  C\'est l\'heure du dueeeeeeeeel !');
console.log(`/////////////////////////////////////`);
console.log('');
// A chaque tour les deux joueurs attaquent, jusqu'au tour ou l'un d'eux n'a plus de vie.
while (player1Life > 0 || player2Life > 0) {
    const puissanceAttaque1 = Math.floor(Math.random() * 50);
    const puissanceAttaque2 = Math.floor(Math.random() * 50);

    console.log('');
    console.log(`${player1} (${player1Life})  -  ${player2} (${player2Life})`);

    console.log(`Bobby attaque et enlève ${puissanceAttaque1} points de vie`);
    if(player1Life < 20) {
        // Il doit prendre une potion
        // player1Life += 60;
        // let pv = Math.random() * 60 // Donne un nombre entre 0 et 60
        // pv += 30; // On ajoute 30 => on a un nombre entre 30 et 90
        player1Life += Math.floor() * 60 + 30; // On regroupe les deux lignes du dessus en une seule
    }
    else if(Math.random() > 0.1) {
        player2Life = player2Life - puissanceAttaque1;
    } 
    else {
        console.log('Fail !!!');
    }
    if(Math.random() > 0.1 && player2Life > 0) { // le joueur 2 n'attaque que s'il lui reste des PV.
        console.log(`Bybbo attaque et enlève ${puissanceAttaque2} points de vie`);
        player1Life = player1Life - puissanceAttaque2;
    }
    else {
        console.log('Fail !!!');
    }
}

// Une fois le combat fini on affiche les résultats pour l'utilisateur
console.log("/////////////////////////////////////");
console.log(player1Life > 0 ? `${player1} est vainqueur` : ``);
console.log(player2Life > 0 ? `${player2} est vainqueur` : ``);
if (player1Life > 0) {
    console.log("C'est un peu comme si c'est toi le joueur 1, alors bravo (même si tu n'as rien fait...).")
}