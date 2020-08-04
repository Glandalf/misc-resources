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
  L'usage de *simple quote*, *double quote* et de *back tick* semble donner le même résultat, mais il existe bien une différence. 
  - Les guillemets simple (*simple quote*) affiche fidelèment le texte contenu à l'intérieur, hormis d'autres guillemets simple (qu'il faudra alors **échapper** en mettant le caractère \ devant). 
  - Les guillemets doubles (*double quote*) affiche le texte contenu, mais permet aussi l'interprétation de variable si on les encadre par ${}. On appelle cela **l'interpolation**. On peut aussi rajouter des séquences de caractères spéciales, pour des sauts de ligne (`\n`), de tabulation (`\t`), ... Ce sont des *séquences d'échappement*.
  - Les *back tick* permettent, tout comme les guillemets double l'interpolation, mais aussi de saisir du texte sur plusieurs lignes, sans utiliser de caractères particuliers. On nomme cela des *littéraux de gabarits* (*Template string*). [Un peu de lecture](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits)

  `Math.floor()` semble tronquer un nombre décimal, pour ne garder que la partie entière.
  La fonction `Math.rand()` renvoi un nombre décimal compris entre 0 et 1 (exclu) : `[0-1[`. Comme on multiplie ce décimal par 50, on obtient de nouveau un décimal. Pour transformer ce décimal en nombre entier, on utilise `Math.floor()`.
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
