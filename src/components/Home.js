import React from 'react';
import homeImage from './home-image.png';

const Home = () => {
  const flagColorStyle = {
    color: '#0055A4', // Bleu foncé
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const footerStyle = {
    textAlign: 'center',
  };

  return (
    <div className="container">
      <h1 style={flagColorStyle}>Unlock the France: Discover Cities with Postal Codes!</h1>
      <img src={homeImage} alt="Home" className="home-image" />
      <footer style={footerStyle}>
        <p>Simply Enter Your Postal Code, Witness the City Unveiled: Discover the Essence of France!</p>
      </footer>
    </div>
  );
}

export default Home;
