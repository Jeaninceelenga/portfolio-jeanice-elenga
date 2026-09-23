import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p className="contact__intro">
        N'hésitez pas à me contacter pour toute opportunité de stage.
      </p>
      <div className="contact__links">
        <a href="mailto:Jeaniceelenga04@gmail.com" className="btn">Jeaniceelenga04@gmail.com</a>
        <a href="tel:+33600000000" className="btn btn--outline">06 51 74 40 79</a>
        <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="btn btn--outline">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;