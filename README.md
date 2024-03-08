# README

## Entités ajoutées

### Catégorie

Une entité `Catégorie` a été ajoutée avec les propriétés suivantes :
- `id` : de type `Long`.
- `nom` : de type `String` avec une longueur de 3 à 30 caractères.

### Enrichissement de l'entité Produit

L'entité `Produit` a été enrichie avec une référence à la `Catégorie` :
- Cette référence peut être nulle.
- Elle utilise obligatoirement la colonne nommée "id_categorie" dans la table.

## Création de données initiales

Pour initialiser la base de données avec des données de départ, j'ai réalisé ce qui suit :

1. **Création de 3 premières catégories**
   - J'ai implémenté un code Java de type CommandLineRunner pour créer ces catégories.

2. **Création d'un produit associé à chaque catégorie**
   - Un produit a été créé pour chaque catégorie initiale. Les autres produits sont donc sans catégorie.

## Affichage des catégories dans la liste des produits

Dans la liste des produits affichés, j'ai pris en compte la possibilité que la catégorie puisse être nulle. Ainsi, les produits sans catégorie sont correctement traités.

## Modification de la catégorie d'un produit existant

J'ai implémenté une fonctionnalité permettant de modifier la catégorie d'un produit existant. L'utilisateur peut choisir une nouvelle catégorie parmi celles disponibles ou laisser le produit sans catégorie.

## Choix de la catégorie lors de la création d'un nouveau produit

Lors de la création d'un nouveau produit, l'utilisateur a la possibilité de choisir la catégorie associée au produit parmi celles disponibles.

## Liste, création et modification des catégories

J'ai mis en place des fonctionnalités permettant de lister, créer et modifier les catégories dans l'application. Cela inclut l'affichage de la liste des catégories disponibles, la possibilité d'en créer de nouvelles et de modifier les informations des catégories existantes.
