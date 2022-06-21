import React from "react";

const FormInscription = () => {
  return (
    <form className="mt-4" action="">
      <div className="wrap-input" data-validate="Le prénom est requis">
        <label for="firstname" className="label-input">
          Prénom
        </label>
        <input
          id="firstname"
          className="input"
          type="text"
          name="firstname"
          placeholder="Votre prénom"
        />
      </div>
      <div className="wrap-input" data-validate="Le nom est requis">
        <label className="label-input">Nom</label>

        <input
          className="input"
          type="text"
          name="lastname"
          placeholder="Votre nom"
        />
      </div>

      <div className="wrap-input container-select">
        <label className="label-input">Genre</label>
        <select className="input select" name="genre" id="genre">
          <option className="text-bg-light" disabled selected value="">
            Sélectionnez votre genre
          </option>
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
        </select>
      </div>

      <div className="wrap-input" data-validate="Email is reauired">
        <label className="label-input">Adresse email</label>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="exemple@mail.com"
        />
      </div>
      <div className="wrap-input" data-validate="phone number is reauired">
        <label className="label-input">N° de téléphone</label>
        <input
          className="input"
          type="tel"
          name="tel"
          placeholder="06 02 03 04 05"
        />
      </div>
      <div className="wrap-input" data-validate="Password is required">
        <label className="label-input">Mot de passe</label>
        <input
          className="input"
          type="password"
          name="pass"
          placeholder="**********"
        />
      </div>

      <div className="bg-btn bg-btn-pink-orange ">
        <button className="btn">Suivant</button>
      </div>
    </form>
  );
};

export default FormInscription;
