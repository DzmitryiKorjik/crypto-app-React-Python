import React, { useEffect, useState } from "react"; // Importation de React, ainsi que des hooks useEffect et useState
import { Menu } from "antd"; // Importation du composant Menu depuis Ant Design
import axios from "axios"; // Importation d'Axios pour gérer les requêtes HTTP

const MyMenu = ({ onCurrencyChange }) => {
  // Déclaration des états
  const [currencies, setCurrencies] = useState([]); // Liste des cryptomonnaies
  const [currenciesId, setCurrenciesId] = useState(1); // ID de la cryptomonnaie sélectionnée
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

  // Fonction pour récupérer toutes les cryptomonnaies
  const fetchCurrencies = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/cryptocurrencies"); // Requête vers l'API
      setCurrencies(response.data); // Stockage des données dans l'état
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error.message); // Gestion des erreurs
    }
  };

  // Fonction pour récupérer les détails d'une cryptomonnaie
  const fetchCurrency = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/cryptocurrencies/${currenciesId}` // Requête avec l'ID de la cryptomonnaie
      );
      onCurrencyChange(response.data); // Transmission des données au composant parent via une fonction
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error.message); // Gestion des erreurs
    }
  };

  // Exécution de fetchCurrencies au montage du composant
  useEffect(() => {
    fetchCurrencies(); // Chargement initial des cryptomonnaies
  }, []);

  // Mise à jour de la cryptomonnaie sélectionnée lorsqu'on change currenciesId
  useEffect(() => {
    fetchCurrency(); // Mise à jour des détails affichés
  }, [currenciesId]);

  // Configuration des éléments du menu
  const items = [
    {
      key: "g1", // Identifiant du groupe
      label: "Liste des cryptomonnaies", // Titre du groupe
      type: "group", // Type de l'élément
      children: currencies.map((currency) => ({
        key: currency.id.toString(), // Identifiant de chaque cryptomonnaie
        label: currency.name, // Nom de la cryptomonnaie
      })),
    },
  ];

  // Gestion du clic sur un élément du menu
  const onClick = (e) => {
    setCurrenciesId(parseInt(e.key, 10)); // Mise à jour de l'ID de la cryptomonnaie
    setIsMenuOpen(false); // Fermeture du menu après le clic
  };

  return (
    <div className="relative">
      {/* Bouton pour ouvrir/fermer le menu burger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle pour afficher ou cacher le menu
        className="fixed top-4 left-4 z-50 bg-slate-700 text-white p-2 rounded-md shadow-lg md:hidden" // Styles pour positionner et styliser le bouton
      >
        {isMenuOpen ? "✖" : "☰"} {/* Icône qui change en fonction de l'état du menu */}
      </button>

      {/* Conteneur du menu */}
      <div
        className={`fixed top-0 left-0 h-screen bg-slate-700 text-white shadow-lg p-4 z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full" // Animation pour faire glisser le menu
        } md:static md:translate-x-0 md:block w-[280px]`}
      >
        {/* Composant Menu d'Ant Design */}
        <Menu
          onClick={onClick} // Gestion du clic sur un élément
          className="w-full h-full overflow-scroll text-base font-bold bg-slate-700 text-white p-1" // Styles globaux du menu
          defaultSelectedKeys={[currenciesId.toString()]} // Sélection par défaut
          mode="inline" // Mode d'affichage du menu
          items={items.map((item) => ({
            ...item,
            className: "hover:bg-slate-400 rounded-md transition-all", // Styles pour les éléments du menu
          }))}
        />
      </div>
    </div>
  );
};

export default MyMenu; // Exportation du composant pour utilisation dans d'autres fichiers
