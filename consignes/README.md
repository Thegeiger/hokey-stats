<p align="center">
  <a href="https://github.com/Maplr-Community/nodejs-test-hockey-game">
    <img src="https://maplr.co/wp-content/uploads/2019/12/Fichier-23@3x.png" alt="Logo" height="150">
  </a>
  <h3 align='center'>Test Développeur Fullstack JS intermédiaire</h3>  
  <br />
</p>


## Table des matières

- [Objectif du test](#objectif-du-test)
- [Présomptions](#présomptions)
- [Critères](#critères)
- [Outils à utiliser](#outils-à-utiliser)
- [Modèle](#modèle)
- [Endpoints](#endpoints)
  - [GET /api/team/{year}](#GET-/api/team/{year})
  - [POST /api/team/{Year}](#POST-/api/team/{year})
  - [PUT /api/player/captain/{ID}](#PUT-/api/player/captain/{ID})
- [Validation des endpoints](#validation-des-endpoints)
- [Soumettre le test](#soumettre-le-test)

## Objectif du test

Votre objectif pour ce test est de créer un API Rest avec node.js et express.js et une application web pour ajouter et obtenir les joueurs et les informations de l'équipe de Hockey des Canadiens du Montréal. Le but est donc d'avoir la composition de cette équipe pour chaque année ou elle a participé à la Ligue Nationale de Hockey.

### **Vous devez créer les endpoints suivants dans l'API:**

- Un GET pour obtenir la composition de l’équipe en fonction de l'année dans la base de données.
- Un POST pour t'ajouter en tant que nouveau joueur de l'équipe d'une année définie dans la base de données.
- Un PUT pour mettre à jour le capitaine de l'équipe pour une année définie.

### **Vous devez créer les fonctionnalités suivantes dans l'application web :**

- Listing des informations de l'équipe et des joueurs en fonction de l'année.
- Possibilité d'ajouter un joueur dans l'équipe d'une année.
- Possibilité de mettre un joueur en capitaine.

## **Présomptions**

- Ne vous souciez pas de valider l'entrée de l'utilisateur, vous pouvez présumer que la requête sera toujours valide.
- Il n'est pas nécessaire d'implémenter un mécanisme de sécurité.

## Critères

- 3 endpoints REST fonctionnels
- 3 fonctionnalités du Front End.
- Qualité du code
- Utilisation des meilleures pratiques de développement
- Documentation

## Outils à utiliser

- Node.js
- Framework JS
- Base de données SQL au choix (mysql, postgresql, mariadb etc..)
- Tests unitaire (Optionnel)
- Framework UI (Optionnel)
- Typescript (Optionnel)

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

## Endpoints

### GET /api/team/{year}

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

### POST /api/team/{Year}

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

### PUT /api/player/{ID}/captain/

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

## Validation des endpoints

Vous pouvez utiliser la collection postman incluse dans le projet si vous désirez valider votre API avec des assertions.

Celle-ci se retrouve dans le dossier **postman** du projet.

## Soumettre le test

Une fois terminé, veuillez créer un nouveau dépot sur GitHub et l'envoyer par courriel.

**Bonne chance et bon game ! 🏒**
