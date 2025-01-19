from src.config import settings
# Importation de la configuration à partir du module `config`.
# `settings` contient des paramètres, comme la clé API, qui sont chargés depuis un fichier .env ou des variables d'environnement.

from src.http_client import CMCHTTPClient

# Importation de la classe `CMCHTTPClient`, qui est utilisée pour interagir avec l'API CoinMarketCap.

# Initialisation d'un client HTTP pour CoinMarketCap.
cmc_client = CMCHTTPClient(
    base_url='https://pro-api.coinmarketcap.com',
    # L'URL de base de l'API CoinMarketCap, utilisée pour toutes les requêtes.

    api_key=settings.CMC_API_KEY
    # La clé API est récupérée à partir des paramètres de configuration.
    # La variable `CMC_API_KEY` est définie dans le fichier `.env` ou via les variables d'environnement.
)
