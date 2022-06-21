import React from "react";
import FormLangues from "../components/langues/FormLangues";
import TextLangues from "../components/langues/TextLangues";
import LinkAlreadyAccount from "../components/dejaUnCompte/LinkAlreadyAccount";

const Langues = () => {
  return (
    <div className="bg-filetr">
      <div className="wrap d-flex align-items-center justify-content-center min-vh-100">
        <div className="bg-white p-4 rounded-4">
          <TextLangues />
          <FormLangues />
          <div className="bg-btn bg-btn-pink-orange ">
            <button className="btn ">Valider mon inscription</button>
          </div>
          <LinkAlreadyAccount />
        </div>
      </div>
    </div>
  );
};

export default Langues;
