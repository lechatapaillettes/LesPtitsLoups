import React from "react";
import logoOphc from "../../assets/images/partners/office-Public-de-l-Habitat-de-Coulommiers.png";

const Partners = () => {
  return (
    <div>
      <aside>
        <h3>Nos partennaires</h3>
        <div class="container__logos">
          <a href="http://www.ophcoulommiers.ovh/" target="_blank">
            <img
              src={logoOphc}
              alt="Logo Office Public de l'Habitat de Coulommiers"
              class="logo-ophc"
            />
          </a>
          <a href="http://www.microcrechelesptitesbouilles.fr/" target="_blank">
            <img
              src="../images/logo-ptites-bouilles.jpg"
              alt="Logo Micro-Crèche Les P'tites Bouilles"
              class="logo-ptites-bouilles"
            />
          </a>
          <a href="" target="_blank">
            <img src="../images/logo-msa.png" alt="Logo MSA" class="logo-msa" />
          </a>
          <a href="https://www.crechesoissonssud.com/" target="_blank">
            <img
              src="../images/creche-soissons-sud.jpg"
              alt="Micro-Crèche Les Diablotins"
              class="les-diablotins"
            />
          </a>
          <a href="https://www.entreprise-nivault.fr/" target="_blank">
            <img
              src="../images/logo-Entreprise-Nivault.png"
              alt="Logo Entreprise Nivault"
              class="logo-nivault"
            />
          </a>
          <a href="https://www.cic.fr/fr/" target="_blank">
            <img
              src="../images/logo-cic.png"
              alt="Logo CIC Banques"
              class="logo-cic"
            />
          </a>
          <a href="https://www.caf.fr/" target="_blank">
            <img
              src="../images/logo-caf.png"
              alt="Logo CAF Seine-et-Marne"
              class="logo-caf"
            />
          </a>
          <a href="https://www.seine-et-marne.fr/fr" target="_blank">
            <img
              src="../images/logo-Conseil-General-Seine-et-Marne.png"
              alt="Logo Conseil Général Seine-et-Marne"
              class="logo-conseil-general"
            />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Partners;
