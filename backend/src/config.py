from pydantic_settings import BaseSettings, SettingsConfigDict
# Importation de BaseSettings et SettingsConfigDict depuis pydantic_settings.
# BaseSettings est utilisé pour gérer les configurations à partir de variables d'environnement ou de fichiers.

class Settings(BaseSettings):
    # Définition d'une classe pour les paramètres de configuration
    CMC_API_KEY: str
    # Clé d'API de CoinMarketCap (CMC_API_KEY), qui doit être une chaîne de caractères (str).
    # Cette clé est requise pour accéder à l'API de CoinMarketCap.

    model_config = SettingsConfigDict(env_file=".env")
    # Configuration pour indiquer que les paramètres doivent être chargés depuis un fichier .env.

# Création d'une instance de la classe Settings
settings = Settings()
# Cette instance charge les paramètres à partir des variables d'environnement définies dans le fichier .env.
