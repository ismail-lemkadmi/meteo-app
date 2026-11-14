# Weather App 🌤️

## Description

Weather App est une application web simple qui permet de rechercher une ville et d'afficher les informations météorologiques actuelles ainsi que les prévisions pour les 5 prochains jours.

Ce projet est réalisé dans le cadre de ma formation à YouCode.

## Technologies utilisées

- HTML5 : structure de la page
- CSS3 : design et responsive
- JavaScript : DOM, événements et Fetch API
- Open-Meteo API : récupération des données météo

## Fonctionnalités

- Rechercher une ville.
- Vérifier si le champ de recherche est vide.
- Afficher un message de chargement.
- Récupérer les données avec Fetch API.
- Afficher la température actuelle.
- Afficher l'humidité et la vitesse du vent.
- Afficher les prévisions des 5 prochains jours.
- Afficher les dates en français.
- Afficher un message si une donnée est indisponible.

## Structure du projet

- `index.html` : structure HTML de l'application.
- `style.css` : mise en forme de l'application.
- `script.js` : fonctionnalités JavaScript.
- `README.md` : documentation du projet.

## Installation

1. Télécharger le projet depuis GitHub.
2. Ouvrir le dossier dans VS Code.
3. Ouvrir le fichier `index.html` dans le navigateur, par exemple avec Live Server.
4. Entrer le nom d'une ville et cliquer sur le bouton de recherche.

Une connexion Internet est nécessaire pour récupérer les données météo.

## API utilisée

Le projet utilise l'API gratuite Open-Meteo.

- Geocoding API : rechercher une ville et récupérer ses coordonnées.
- Forecast API : récupérer la météo actuelle et les prévisions.

Site officiel : https://open-meteo.com/

## Améliorations futures

- Améliorer l'affichage des erreurs.
- Ajouter plus de conditions météorologiques.
- Améliorer le design sur mobile.