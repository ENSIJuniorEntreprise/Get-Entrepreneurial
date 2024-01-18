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
  const baseURL = "http://localhost:8000/inscription";
  const [loading, setLoading] = useState(false);
  const [ShowFail, setShowFail] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const [submitStatus, setSubmitStatus] = useState(null);


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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{8}$/;

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phoneRegex.test(phone);
  };



  const handleDomaineExpertiseChange = (event) => {
    setDomaineExpertise(event.target.value);
  };

  const handleNiveauExperienceChange = (event) => {
    setNiveauExperience(event.target.value);
  };

  const [Partage, setPartage] = useState(false);

  const [CV, setCV] = useState('');

  console.log(CV)
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

  const handleSubmit = async (event) => {
    // setFormSubmitted(true); 

    event.preventDefault();

    if (
      !validateEmail(Email) ||
      !validatePhone(Phone) ||
      !Nom ||
      !Prenom ||
      !Email ||
      !Phone ||
      !Birthday ||
      !Genre ||
      !Region ||
      !Status ||
      (Status === "Etudiant" && (!Universite || !Classe)) ||
      ((Status === "Diplome" || Status === "Employé") && (!DomaineExpertise || !NiveauExperience))
    ) {
      setSubmitStatus({ message: 'Please fill in all mandatory fields carefully.', type: 'error' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    

    const data = new FormData();
    data.append('CV', CV[0]);
    data.append('Nom', Nom)
    data.append('Prenom', Prenom)
    data.append('Email', Email)
    data.append('Phone', Phone)
    data.append('Birthday', Birthday)
    data.append('Genre', Genre)
    data.append('Region', Region)
    data.append('Status', Status)
    data.append('Universite', Universite)
    data.append('Classe', Classe)
    data.append('DomaineExpertise', DomaineExpertise)
    data.append('NiveauExperience', NiveauExperience)
    data.append('Partage', Partage)
    setLoading(true)
    try{
      const response = await axios.post(baseURL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status === 200) {
        setLoading(false)
        setNom('')
        setPrenom('')
        setBirthday('')
        setCV('')
        setClasse('')
        setDomaineExpertise('')
        setNiveauExperience('')
        setEmail('')
        setGenre('')
        setPartage(false)
        setPhone('')
        setRegion('')
        setStatus('')
        setUniversite('')
        setPartage(false);
        {
          Swal.fire({
            text: "You have successfully registered.",
            icon: 'success',
            confirmButtonColor: '#2ea3dd',

          })
        }
        setSubmitStatus(null);
        
    }
  } catch (error) {
    setLoading(false);
  
    if (error.response && error.response.status === 422) {
      Swal.fire({
        text: "You are already registered.",
        icon: 'success',
        confirmButtonColor: '#2ea3dd',

      })
      setSubmitStatus(null);
      setNom('')
      setPrenom('')
      setBirthday('')
      setCV('')
      setClasse('')
      setDomaineExpertise('')
      setNiveauExperience('')
      setEmail('')
      setGenre('')
      setPartage(false)
      setPhone('')
      setRegion('')
      setStatus('')
      setUniversite('')
      setPartage(false);
    } else {
      // For other errors
      console.error(error);
      setSubmitStatus({ message: 'Error', type: 'error' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

  return (
    <div ref={myRef}>
      <div className="container03">
        <div className="container4">
          <div className="text-centered-agenda2">Register Now</div>
          <div className="subtitle-pgm">
            <div className="line-sub-pgm"></div>
            <div>Your Journey Begins with a Click!</div>
            <div className="line-sub-pgm"></div>
          </div>

          <div className="formContainer">
            <div className="formBox">
              <div className="sous-titre">#Forge_The_Future</div>

              <form onSubmit={handleSubmit}  ref={myRef} noValidate>

                <Alert show={ShowFail} variant='danger'>Vous êtes déjà inscrit</Alert>
                {submitStatus && <div className={`alert ${submitStatus.type}`}>{submitStatus.message}</div>}

                <div className="NomPrenom">


                <div className="form-group">
                    <label htmlFor="prenom"> <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} className="icon" />                                </span>
                    </div>First Name</label>
                    <div className="input-group">

                      <input
                        required
                        id="prenom"
                        type="text"
                        className={`form-control ${Prenom ? 'is-valid' : 'is-invalid'}`}
                        value={Prenom}
                        onChange={handlePrenomChange}
                        placeholder="Please enter your first name"

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


                  <div className="form-group">
                    <label htmlFor="nom"> <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} className="icon" />                                </span>
                    </div>Last Name</label>
                    <div className="input-group">

                      <input
                        required
                        id="nom"
                        type="text"
                        className={`form-control ${Nom ? 'is-valid' : 'is-invalid'}`}
                        value={Nom}
                        onChange={handleNomChange}
                        placeholder="Please enter your last name"
                        onInvalid={(e) => e.target.setCustomValidity('Veuillez saisir votre nom')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />

                      {Nom && (
                        <div className="valid-feedback">
                          {/* Success message */}
                        </div>
                      )}
                      {!Nom && (
                        <div className="invalid-feedback">
                          {/* errrooooooooooooooorrr */}
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
                    </div>Mail Address</label>
                    <div className="input-group">

                      <input
                        required
                        id="email"
                        type="email"
                        className={`form-control ${Email ? 'is-valid' : 'is-invalid'}`}
                        value={Email}
                        onChange={handleEmailChange}
                        placeholder="Please enter your mail address"

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
                    </div>Phone Number</label>
                    <div className="input-group">

                      <input
                        required
                        id="phone"
                        type="tel"  // "tel" type is suitable for phone numbers
                        className={`form-control ${Phone ? 'is-valid' : 'is-invalid'}`}
                        value={Phone}
                        onChange={handlePhoneChange}
                        placeholder="Please enter your phone Number"

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
                    </div>Date of birth</label>
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
                    </div>Gender</label>
                    <div className="input-group">

                      <select
                        required
                        id="genre"
                        className={`form-control ${Genre ? 'is-valid' : 'is-invalid'}`}
                        value={Genre}
                        onChange={handleGenreChange}
                      >
                        <option value="" disabled>Select Gender</option>
                        <option value="homme">Male</option>
                        <option value="femme">Female</option>
                        <option value="autre">other...</option>
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
                    </div>Region</label>
                    <div className="input-group">

                      <select
                        required
                        id="region"
                        className={`form-control ${Region ? 'is-valid' : 'is-invalid'}`}
                        value={Region}
                        onChange={handleRegionChange}
                      >
                        <option value="" disabled>Select Region</option>
                        <option value="Ariana">Ariana</option>
                        <option value="Béja">Béja</option>
                        <option value="Ben Arous">Ben Arous</option>
                        <option value="Bizerte">Bizerte</option>
                        <option value="Gabès">Gabès</option>
                        <option value="Gafsa">Gafsa</option>
                        <option value="Jendouba">Jendouba</option>
                        <option value="Kairouan">Kairouan</option>
                        <option value="Kasserine">Kasserine</option>
                        <option value="Kébili">Kébili</option>
                        <option value="Le Kef">Le Kef</option>
                        <option value="Mahdia">Mahdia</option>
                        <option value="Manouba">Manouba</option>
                        <option value="Médenine">Médenine</option>
                        <option value="Monastir">Monastir</option>
                        <option value="Nabeul">Nabeul</option>
                        <option value="Sfax">Sfax</option>
                        <option value="Sidi Bouzid">Sidi Bouzid</option>
                        <option value="Siliana">Siliana</option>
                        <option value="Sousse">Sousse</option>
                        <option value="Tataouine">Tataouine</option>
                        <option value="Tozeur">Tozeur</option>
                        <option value="Tunis">Tunis</option>
                        <option value="Zaghouan">Zaghouan</option>
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
                        <option value="Etudiant">Student</option>
                        <option value="Diplomé">Recent Graduate</option>
                        <option value="Employé">Employee</option>
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
                      </div>University</label>
                      <div className="input-group">

                        <input
                          required
                          id="university"
                          type="text"
                          className={`form-control ${Universite ? 'is-valid' : 'is-invalid'}`}
                          value={Universite}
                          onChange={handleUniversiteChange}
                          placeholder="Please enter your university"

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
                      </div>Grade</label>
                      <div className="input-group">

                        <select
                          required
                          id="classe"
                          className={`form-control ${Classe ? 'is-valid' : 'is-invalid'}`}
                          value={Classe}
                          onChange={handleClasseChange}
                        >
                          <option value="" disabled>Select Grade</option>
                          <option value={1}>1st year</option>
                          <option value={2}>2nd year</option>
                          <option value={3}>3rd year</option>
                          <option value={4}>4th year</option>
                          <option value={5}>5th year</option>

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
                        </div>Expertise Field</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Select Expertise Field</option>
                            <option value="Agronomie">Agronomie</option>
                            <option value="Business">Business</option>
                            <option value="Civil">Civil</option>
                            <option value="Economie">Economie</option>
                            <option value="Electrique">Electrique</option>
                            <option value="Electromécanique">Electromécanique</option>
                            <option value="Embarqués">Embarqués</option>
                            <option value="Finance">Finance</option>
                            <option value="Gestion">Gestion</option>
                            <option value="Hydrolique">Hydrolique</option>
                            <option value="Industriel">Industriel</option>
                            <option value="Infotronique">Infotronique</option>
                            <option value="IT">Information Technology</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mécanique">Mécanique</option>
                            <option value="Mécatronique">Mécatronique</option>
                            <option value="Réseaux">Réseaux</option>
                            <option value="Télécom">Télécom</option>
                            <option value="Science">Science</option>
                            <option value="Art">Art</option>
                            <option value="Autre">Autre</option>
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
                        </div>Experience Level</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Select Experience Level</option>
                            <option value="Junior">Junior</option>
                            <option value="Intermédiaire">Intermediate</option>
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
                        </div>Expertise Field</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Select Expertise Field</option>
                            <option value="Agronomie">Agronomie</option>
                            <option value="Business">Business</option>
                            <option value="Civil">Civil</option>
                            <option value="Economie">Economie</option>
                            <option value="Electrique">Electrique</option>
                            <option value="Electromécanique">Electromécanique</option>
                            <option value="Embarqués">Embarqués</option>
                            <option value="Finance">Finance</option>
                            <option value="Gestion">Gestion</option>
                            <option value="Hydrolique">Hydrolique</option>
                            <option value="Industriel">Industriel</option>
                            <option value="Infotronique">Infotronique</option>
                            <option value="IT">Information Technology</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mécanique">Mécanique</option>
                            <option value="Mécatronique">Mécatronique</option>
                            <option value="Réseaux">Réseaux</option>
                            <option value="Télécom">Télécom</option>
                            <option value="Science">Science</option>
                            <option value="Art">Art</option>
                            <option value="Autre">Autre</option>
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
                        </div>Experience Level</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Select Experience Level</option>
                            <option value="Junior">Junior</option>
                            <option value="Intermédiaire">Intermediate</option>
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
                        </div>Expertise Field</label>
                        <div className="input-group">

                          <select
                            required
                            id="domaineExpertise"
                            className={`form-control ${DomaineExpertise ? 'is-valid' : 'is-invalid'}`}
                            value={DomaineExpertise}
                            onChange={handleDomaineExpertiseChange}
                          >
                            <option value="" disabled>Select Expertise Field</option>
                            <option value="Agronomie">Agronomie</option>
                            <option value="Business">Business</option>
                            <option value="Civil">Civil</option>
                            <option value="Economie">Economie</option>
                            <option value="Electrique">Electrique</option>
                            <option value="Electromécanique">Electromécanique</option>
                            <option value="Embarqués">Embarqués</option>
                            <option value="Finance">Finance</option>
                            <option value="Gestion">Gestion</option>
                            <option value="Hydrolique">Hydrolique</option>
                            <option value="Industriel">Industriel</option>
                            <option value="Infotronique">Infotronique</option>
                            <option value="IT">Information Technology</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mécanique">Mécanique</option>
                            <option value="Mécatronique">Mécatronique</option>
                            <option value="Réseaux">Réseaux</option>
                            <option value="Télécom">Télécom</option>
                            <option value="Science">Science</option>
                            <option value="Art">Art</option>
                            <option value="Autre">Autre</option>
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
                        </div>Experience Level</label>
                        <div className="input-group">

                          <select
                            required
                            id="niveauExperience"
                            className={`form-control ${NiveauExperience ? 'is-valid' : 'is-invalid'}`}
                            value={NiveauExperience}
                            onChange={handleNiveauExperienceChange}
                          >
                            <option value="" disabled>Select Experience Level</option>
                            <option value="Junior">Junior</option>
                            <option value="Intermédiaire">Intermediate</option>
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
                    Submit your CV</label>
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
                    checked={Partage}
                  ></input>
                  <label className="custom-control-label" htmlFor="defaultUnchecked2">
                  I agree to share my information with the participating companies.
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
                      "Register"
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



