import './ExperienceCard.css';

function ExperienceCard({ title, period, company, description, skills }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__period">{period}</div>
      <div className="timeline-item__content">
        <h3>{title}</h3>
        <p className="timeline-item__company">{company}</p>
        <p className="timeline-item__description">{description}</p>
        <ul className="timeline-item__skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;