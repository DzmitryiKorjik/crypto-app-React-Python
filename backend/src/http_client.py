from aiohttp import ClientSession
# Importation de ClientSession pour effectuer des requêtes HTTP asynchrones.
from async_lru import alru_cache
# Importation de alru_cache pour ajouter un cache LRU (Least Recently Used) aux fonctions asynchrones.

class HTTPClient:
    # Classe de base pour le client HTTP.

    def __init__(self, base_url: str, api_key: str):
        # Initialisation du client HTTP avec une URL de base et une clé API.
        self._session = ClientSession(
            base_url=base_url,
            # Définition de l'URL de base pour toutes les requêtes.
            headers={
                'X-CMC_PRO_API_KEY': api_key,
                # Ajout d'un en-tête pour l'authentification avec l'API.
            }
        )

class CMCHTTPClient(HTTPClient):
    # Classe spécifique pour l'API CoinMarketCap, héritée de HTTPClient.

    @alru_cache
    async def get_listings(self):
        # Méthode pour récupérer la liste des cryptomonnaies disponibles.
        # Utilisation de alru_cache pour éviter des requêtes répétées identiques.
        async with self._session.get("/v1/cryptocurrency/listings/latest") as resp:
            # Effectue une requête GET vers l'endpoint /v1/cryptocurrency/listings/latest.
            result = await resp.json()
            # Analyse la réponse JSON.
            return result["data"]
            # Retourne uniquement la section "data" de la réponse.

    @alru_cache
    async def get_currency(self, currency_id: int):
        # Méthode pour récupérer les détails d'une cryptomonnaie spécifique par son ID.
        async with self._session.get(
            "/v2/cryptocurrency/quotes/latest",
            params={"id": currency_id}
            # Ajout du paramètre ID dans la requête pour spécifier la cryptomonnaie.
        ) as resp:
            result = await resp.json()
            # Analyse la réponse JSON.
            return result["data"][str(currency_id)]
            # Retourne les données associées à l'ID spécifié.
