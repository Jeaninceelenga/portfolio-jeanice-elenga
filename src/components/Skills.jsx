import './Skills.css';

const skillCategories = [
  {
    title: "Savoir-être",
    items: ["Rigueur", "Sens de l'organisation", "Travail d'équipe", "Adaptabilité", "Gestion du stress"],
  },
  {
    title: "Savoir-faire",
    items: ["Gestion des stocks", "Relation client", "Respect des normes d'hygiène/sécurité", "Coordination d'équipe"],
  },
  {
    title: "Outils",
    items: ["Pack Office ( Word, PowerPoint)", "Logiciel de caisse","Adobe Acrobat"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Compétences</h2>
      <div className="skills__grid">
        {skillCategories.map((category) => (
          <div className="skills__category" key={category.title}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;