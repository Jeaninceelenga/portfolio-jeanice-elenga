import experiences from '../data/experiences';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Expériences</h2>
      <div className="experience__timeline">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default Experience;