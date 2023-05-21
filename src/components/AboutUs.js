import React from "react";
import { FaEnvelope } from "react-icons/fa";
import photo1 from './photo_perso.jpg';
import photo2 from './photo_perso2.png';

function AboutUs() {
  let message = `
    This project is carried out by Seyfeddine BOUHAFS & Mbaye Ndoye DIALLO for the 4DWR module.`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Project work team</h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={photo1} className="team-img rounded-circle" alt="pic" style={{ width: '200px', height: '200px' }} />
              <h3 style={{ color: 'green' }}>Seyfeddine BOUHAFS</h3>
              <div className="team-info">
                <p>Student at Ecole IT</p>
              </div>
              <p>
                Seyfeddine is a Master's level student at the IT School,
                specializing in Cybersecurity and Cloud Computing.
              </p>
              <p>
                Contact:{" "}
                <a href="mailto:seyfeddine.bouhafs@ecole-it.com">
                  <FaEnvelope /> seyfeddine.bouhafs@ecole-it.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 offset-md-4">
            <div className="team-item">
            <img src={photo2} className="team-img rounded-circle" alt="pic" style={{ width: '200px', height: '200px' }} />
              <h3 style={{ color: 'green' }}>Mbaye Ndoye DIALLO</h3>
              <div className="team-info">
                <p>Student at Ecole IT</p>
              </div>
              <p>
                Mbaye is a Master's level student at the IT School,
                specializing in Cybersecurity and Cloud Computing.
              </p>
              <p>
                Contact:{" "}
                <a href="mailto:mbaye-ndoye.diallo@ecole-it.com">
                  <FaEnvelope /> mbaye-ndoye.diallo@ecole-it.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="data:image/png;base64,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" className="team-img mx-auto d-block" alt="pic" style={{ width: '300px', height: '"80px' }} />


    </section>
  );
}

export default AboutUs;
