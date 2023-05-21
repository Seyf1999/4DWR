import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'https://geo.api.gouv.fr/communes?codePostal=';
const FORMAT = '&format=json';

const Geoapi = () => {
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [cities, setCities] = useState([]);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (zipcode) {
        const url = API_URL + zipcode + FORMAT;

        try {
          const response = await axios.get(url);
          const results = response.data;

          if (results.length) {
            setErrorMessage('');
            setCities(results.map(item => item.nom));
          } else {
            setErrorMessage('Aucune commune avec ce code postal.');
            setCities([]);
          }
        } catch (error) {
          console.log(error);
          setErrorMessage('Une erreur s\'est produite.');
          setCities([]);
        }
      } else {
        setErrorMessage('');
        setCities([]);
      }
    };

    fetchData();
  }, [zipcode]);

  const handleZipcodeChange = event => {
    setZipcode(event.target.value);
  };

  const handleCityChange = event => {
    setCity(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (zipcode && cities.includes(city)) {
      setSubmitMessage('Informations envoyées');
    } else {
      setSubmitMessage('Le code postal et la commune ne correspondent pas.');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Search Page</h1>

      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {submitMessage && (
        <div className={`alert ${submitMessage.includes('Informations envoyées') ? 'alert-success' : 'alert-danger'}`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="zipcode">Code Postal</label>
          <input
            type="text"
            name="zipcode"
            className="form-control"
            placeholder="Code postal"
            id="zipcode"
            value={zipcode}
            onChange={handleZipcodeChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="city">Ville</label>
          <select
            className="form-control"
            name="city"
            id="city"
            value={city}
            onChange={handleCityChange}
          >
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
};

export default Geoapi;
