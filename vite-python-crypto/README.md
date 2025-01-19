# React + Vite + Python + venv

## Description

Cette application permet de consulter les données des cryptomonnaies en temps réel. Elle utilise l'API CoinMarketCap pour récupérer la liste des cryptomonnaies et leurs informations détaillées telles que le prix, la capitalisation boursière et les variations de prix. Le frontend est développé avec React et Vite, et le backend utilise FastAPI en Python avec la gestion des environnements virtuels via `venv`.

### Objectifs pédagogiques

L'objectif principal de cette application est de mettre en œuvre une solution full-stack combinant :
- La consommation d'API RESTful (via CoinMarketCap) dans un environnement backend Python avec FastAPI.
- La création d'une interface utilisateur dynamique en React avec un build optimisé grâce à Vite.
- L'utilisation de l'authentification par clé API pour accéder aux données sécurisées.
- La gestion des environnements virtuels avec `venv` pour isoler les dépendances du projet.

## Fonctionnalités principales

- **Affichage des cryptomonnaies** : Liste des cryptomonnaies avec leurs informations principales (prix, rang, capitalisation, volume, etc.).
- **Sélection d'une cryptomonnaie** : Affichage des informations détaillées sur une cryptomonnaie sélectionnée.
- **Menu interactif** : Menu de navigation pour accéder à la liste des cryptomonnaies et leurs détails.
- **Design réactif** : Interface adaptée pour les appareils mobiles avec un menu hamburger.
- **Mise à jour en temps réel** : Les données de chaque cryptomonnaie sont mises à jour dynamiquement en fonction de l'API.

### Points clés de l'architecture :

- **Frontend (React + Vite)** : 
  - Utilisation de React pour gérer l'interface utilisateur.
  - Vite pour un développement rapide avec un hot-reload efficace.
  - Tailwind CSS pour un design moderne et réactif.

- **Backend (Python + FastAPI)** :
  - FastAPI pour créer des APIs rapides et modernes.
  - Aiohttp pour effectuer des requêtes asynchrones vers l'API CoinMarketCap.
  - Pydantic pour la validation des données d'entrée et de sortie.
  - Cache des résultats avec `async_lru` pour améliorer les performances des requêtes API répétées.

## Ressources utilisées 📚

- [CoinMarketCap API](https://coinmarketcap.com/api/) : Fournisseur des données de cryptomonnaies.
- [React](https://reactjs.org/) : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- [Vite](https://vitejs.dev/) : Outil de construction rapide pour les applications JavaScript.
- [FastAPI](https://fastapi.tiangolo.com/) : Framework Python pour la création d'APIs rapides.
- [Tailwind CSS](https://tailwindcss.com/) : Framework CSS pour un design rapide et modulaire.
- [Aiohttp](https://docs.aiohttp.org/en/stable/) : Bibliothèque Python pour effectuer des requêtes HTTP asynchrones.
- [Pydantic](https://pydantic-docs.helpmanual.io/) : Validation des données avec Python.

## Fonctionnement
### Installation

#### Frontend (React + Vite)
1. Clonez le projet :
```bash
git clone https://github.com/DzmitryiKorjik/crypto-app-React-Python.git
cd crypto-app-React-Python
```

2. Installez les dépendances : 
```
npm install
npm run dev
```

3. L'application frontend sera accessible sur 
```
http://localhost:5173
```
#### Backend (Python + FastAPI)

1. Créez un environnement virtuel :
```
python -m venv venv
```
2. Activez l'environnement virtuel :
```
.\venv\Scripts\activate
```
3. Installez les dépendances :
```
pip install -r requirements.txt
```
4. réez un fichier .env dans le répertoire principal et ajoutez votre clé API CoinMarketCap :
```
CMC_API_KEY=your-api-key
```
5. Lancez le serveur FastAPI :
```
uvicorn src.main:app --reload
```

6. L'API backend sera accessible sur
```
http://localhost:8000.
```

### Explications techniques

- **Frontend :** L'application frontend est construite avec React pour une interface dynamique et réactive. Vite permet une expérience de développement rapide avec un build optimisé.
- **Backend :** Le backend utilise FastAPI pour créer des endpoints RESTful, offrant des performances rapides. L'application backend communique avec - **l'API** CoinMarketCap via un client HTTP personnalisé (utilisant aiohttp pour les requêtes asynchrones).
- **Cache :** Les réponses de l'API sont mises en cache pour éviter de multiplier les appels aux mêmes endpoints.

### Déploiement

- **Backend :** Déployez le backend sur un serveur capable d'exécuter FastAPI (par exemple, sur Heroku, DigitalOcean, ou AWS EC2).
- **Frontend :** Déployez le frontend sur une plateforme comme Vercel, Netlify ou tout autre service supportant les applications React.
- **Configurer l'API :** Assurez-vous que le fichier .env avec la clé API est correctement configuré sur le serveur de production.

## Auteur
- **Nom :** Mardovitch Dzmitryi
- **Formation :** Développement Web et Web Mobile.
- **Objectif :** Validation des compétences en création et déploiement d'applications web.

## Améliorations possibles 🚀

- **Authentification :** Ajouter un système d'authentification pour sécuriser l'accès aux données.
- **Support d'autres cryptomonnaies :** Ajouter la possibilité de filtrer ou de rechercher des cryptomonnaies spécifiques.
- **Performance :** Optimiser davantage les appels API en utilisant un cache plus robuste (par exemple, Redis).
- **Tests :** Ajouter des tests unitaires et d'intégration pour vérifier le bon fonctionnement du backend et du frontend.