# Retour sur le TP1 de JS

## Etape 1

Pour lancer un programme JS en console, on peut taper :
```bash
node index.js
```

Ce script simule un combat entre deux joueurs, chacun attaque à chaque tour. Lorsqu'un joueur un joueur n'a plus de vie, le jeu s'arrête et affiche le vainqueur.

`const` permet de **déclarer** une constante. `let` s'utilise de la même manière. Il permet visiblement de **déclarer** des constantes MAIS dont on peut changer la valeur. On appelle ça une variable.

> var = berk

L'**objet** `console` permet de manipuler l'affichage dans notre terminal. On appelle souvent le terminal une "console".L'usage de *simple quote*, *double quote* et de *back tick* semble donner le même résultat.

`Math.floor()` semble tronquer un nombre décimal, pour ne garder que la partie entière.

`while` permet de répéter plusieurs fois tout le code qui va se trouver entre ses accolades.
> c'est ce qu'on appelle une boucle

Les trois dernières lignes permettent d'afficher que le joueur 1 a gagné s'il a effectivement gagné.
Sinon, rien ne s'affiche
> on parle de structures conditionnelles ou conditions

## Etape 2

Pour que le combat dure 3 fois plus, on peut :

* multiplier la vie par 3
* diviser la puissance des attaques par 3
* faire réussir les attaques en moyenne une fois sur 3

Si je sors mes deux constantes du while, la valeur des attaques est définie une fois avant de rentrer dans les boucles, puis reste la même tout au long du combat.

Dans les console.log (lignes 20 et 23), je devrais remplacer les noms "écrits en dur" (*hard coded*) par les variables correspondantes.

Si je remplace mon *and* par *or* le jeu ne s'arrete plus quand au moins un joueur n'a plus de vie mais quand les deux joueurs n'ont plus de vie.

Le jeu est injuste car même si le joueur 2 n'a plus de point de vie, il peut fait encore une attaque (ligne 24). C'est un premier élément mais c'est pas le pire.
Ligne 30, si les deux joueurs sont à 0 (match nul théoriquement), on dit que le joueur 2 gagne...

la ligne 28 dans le script original est une **expression ternaire**. "Si X, alors Fais Y, sinon, fais Z".

## Etape 3

Pour rendre le jeu juste, on modifie le test de fin pour dire qui est vainqueur ET on ne permet au joueur 2 d'attaquer que s'il lui reste de la vie.

