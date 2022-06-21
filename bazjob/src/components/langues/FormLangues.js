import React from "react";

const FormLangues = () => {
  return (
    <form id="choice-language" className="mt-4  " action="">
      <label className="small fw-semibold ">Ma langue</label>
      {/* content */}
      <div className="container-select  border-bottom mt-2">
        <select id="language-select" name="language" className="input select">
          <option data-img_src="https://flagcdn.com/h20/fr.png">
            Français
          </option>
          <option data-img_src="https://flagcdn.com/h20/gb.png">Anglais</option>
        </select>
      </div>
      {/* content */}
    </form>
  );
};

export default FormLangues;
