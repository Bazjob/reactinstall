import React from "react";

const FormInfoPro = () => {
  return (
    <form id="form-register-infopro" className="mt-4" action="">
      <div className="wrap-input wrap-multitags">
        <span>
          <span className="label-input">Spécialité </span>
        </span>

        <div className="multitags">
          <input
            list="specialties"
            id="specialtiesInput"
            className="input"
            type="text"
            name="speciality"
            placeholder="Ajouter une spécialité"
          />
          <datalist id="specialties">
            {/* ajouter les spécialité prédfini ici */}
            <option value="JavaScript"></option>
            <option value="Frontend"></option>
            <option value="Backend"></option>
            <option value="JEE"></option>
            <option value="Base de données"></option>
          </datalist>
        </div>
      </div>

      <div className="wrap-input">
        <span className="label-input">Nom commercial (facultatif)</span>
        <input
          className="input"
          type="text"
          name="nomcommercial"
          placeholder="Com4design"
        />
      </div>

      <div className="wrap-input">
        <span className="label-input">Adresse</span>
        <input
          className="input"
          type="text"
          name="adresse"
          placeholder="21 rue Jean"
        />
      </div>
      <div className="wrap-input">
        <span className="label-input">Ville</span>
        <input
          className="input"
          type="text"
          name="ville"
          placeholder="Porto-novo"
        />
      </div>
      <div className="wrap-input">
        <label className="label-input">Pays</label>
        <input list="paysSelect" type="text" name="pays" className="input" />
        <datalist className="" id="paysSelect">
          <option id="AF">Afghanistan</option>
          <option id="ZA">Afrique du Sud</option>
          <option id="AL">Albanie</option>
          <option id="DZ">Algérie</option>
          <option id="DE">Allemagne</option>
          <option id="AD">Andorre</option>
          <option id="AO">Angola</option>
          <option id="AI">Anguilla</option>
          <option id="AQ">Antarctique</option>
          <option id="AG">Antigua-et-Barbuda</option>
          <option id="AN">Antilles néerlandaises</option>
          <option id="SA">Arabie saoudite</option>
          <option id="AR">Argentine</option>
          <option id="AM">Arménie</option>
          <option id="AW">Aruba</option>
          <option id="AU">Australie</option>
          <option id="AT">Autriche</option>
          <option id="AZ">Azerbaïdjan</option>
          <option id="BS">Bahamas</option>
          <option id="BH">Bahreïn</option>
          <option id="BD">Bangladesh</option>
          <option id="BB">Barbade</option>
          <option id="BE">Belgique</option>
          <option id="BZ">Belize</option>
          <option id="BJ">Bénin</option>
          <option id="BM">Bermudes</option>
          <option id="BT">Bhoutan</option>
          <option id="BY">Biélorussie</option>
          <option id="BO">Bolivie</option>
          <option id="BA">Bosnie-et-Herzégovine</option>
          <option id="BW">Botswana</option>
          <option id="BR">Brésil</option>
          <option id="BN">Brunei Darussalam</option>
          <option id="BG">Bulgarie</option>
          <option id="BF">Burkina Faso</option>
          <option id="BI">Burundi</option>
          <option id="KH">Cambodge</option>
          <option id="CM">Cameroun</option>
          <option id="CA">Canada</option>
          <option id="CV">Cap-Vert</option>
          <option id="CL">Chili</option>
          <option id="CN">Chine</option>
          <option id="CY">Chypre</option>
          <option id="CO">Colombie</option>
          <option id="KM">Comores</option>
          <option id="CG">Congo</option>
          <option id="CR">Costa Rica</option>
          <option id="CI">Côte d'Ivoire</option>
          <option id="HR">Croatie</option>
          <option id="CU">Cuba</option>
          <option id="DK">Danemark</option>
          <option id="DJ">Djibouti</option>
          <option id="DM">Dominique</option>
          <option id="EG">Égypte</option>
          <option id="SV">El Salvador</option>
          <option id="AE">Émirats arabes unis</option>
          <option id="EC">Équateur</option>
          <option id="ER">Érythrée</option>
          <option id="ES">Espagne</option>
          <option id="EE">Estonie</option>
          <option id="FM">États fédérés de Micronésie</option>
          <option id="US">États-Unis</option>
          <option id="ET">Éthiopie</option>
          <option id="FJ">Fidji</option>
          <option id="FI">Finlande</option>
          <option id="FR">France</option>
          <option id="GA">Gabon</option>
          <option id="GM">Gambie</option>
          <option id="GE">Géorgie</option>
          <option id="GH">Ghana</option>
          <option id="GI">Gibraltar</option>
          <option id="GR">Grèce</option>
          <option id="GD">Grenade</option>
          <option id="GL">Groenland</option>
          <option id="GP">Guadeloupe</option>
          <option id="GU">Guam</option>
          <option id="GT">Guatemala</option>
          <option id="GN">Guinée</option>
          <option id="GQ">Guinée équatoriale</option>
          <option id="GW">Guinée-Bissau</option>
          <option id="GY">Guyane</option>
          <option id="GF">Guyane française</option>
          <option id="HT">Haïti</option>
          <option id="HN">Honduras</option>
          <option id="HK">Hong Kong</option>
          <option id="HU">Hongrie</option>
          <option id="BV">Ile Bouvet</option>
          <option id="CX">Ile Christmas</option>
          <option id="NF">Île Norfolk</option>
          <option id="PN">Île Pitcairn</option>
          <option id="AX">Iles Aland</option>
          <option id="KY">Iles Cayman</option>
          <option id="CC">Iles Cocos (Keeling)</option>
          <option id="CK">Iles Cook</option>
          <option id="FO">Îles Féroé</option>
          <option id="HM">Îles Heard-et-MacDonald</option>
          <option id="FK">Îles Malouines</option>
          <option id="MP">Îles Mariannes du Nord</option>
          <option id="MH">Îles Marshall</option>

          <option id="SB">Îles Salomon</option>
          <option id="TC">Îles Turques-et-Caïques</option>
          <option id="VG">Îles Vierges britanniques</option>
          <option id="VI">Îles Vierges des États-Unis</option>
          <option id="IN">Inde</option>
          <option id="ID">Indonésie</option>
          <option id="IQ">Iraq</option>
          <option id="IE">Irlande</option>
          <option id="IS">Islande</option>
          <option id="IL">Israël</option>
          <option id="IT">Italie</option>
          <option id="LY">Jamahiriya arabe libyenne</option>
          <option id="JM">Jamaïque</option>
          <option id="JP">Japon</option>
          <option id="JO">Jordanie</option>
          <option id="KZ">Kazakhstan</option>
          <option id="KE">Kenya</option>
          <option id="KG">Kirghizistan</option>
          <option id="KI">Kiribati</option>
          <option id="KW">Koweït</option>
          <option id="LS">Lesotho</option>
          <option id="LV">Lettonie</option>
          <option id="LB">Liban</option>
          <option id="LR">Libéria</option>
          <option id="LI">Liechtenstein</option>
          <option id="LT">Lituanie</option>
          <option id="LU">Luxembourg</option>
          <option id="MO">Macao</option>
          <option id="MG">Madagascar</option>
          <option id="MY">Malaisie</option>
          <option id="MW">Malawi</option>
          <option id="MV">Maldives</option>
          <option id="ML">Mali</option>
          <option id="MT">Malte</option>
          <option id="MA">Maroc</option>
          <option id="MQ">Martinique</option>
          <option id="MU">Maurice</option>
          <option id="MR">Mauritanie</option>
          <option id="YT">Mayotte</option>
          <option id="MX">Mexique</option>
          <option id="MC">Monaco</option>
          <option id="MN">Mongolie</option>
          <option id="MS">Montserrat</option>
          <option id="MZ">Mozambique</option>
          <option id="MM">Myanmar</option>
          <option id="NA">Namibie</option>
          <option id="NR">Nauru</option>
          <option id="NP">Népal</option>
          <option id="NI">Nicaragua</option>
          <option id="NE">Niger</option>
          <option id="NG">Nigéria</option>
          <option id="NU">Niué</option>
          <option id="NO">Norvège</option>
          <option id="NC">Nouvelle-Calédonie</option>
          <option id="NZ">Nouvelle-Zélande</option>
          <option id="OM">Oman</option>
          <option id="UG">Ouganda</option>
          <option id="UZ">Ouzbékistan</option>
          <option id="PK">Pakistan</option>
          <option id="PW">Palaos</option>
          <option id="PA">Panama</option>
          <option id="PG">Papouasie-Nouvelle-Guinée</option>
          <option id="PY">Paraguay</option>
          <option id="NL">Pays-Bas</option>
          <option id="PE">Pérou</option>
          <option id="PH">Philippines</option>
          <option id="PL">Pologne</option>
          <option id="PF">Polynésie française</option>
          <option id="PR">Porto Rico</option>
          <option id="PT">Portugal</option>
          <option id="TW">Province chinoise de Taiwan</option>
          <option id="QA">Qatar</option>
          <option id="SY">République arabe syrienne</option>
          <option id="CF">République centrafricaine</option>
          <option id="KR">République de Corée</option>
          <option id="MD">République de Moldavie</option>
          <option id="CD">République démocratique du Congo</option>
          <option id="DO">République dominicaine</option>
          <option id="IR">République islamique d'Iran</option>
          <option id="KP">République de Corée</option>
          <option id="LA">République Populaire du Laos</option>
          <option id="CZ">République tchèque</option>
          <option id="TZ">République-Unie de Tanzanie</option>
          <option id="RE">Réunion</option>
          <option id="RO">Roumanie</option>
          <option id="GB">Royaume-Uni</option>
          <option id="RU">Russie</option>
          <option id="RW">Rwanda</option>
          <option id="EH">Sahara occidental</option>
          <option id="KN">Saint-Christophe-et-Niévès</option>
          <option id="SM">Saint-Marin</option>
          <option id="PM">Saint-Pierre-et-Miquelon</option>
          <option id="VA">Saint-Siège (Cité du Vatican)</option>
          <option id="VC">Saint-Vincent-et-les Grenadines</option>
          <option id="SH">Sainte-Hélène</option>
          <option id="LC">Sainte-Lucie</option>
          <option id="WS">Samoa</option>
          <option id="AS">Samoa américaines</option>
          <option id="ST">Sao Tomé-et-Principe</option>
          <option id="SN">Sénégal</option>
          <option id="CS">Serbie-et-Monténégro</option>
          <option id="SC">Seychelles</option>
          <option id="SL">Sierra Leone</option>
          <option id="SG">Singapour</option>
          <option id="SK">Slovaquie</option>
          <option id="SI">Slovénie</option>
          <option id="SO">Somalie</option>
          <option id="SD">Soudan</option>
          <option id="LK">Sri Lanka</option>
          <option id="SE">Suède</option>
          <option id="CH">Suisse</option>
          <option id="SR">Suriname</option>
          <option id="SJ">Svalbard et Jan Mayen</option>
          <option id="SZ">Swaziland</option>
          <option id="TJ">Tadjikistan</option>
          <option id="TD">Tchad</option>
          <option id="TF">Territoire Francais du Sud</option>
          <option id="PS">Territoires palestiniens occupés</option>
          <option id="TH">Thaïlande</option>
          <option id="TL">Timor oriental</option>
          <option id="TG">Togo</option>
          <option id="TK">Tokelau</option>
          <option id="TO">Tonga</option>
          <option id="TT">Trinité-et-Tobago</option>
          <option id="TN">Tunisie</option>
          <option id="TM">Turkménistan</option>
          <option id="TR">Turquie</option>
          <option id="TV">Tuvalu</option>
          <option id="UA">Ukraine</option>
          <option id="UY">Uruguay</option>
          <option id="VU">Vanuatu</option>
          <option id="VE">Vénézuéla</option>
          <option id="VN">Vietnam</option>
          <option id="WF">Wallis-et-Futuna</option>
          <option id="YE">Yémen</option>
          <option id="ZM">Zambie</option>
          <option id="ZW">Zimbabwe</option>
        </datalist>
      </div>

      <div className="ps-2 mt-3">
        <label for="cgv" className="checkbox">
          <input id="cgv" type="checkbox" />
          <span>
            J'ai lu et j'accepte
            <u>
              <a className="text-pink" href="">
                les Termes & conditions
              </a>
            </u>
          </span>
        </label>
      </div>

      <div className="bg-btn bg-btn-pink-orange mt-4">
        <button className="btn">Suivant</button>
      </div>
    </form>
  );
};

export default FormInfoPro;
