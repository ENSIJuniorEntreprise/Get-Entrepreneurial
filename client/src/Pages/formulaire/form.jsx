import React, { useState, useRef } from "react";
import Swal from 'sweetalert2';
import { Button } from '@mui/material';
import { Alert } from 'react-bootstrap';
import axios from "axios";
import Get from '../../Assets/Get.png'
import ReactLoading from "react-loading";
import './form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faEnvelope, faPhone, faCalendarDays, faFileAlt, faUpload, faVenusMars, faLocationDot, faUser, faBriefcase, faStar, faBuildingColumns, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Form() {
  // const baseURL = "https://backforum.ensi-junior-entreprise.net/inscription";
  const [loading, setLoading] = useState(false);
  const [ShowFail, setShowFail] = useState(false);
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Birthday, setBirthday] = useState(new Date());
  const [Genre, setGenre] = useState('');
  const [Region, setRegion] = useState('');
  const [Status, setStatus] = useState('');
  const [Universite, setUniversite] = useState('');
  const [Classe, setClasse] = useState('');
  const [DomaineExpertise, setDomaineExpertise] = useState('');
  const [NiveauExperience, setNiveauExperience] = useState('');

  const handleDomaineExpertiseChange = (event) => {
    setDomaineExpertise(event.target.value);
  };

  const handleNiveauExperienceChange = (event) => {
    setNiveauExperience(event.target.value);
  };

  const [Partage, setPartage] = useState(false);

  const [CV, setCV] = useState('');

  const [ResponseMessage, setResponseMessage] = useState({})

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleUniversiteChange = (event) => {
    setUniversite(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setClasse('')
    setUniversite('')
  };
  const handleClasseChange = (event) => {
    setClasse(event.target.value);
  };


  const handleCVChange = (event) => {
    setCV(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      text: "Vous êtes inscrit avec succès",
      icon: 'success',
      confirmButtonColor: '#FE9900',

    })


    /*const data = new FormData();
    data.append('CV', CV[0]);
    data.append('Nom', Nom)
    data.append('Prenom', Prenom)
    data.append('Email', Email)
    data.append('Birthday', Birthday)
    data.append('Status', Status)
    data.append('Universite', Universite)
    data.append('Classe', Classe)
    data.append('Partage', Partage)
    setLoading(true)
    axios
      .post(baseURL, data, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        setLoading(false)
        setResponseMessage(response.data)
        //console.log(ResponseMessage)

        // eslint-disable-next-line no-lone-blocks
        {
          swal.fire({
            text: "Vous êtes inscrit avec succès au 16ème édition du forum annuel de l'ENSI",
            icon: 'success',
            confirmButtonColor: '#2ea3dd',

          })
        }

      }).catch(() => {
        setLoading(false)

        setShowFail(true)
        executeScroll()
        setTimeout(() => setShowFail(false), 2000)

      });
*/
  };

  return (
    <div ref={myRef}>
      <div className="container03">
        <div className="container4">
          <div className="text-centered-agenda2">Inscrivez vous</div>
          <div className="subtitle-pgm">
            <div className="line-sub-pgm"></div>
            <div>Lorem ipsum dolor sit amet </div>
            <div className="line-sub-pgm"></div>
          </div>

          <div className="formContainer">
            <div className="formBox">
              <div className="sous-titre">#Forge_The_Future</div>

              <form onSubmit={handleSubmit}>

                <Alert show={ShowFail} variant='danger'>Vous êtes déjà inscrit</Alert>

                <div className="NomPrenom">


                  <div className="form-group">
                    <label htmlFor="nom"> <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} className="icon" />                                </span>
                    </div>Nom</label>
                    <div className="input-group">

                      <input
                        required
                        id="nom"
                        type="text"
                        className={`form-control ${Nom ? 'is-valid' : 'is-invalid'}`}
                        value={Nom}
                        onChange={handleNomChange}
                        placeholder="Veuillez saisir votre nom"
                      />
                      {Nom && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Nom && (
                        <div className="invalid-feedback">
                          {/* Error message */}
                        </div>
                      )}
                    </div>
                  </div>


                  <div className="form-group">
                    <label htmlFor="prenom"> <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} className="icon" />                                </span>
                    </div>Prénom</label>
                    <div className="input-group">

                      <input
                        required
                        id="prenom"
                        type="text"
                        className={`form-control ${Prenom ? 'is-valid' : 'is-invalid'}`}
                        value={Prenom}
                        onChange={handlePrenomChange}
                        placeholder="Veuillez saisir votre prenom"

                      />
                      {Prenom && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Prenom && (
                        <div className="invalid-feedback">
                          {/* Error message */}
                        </div>
                      )}
                    </div>
                  </div>


                </div>

                <div className="NomPrenom">
                  <div className="form-group">
                    <label htmlFor="email"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />                                </span>
                    </div>Adresse mail</label>
                    <div className="input-group">

                      <input
                        required
                        id="email"
                        type="email"
                        className={`form-control ${Email ? 'is-valid' : 'is-invalid'}`}
                        value={Email}
                        onChange={handleEmailChange}
                        placeholder="Veuillez saisir votre adresse mail"

                      />
                      {Email && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Email && (
                        <div className="invalid-feedback">
                          {/* Error message */}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faPhone} className="icon" />                                </span>
                    </div>Numéro de téléphone</label>
                    <div className="input-group">

                      <input
                        required
                        id="phone"
                        type="tel"  // "tel" type is suitable for phone numbers
                        className={`form-control ${Phone ? 'is-valid' : 'is-invalid'}`}
                        value={Phone}
                        onChange={handlePhoneChange}
                        placeholder="Veuillez saisir votre numéro de téléphone"

                      />
                      {Phone && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Phone && (
                        <div className="invalid-feedback">
                          {/* Error message */}
                        </div>
                      )}
                    </div>
                  </div>



                </div>

                <div className="NomPrenom">
                  <div className="form-group">
                    <label htmlFor="birthday"> <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                      </span>
                    </div>Date de naissance</label>
                    <div className="input-group">

                      <input
                        required
                        id="birthday"
                        type="date"
                        className={`form-control ${Birthday ? 'is-valid' : 'is-invalid'}`}
                        value={Birthday}
                        onChange={handleBirthdayChange}
                        onBlur={handleBirthdayChange}
                      />
                      {Birthday && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Birthday && (
                        <div className="invalid-feedback">
                          {/* Error message */}
                        </div>
                      )}
                    </div>
                  </div>


                  <div className="form-group">
                    <label htmlFor="genre"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faVenusMars} className="icon" />
                      </span>
                    </div>Genre</label>
                    <div className="input-group">

                      <select
                        required
                        id="genre"
                        className={`form-control ${Genre ? 'is-valid' : 'is-invalid'}`}
                        value={Genre}
                        onChange={handleGenreChange}
                      >
                        <option value="" disabled>Sélectionner le genre</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                        <option value="autre">Autre</option>
                      </select>
                      {Genre && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Genre && (
                        <div className="invalid-feedback">
                          {/* Error message */}
                        </div>
                      )}
                    </div>


                  </div>

                  <div className="form-group">
                    <label htmlFor="region"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faLocationDot} className="icon" />
                      </span>
                    </div>Région</label>
                    <div className="input-group">

                      <select
                        required
                        id="region"
                        className={`form-control ${Region ? 'is-valid' : 'is-invalid'}`}
                        value={Region}
                        onChange={handleRegionChange}
                      >
                        <option value="" disabled>Select Région</option>
                        <option value="Region1">Region 1</option>
                        <option value="Region2">Region 2</option>
                        <option value="Region3">Region 3</option>
                        {/* Add more regions as needed */}
                      </select>
                      {Region && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Region && (
                        <div className="invalid-feedback">
                          {/* Error message */}
                        </div>
                      )}
                    </div>

                  </div>

                </div>

                <div className="NomPrenom">

                  <div className="form-group">
                    <label htmlFor="status"><div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUserTie} className="icon" />
                      </span>
                    </div>Status</label>
                    <div className="input-group">

                      <select
                        required
                        id="status"
                        className={`form-control ${Status ? 'is-valid' : 'is-invalid'}`}
                        value={Status}
                        onChange={handleStatusChange}
                      >
                        <option value="" disabled>Select Status</option>
                        <option value="Etudiant">Etudiant</option>
                        <option value="Diplomé">Jeune Diplômé</option>
                        <option value="Employé">Employé</option>
                      </select>
                      {Status && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Status && (
                        <div className="invalid-feedback">
                          {/* Error message */}
                        </div>
                      )}
                    </div>
                  </div>


                  {Status === "Etudiant" && (
                    <div className="form-group">
                      <label htmlFor="university"><div className="input-group-prepend">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faBuildingColumns} className="icon" />
                        </span>
                      </div>Université</label>
                      <div className="input-group">

                        <input
                          required
                          id="university"
                          type="text"
                          className={`form-control ${Universite ? 'is-valid' : 'is-invalid'}`}
                          value={Universite}
                          onChange={handleUniversiteChange}
                          placeholder="Veuillez saisir votre université"

                        />
                        {Universite && (
                          <div className="valid-feedback">
                            {/* Success message */}
                          </div>
                        )}
                        {!Universite && (
                          <div className="invalid-feedback">
                            {/* Error message */}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {Status === "Etudiant" && (
                    <div className="form-group">
                      <label htmlFor="classe"><div className="input-group-prepend">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faGraduationCap} className="icon" />                                  </span>
                      </div>Classe</label>
                      <div className="input-group">

                        <select
                          required
                          id="classe"
                          className={`form-control ${Classe ? 'is-valid' : 'is-invalid'}`}
                          value={Classe}
                          onChange={handleClasseChange}
                        >
                          <option value="" disabled>Select Classe</option>
                          <option value={1}>1ère année</option>
                          <option value={2}>2ème année</option>
                          <option value={3}>3ème année</option>
                        </select>
                        {Classe && (
                          <div className="valid-feedback">
                            {/* Success message */}
                          </div>
                        )}
                        {!Classe && (
                          <div className="invalid-feedback">
                            {/* Error message */}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {Status === "" && (
                    <>
                      <div className="form-group">
                        <label htmlFor="domaineExpertise"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faBriefcase} className="icon" />                                    </span>
                        </div>Domaine d'expertise</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Sélectionner le domaine d'expertise</option>
                            {/* Add options based on your domain expertise */}
                          </select>
                          {DomaineExpertise && (
                            <div className="valid-feedback">
                              {/* Success message */}
                            </div>
                          )}
                          {!DomaineExpertise && (
                            <div className="invalid-feedback">
                              {/* Error message */}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="niveauExperience"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faStar} className="icon" />                                    </span>
                        </div>Niveau d'expérience</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Sélectionner le niveau d'expérience</option>
                            <option value="Junior">Junior</option>
                            <option value="Intermédiaire">Intermédiaire</option>
                            <option value="Senior">Senior</option>
                          </select>
                          {NiveauExperience && (
                            <div className="valid-feedback">
                              {/* Success message */}
                            </div>
                          )}
                          {!NiveauExperience && (
                            <div className="invalid-feedback">
                              {/* Error message */}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {Status === "Employé" && (
                    <>
                      <div className="form-group">
                        <label htmlFor="domaineExpertise"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faBriefcase} className="icon" />                                    </span>
                        </div>Domaine d'expertise</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Sélectionner le domaine d'expertise</option>
                            {/* Add options based on your domain expertise */}
                          </select>
                          {DomaineExpertise && (
                            <div className="valid-feedback">
                              {/* Success message */}
                            </div>
                          )}
                          {!DomaineExpertise && (
                            <div className="invalid-feedback">
                              {/* Error message */}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="niveauExperience"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faStar} className="icon" />                                    </span>
                        </div>Niveau d'expérience</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Sélectionner le niveau d'expérience</option>
                            <option value="Junior">Junior</option>
                            <option value="Intermédiaire">Intermédiaire</option>
                            <option value="Senior">Senior</option>
                          </select>
                          {NiveauExperience && (
                            <div className="valid-feedback">
                              {/* Success message */}
                            </div>
                          )}
                          {!NiveauExperience && (
                            <div className="invalid-feedback">
                              {/* Error message */}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {Status === "Diplomé" && (
                    <>
                      <div className="form-group">
                        <label htmlFor="domaineExpertise"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faBriefcase} className="icon" />                                    </span>
                        </div>Domaine d'expertise</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Sélectionner le domaine d'expertise</option>
                            {/* Add options based on your domain expertise */}
                          </select>
                          {DomaineExpertise && (
                            <div className="valid-feedback">
                              {/* Success message */}
                            </div>
                          )}
                          {!DomaineExpertise && (
                            <div className="invalid-feedback">
                              {/* Error message */}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="niveauExperience"><div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faStar} className="icon" />                                    </span>
                        </div>Niveau d'expérience</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Sélectionner le niveau d'expérience</option>
                            <option value="Junior">Junior</option>
                            <option value="Intermédiaire">Intermédiaire</option>
                            <option value="Senior">Senior</option>
                          </select>
                          {NiveauExperience && (
                            <div className="valid-feedback">
                              {/* Success message */}
                            </div>
                          )}
                          {!NiveauExperience && (
                            <div className="invalid-feedback">
                              {/* Error message */}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}


                </div>


                <div className="form-group cv">
                  <label htmlFor="cv">
                    {/* <div className="input-group-prepend">
                            <span className="input-group-text">
                            <FontAwesomeIcon icon={faFileAlt} className="icon"/>   
                            </span>
                          </div> */}
                    Déposez votre CV</label>
                  <div className="input-group">

                    <label className="custom-file-upload">
                      <input
                        id="cv"
                        type="file"
                        className={`form-control ${CV ? 'is-valid' : 'is-invalid'}`}
                        onChange={handleCVChange}
                      />
                      <FontAwesomeIcon icon={faUpload} className="icon" />
                      Choose a file...
                    </label>
                    {CV && (
                      <div className="valid-feedback">
                            {CV[0].name}
                      </div>
                    )}
                    {!CV && (
                      <div className="invalid-feedback">
                      </div>
                    )}
                  </div>
                </div>



                <div className="custom-control custom-checkbox">
                  <input
                    required
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultUnchecked2"
                    onChange={() => setPartage(!Partage)}
                  ></input>
                  <label className="custom-control-label" htmlFor="defaultUnchecked2">
                    J'accepte de partager mes informations avec les entreprises présentes.
                  </label>
                </div>

                <div className="text-center buttonIns">
                  <Button


                    type="submit"
                    disabled={!(true || loading)}
                    variant="contained"
                    sx={{
                      backgroundColor: "#FE9900",
                      "&:focus": {
                        backgroundColor: "#FE9900"
                      },
                      "&:hover": {
                        backgroundColor: "#FE9900"
                      },
                    }}
                  >

                    {loading ? (
                      <ReactLoading
                        height={"20px"}
                        width={"24px"}
                        className="loading1"
                        type="spin"
                      />
                    ) : (
                      "S'inscrire"
                    )}

                  </Button>
                </div>
              </form>

              {/* <div className="line"></div>
      <div>
        <img src={Get} className="imgform"></img>
        <div className="sloganForm">#Forge_The_Future</div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;



