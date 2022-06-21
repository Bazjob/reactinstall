import React from "react";
import FormInfoPro from "../components/infoPro/FormInfoPro";
import TextInforPro from "../components/infoPro/TextInforPro";
import LinkAlreadyAccount from "../components/dejaUnCompte/LinkAlreadyAccount";

const InfoPro = () => {
  return (
    <div className="bg-filetr">
      <div className="wrap d-flex align-items-center justify-content-center min-vh-100">
        <div className="bg-white p-4 rounded-4">
          <TextInforPro />
          <FormInfoPro />
          <LinkAlreadyAccount />
        </div>
      </div>
    </div>
  );
};

export default InfoPro;
