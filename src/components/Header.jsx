import photo from '../assets/image.png';
import './Header.css';

function Header() {
  return (
    <header className="header" id="home">
      <img src={photo} alt="Portrait" className="header__photo" />
      <div className="header__text">
        <h1>Jeanice Erica ELENGA</h1>
        <p className="header__title">Recherche de stage — Logistique &amp; Industrie</p>
        <p className="header__subtitle">Licence Sciences Pour l'Ingénieur (SPI) — IUT de Roanne</p>

        <div className="header__links">
          <a href="mailto:Jeaniceelenga04@gmail.com" className="btn">Me contacter</a>
          <a href="/public/CV JEANICE 2.pdf" className="btn btn--outline" download>
            Télécharger mon CV
          </a>
          {/* <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> */}
        </div>
      </div>
    </header>
  );
}

export default Header;