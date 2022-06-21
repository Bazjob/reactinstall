import React from "react";
import ButtonClient from "../components/typeProfil/ButtonClient";
import ButtonFournisseur from "../components/typeProfil/ButtonFournisseur";
import ButtonPrestataire from "../components/typeProfil/ButtonPrestataire";
import LinkAlreadyAccount from "../components/dejaUnCompte/LinkAlreadyAccount";
import TexteChoixProfil from "../components/typeProfil/TexteChoixProfil";

const TypeProfil = () => {
  return (
    <div className="bg-filetr">
      <div className="wrap d-flex align-items-center justify-content-center min-vh-100">
        <div className="bg-white p-4 rounded-4">
          <TexteChoixProfil />

          <div className="mt-4">
            <ButtonClient />
            <ButtonPrestataire />
            <ButtonFournisseur />
          </div>

          <div className="text-center mt-4 mb-3">
            <LinkAlreadyAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeProfil;
