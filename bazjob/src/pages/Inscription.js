import React from "react";
import FormInscription from "../components/inscription/FormInscription";
import LinkAlreadyAccount from "../components/dejaUnCompte/LinkAlreadyAccount";
import TexteInscription from "../components/inscription/TexteInscription";

const Inscription = () => {
  return (
    <div className="bg-filetr">
      <div className="wrap d-flex align-items-center justify-content-center min-vh-100">
        <div className="bg-white p-4 rounded-4 w-100">
          <TexteInscription />
          <FormInscription />
          <LinkAlreadyAccount />
        </div>
      </div>
    </div>
  );
};

export default Inscription;
