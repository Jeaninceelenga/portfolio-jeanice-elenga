import './Formation.css';

const formations = [
  {
    id: 1,
    diploma: "Licence Sciences Pour l'Ingénieur (SPI)",
    school: "IUT de Roanne",
    location: "Roanne",
    period: "2024 - 2027",
    description:
      "Formation orientée sciences de l'ingénieur, avec une approche pluridisciplinaire adaptée aux environnements industriels.",
  },


{
  id: 2,
  diploma: "1ère année de BTS SIO",
  school: "AKALIS, Paris",
  location: "Paris",
  period: "2023 - 2024",
  description:
    "Acquisition des bases en développement, réseaux et gestion des services informatiques dans un environnement professionnel.",
},
  // Ajoute ici d'autres diplômes si besoin (Bac, DUT, etc.)
];

function Formation() {
  return (
    <section className="formation" id="formation">
      <h2>Formation</h2>
      <div className="formation__list">
        {formations.map((f) => (
          <div className="formation__item" key={f.id}>
            <h3>{f.diploma}</h3>
            <p className="formation__meta">
              {f.school}, {f.location} — {f.period}
            </p>
            <p className="formation__description">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Formation;