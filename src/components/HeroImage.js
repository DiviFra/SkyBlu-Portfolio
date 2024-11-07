import React from 'react';
import './HeroImage.css';
import HeroImg from '../images/Avatar2.jpeg';

function HeroImage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
            <div className="hero-image" >
              {/* Inserisci il percorso della tua immagine */}
              <img src= {HeroImg} alt="Hero"/>
            </div>
            <div className="edu-cards" id ="education">
            <div className="hero-text2" >
              <h1>Benvenuto/a</h1>
              <p>Questo è il mio portfolio di provaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaa</p>
            </div>
            <div className="about-cards">
            {/* Card più piccole */}
              <div className="small-card">
                <h2>Scuola Superiore xxxxxxxx</h2>
                <p>mm yyyy - mm yyyy</p>
                <p>Diploma di xxxxxxx</p>
              </div>

              <div className="small-card">
                <h2>Laurea in xxxxxx</h2>
                <p>mm yyyy - mm yyyy</p>
                <p>Corso di Studi</p>
              </div>

              <div className="small-card">
                <h2>Laurea in xxxxxx</h2>
                <p>mm yyyy - mm yyyy</p>
                <p>Corso di Studi</p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="edu-cards" id ="education">
          <div className="hero-text" id ="experience">
            <h1>Benvenuto/a</h1>
            <p>Questo è il mio portfolio di xxrrrrrrrrrrrrrrr fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
              rrrrrrrr ddddddddddddddddddddddddddddddddddddddddd xxxxxxxxx
              cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccxxxxxxx</p>
          </div>
            <div className="card">
              <h2>Luogo di Lavoro xxxxxxxxx</h2>
              <p>mm yyyyy - mm yyyy</p>
              <p>Mansione:  xxxxxxxxx</p>
            </div>
             {/* <div className="timeline-dot"></div>  */}
              <div className="card">
              <h2>Luogo di Lavoro xxxxxxxxx</h2>
              <p>mm yyyyy - mm yyyy</p>
              <p>Mansione:  xxxxxxxxx</p>
           </div>
          {/* Timeline verticale tra i pallini */}
          {/* <div className="timeline-line"></div> */}
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
