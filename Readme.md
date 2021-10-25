# Hokey-stats

## Table des révisions
Date | Auteur | Changements
--- | --- | ---
25/10/2021 | Anthony Geiger | Création du documment

## Table des matières

- [Versions](#Version)
- [Introduction](#Introduction)
- [Consignes](#Consignes)
- [Architecture Projet](#Architecture)
- [Front-end](#Front-end)
  - [Préambule](#Préambule)
  - [Setup](#Setup)
  - [Compostants](#Compostants)
- [Back-end](#Back-end)
  - [Setup](#Setup)
  - [Endpoints](#GET-/api/team/{year})
     - [GET /api/team/{year}](#GET-/api/team/{year})
     - [POST /api/team/{Year}](#POST-/api/team/{year})
     - [PUT /api/player/captain/{ID}](#PUT-/api/player/captain/{ID})
- [Model](#Model)

## Version

React 17.0
Node 16.12

## Introduction

Ce projet a pour but de créer une application permetant d'ajouter et et obtenir les joueurs et les informations de l'équipe de Hockey des Canadiens de Montréal, cette application permet d'avoir la composition de cette équipe pour chaque année ou elle a participé à la Ligue Nationale de Hockey. Mais permet aussi une edition des équipes afin de garder ces dernieres à jour.
A ce jour ce dernier et termier et aucune nouvelle fonctionnalité ne sera rajouté.

## Consignes

Toutes les consignes pour cet exercice ont été enregistrer dans le dossier `/consigne` nous avons fait en sorte de toujours charger directement les données depuis ce dossier afin de s'assurer que nous respections bien ces dernieres

## Architecture
```
.
├── client
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
├── consignes
│   ├── README.md
│   ├── data.json
│   ├── postman
│   │   └── hockey-game.json
│   └── schema.sql
├── node_modules
├── package-lock.json
├── package.json
└── server
    ├── data
    │   ├── command.js
    │   ├── connection.js
    │   ├── initData.js
    │   └── teams.js
    └── index.js
```
- Client : front-end dir
- Client/src : front-end src dir
- Server: backback files
- Server/data: data base files
- Consignes : Sources of this exercice

## Front-end

### Préambule

Notre front se compose d'un seul ecran permettant la vision l'équipe a chaque année depuis 2015, elle s'accompagne d'un formulaire tout en bas de la page permettant l'ajout de nouveau joueur dans l'équipe. Un client sur le logo capitaine (petit drapeau) permettra de changer sa valeur.

### Setup

Afin de démarrer le front il suffit simplement d'installer les module dans le dossier client de télécharger les module avec `npm install` puis lancer l'application avec `npm start`

### Composant

- [HokeyStat] - Composant corps du front qui lie les autres servant a recupérer et gerer les joueurs
- [YearPanel] - Gere le panel et decremente les années
- [HokeyList] - Composant corps de la liste permettant l'affichage de cette derniere.
- [Player] - Composant faisant partie d'HokeyList il est représenté par une simple row sur le front. Ce dernier gere lui meme le changement d'état de `is_capitaine`
- [PlayerCreation] - Est le composant gerant le formulaire ainsi que la requete de création de nouveau joueur.

## Back-end

### Setup

Afin de démarrer le back il suffit d'installer les module dans le dossier client de télécharger les module avec `npm install` puis lancer l'application avec `npm start`.
Si vous voulez charger automatiquement toutes les données nous avons fait un script que vous pouvez lancer avec `npm run` ce dernier créera vous base table et les remplira des données donné dans consigne.
N'oubliez pas de d'installer et lancer [mysql](https://www.mysql.com/) avant.

### Endpoints

#### GET /api/team/{year}

- Requête: Year dans l'URI
- Réponse: Objet Team (Voir modèle ci-dessus)
- Status: 200 OK

```
http://localhost:8080/api/team/2020 --header "Content-Type:application/json"

{
    "id": 1,
    "coach": "Dominique Ducharme"
    "year" : 2020
    "players": [
        {
            "number": 99,
            "name": "John",
            "lastname": "Doe",
            "position": "defenseman",
            "isCaptain" : false
        }
        [...]
    ]
}
```

#### POST /api/team/{Year}

- Requête: Objet Joueur dans le body
- Réponse: Objet Joueur crée
- Status: 201 CREATED

```
http://localhost:8080/api/player/2020 --header "Content-Type:application/json"

{
  "number":99,
  "name":"Antonin",
  "lastname":"Bouscarel",
  "position":"forward",
  "isCaptain" : false
}
```

#### PUT /api/player/{ID}/captain/

- Requête: ID du joueur dans l'URI
- Réponse: Objet Player
- Status: 200 OK

```
http://localhost:8080/api/player/9/captain

{
  "number":99,
  "name":"Antonin",
  "lastname":"Bouscarel",
  "position":"forward",
  "isCaptain" : true
}
```

## Modèle

Team

```
{
    "id": 1,
    "coach": "Dominique Ducharme"
    "year" : 2020
    "players": [
        {
            "number": 99,
            "name": "John",
            "lastname": "Doe",
            "position": "defenseman",
            "isCaptain" : false
        }
    ]
}
```