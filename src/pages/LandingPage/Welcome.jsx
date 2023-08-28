import React from "react";
import imagePieds from "../../assets/images/pieds.png";

const Welcome = () => {
  return (
    <div>
      <main>
        <h2>
          Bienvenue sur le site de l'Association de Micro-Crèches Les P'tits
          Loups
        </h2>
        <p>
          Cette association gère la Micro-Crèche <em>Les P'tits Loups</em> à
          Coulommiers, ouverte depuis Juin 2015. Depuis le mois d'Avril 2019, sa
          petite sœur, la Micro-Crèche <em>Câlinous et Galipettes</em> a ouvert
          ses portes, à Saint-Siméon.
        </p>
        <p>
          Ces deux structures s'appuient sur les mêmes valeurs pédagogiques.
          Elles diffèrent légèrement sur leur mode de fonctionnement.
        </p>
        <p>
          L'association vous invite à parcourir ce site, vous y trouverez toutes
          les informations utiles. Un formulaire de présinscription est
          disponible pour chaque structure.
        </p>
        <p>À très vite.</p>
        <div class="container__img-pieds">
          <img
            src={imagePieds}
            alt="Petits pieds de bébé"
            class="img-pieds"
          />
        </div>
      </main>
    </div>
  );
};

export default Welcome;
