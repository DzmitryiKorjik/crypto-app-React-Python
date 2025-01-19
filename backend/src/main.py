from fastapi import FastAPI
# Importation de FastAPI pour créer l'application web.
from src.router import router as router_crypto
# Importation du routeur (les routes de l'API crypto) depuis le module `router`.
# Ces routes seront ajoutées à l'application FastAPI pour gérer les requêtes sur les données des cryptomonnaies.
from fastapi.middleware.cors import CORSMiddleware
# Importation de CORSMiddleware pour gérer les politiques de CORS (Cross-Origin Resource Sharing).

# Création de l'application FastAPI.
app = FastAPI()

# Inclusion du routeur de l'API crypto.
app.include_router(router_crypto)

# Définition des origines autorisées pour CORS.
origins = [
    "http://localhost:5173",  # URL locale pour le développement (généralement le serveur frontend).
    "http://127.0.0.1:5173",  # Autre URL locale pour le frontend.
    "http://localhost:8000",  # URL pour l'API.
    "http://127.0.0.1:8000",  # Autre URL pour l'API.
]

# Ajout du middleware CORS à l'application pour gérer les requêtes entre différents origines.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permet uniquement les origines définies ci-dessus.
    allow_credentials=True,  # Permet l'utilisation des cookies et des informations d'authentification.
    allow_methods=["*"],  # Permet toutes les méthodes HTTP (GET, POST, PUT, DELETE, etc.).
    allow_headers=["*"],  # Permet tous les en-têtes HTTP.
)

# Définition d'une route de base (pour tester l'application).
@app.get("/")
async def main():
    return {"message": "Hello World"}
    # La route retourne un message simple en JSON.
