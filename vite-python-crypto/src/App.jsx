import React, { useState } from "react"; // Importation de React et du hook useState
import CryptocurrencyCard from "./components/CryptocurrencyCard"; // Importation du composant CryptocurrencyCard
import MyMenu from "./components/MyMenu"; // Importation du composant MyMenu
import { Spin } from "antd"; // Importation du composant Spin (loader) d'Ant Design

function App() {
  // État pour stocker les données de la cryptomonnaie sélectionnée
  const [currencyData, setCurrencyData] = useState(null);

  return (
    <>
      {/* Transmet la fonction setCurrencyData au composant MyMenu */}
      <MyMenu onCurrencyChange={setCurrencyData} />
      {/* Si des données sont disponibles, afficher CryptocurrencyCard, sinon afficher le loader Spin */}
      {currencyData ? <CryptocurrencyCard currency={currencyData} /> : <Spin />}
    </>
  );
}

export default App; // Exportation du composant principal App
