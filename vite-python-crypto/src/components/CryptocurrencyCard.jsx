import React from "react";

// Composant pour afficher les détails d'une cryptomonnaie sélectionnée
const CryptocurrencyCard = ({ currency }) => {
  // Si aucune cryptomonnaie n'est sélectionnée, afficher un message d'information
  if (!currency) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-lg text-gray-500">
          Veuillez sélectionner une cryptomonnaie pour voir les détails. {/* Message pour inviter l'utilisateur à sélectionner une cryptomonnaie */}
        </p>
      </div>
    );
  }

  // Affichage des détails de la cryptomonnaie sélectionnée
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-400 shadow-lg rounded-lg p-6 w-96 text-center">
      {/* Titre contenant le nom et le symbole de la cryptomonnaie */}
      <h2 className="text-2xl font-bold mb-4">
        {currency.name} ({currency.symbol})
      </h2>
      {/* Logo de la cryptomonnaie */}
      <img
        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} // URL dynamique pour récupérer le logo
        alt={`Logo de ${currency.name}`} // Texte alternatif pour l'accessibilité
        className="w-16 h-16 mx-auto mb-4" // Styles pour centrer et dimensionner l'image
      />
      {/* Affichage du rang */}
      <p className="text-lg mb-2">
        <strong>Rang:</strong> #{currency.cmc_rank}
      </p>
      {/* Affichage du prix actuel */}
      <p className="text-lg mb-2">
        <strong>Prix:</strong> {currency.quote.USD.price.toFixed(2)} $ {/* Prix formaté à deux décimales */}
      </p>
      {/* Affichage de la capitalisation boursière */}
      <p className="text-lg mb-2">
        <strong>R. Capitalisation:</strong>{" "}
        {currency.quote.USD.market_cap.toLocaleString()} $ {/* Valeur formatée avec des séparateurs de milliers */}
      </p>
      {/* Volume d'échange sur 24 heures */}
      <p className="text-lg mb-2">
        <strong>Volume (24h):</strong>{" "}
        {currency.quote.USD.volume_24h.toLocaleString()} $
      </p>
      {/* Changement du prix sur les dernières 24 heures */}
      <p className="text-lg mb-2">
        <strong>Changement (24h):</strong>{" "}
        {currency.quote.USD.percent_change_24h.toFixed(2)}%
      </p>
      {/* Changement du prix sur les 7 derniers jours */}
      <p className="text-lg mb-2">
        <strong>Changement (7j):</strong>{" "}
        {currency.quote.USD.percent_change_7d.toFixed(2)}%
      </p>
      {/* Note informant que les données sont en temps réel */}
      <p className="text-sm text-gray-500 mt-4">
        * Données mises à jour en temps réel.
      </p>
    </div>
  );
};

export default CryptocurrencyCard; // Exportation du composant pour l'utiliser dans d'autres parties de l'application
