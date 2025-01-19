from fastapi import APIRouter
# Importation de la classe APIRouter qui permet de créer un routeur pour gérer des routes spécifiques à un sous-ensemble de l'application.

from fastapi.responses import JSONResponse
# Importation de JSONResponse pour envoyer des réponses JSON personnalisées avec un statut HTTP.

from src.init import cmc_client
# Importation du client API CMCHTTPClient à partir du module `init` pour interagir avec l'API CoinMarketCap.

# Création du routeur pour les cryptomonnaies avec un préfixe "/cryptocurrencies".
router = APIRouter(
    prefix="/cryptocurrencies",  # Tous les chemins de ce routeur commenceront par "/cryptocurrencies".
    tags=["cryptocurrencies"]  # Tag qui est ajouté pour mieux organiser les routes dans la documentation.
)

# Route pour récupérer la liste des cryptomonnaies.
@router.get("/")
async def get_cryptocurrencies():
    try:
        # Appel de la méthode `get_listings` du client CoinMarketCap pour obtenir la liste des cryptomonnaies.
        return await cmc_client.get_listings()
    except Exception as e:
        # Si une erreur se produit, retourner une réponse JSON avec le message d'erreur et un statut 500 (erreur serveur).
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Route pour récupérer une cryptomonnaie spécifique par son identifiant.
@router.get("/{currency_id}")
async def get_cryptocurrency(currency_id: int):
    try:
        # Appel de la méthode `get_currency` du client CoinMarketCap pour obtenir les détails de la cryptomonnaie par son ID.
        return await cmc_client.get_currency(currency_id)
    except Exception as e:
        # En cas d'erreur, une réponse JSON avec l'erreur et un statut 500.
        return JSONResponse(content={"error": str(e)}, status_code=500)
