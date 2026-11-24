
import "./Education.css";

const education = [
  {
    number: "01",
    chapter: "THE BEGINNING",
    level: "School",
    institution: "Parle Tilak Vidyalaya English Medium School",
    detail: "Secondary Education",
    location: "Mumbai",
    years: "2016 – 2021",
    note: "A place where my journey began.",
  },
  {
    number: "02",
    chapter: "A NEW CHAPTER",
    level: "Junior College",
    institution: "Sathaye College",
    detail: "Higher Secondary Education · Science",
    location: "Mumbai",
    years: "2021 – 2023",
    note: "A new environment, new experiences, and a different phase of learning.",
  },
  {
    number: "03",
    chapter: "THE PRESENT CHAPTER",
    level: "Degree College, Affiliated with Mumbai University",
    institution: "Atharva College Of Engineering",
    detail: "B.E. in Information Technology",
    location: "Mumbai",
    years: "2023 – 2027",
    note: "A journey that challenged me, broadened my perspective, and helped me become more capable and independent.",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-heading">
        <p className="eyebrow">A JOURNEY THROUGH THE YEARS</p>

        <h2>Places along the way.</h2>

        <p className="education-intro">
          Three institutions, different phases of life,
          and quite a few memories in between.
        </p>
      </div>

      <div className="education-timeline">
        {education.map((item) => (
          <article className="education-item" key={item.number}>
            <div className="education-marker">
              <span>{item.number}</span>
            </div>

            <div className="education-content">
              <p className="education-chapter">
                {item.chapter}
              </p>

              <h3>{item.institution}</h3>

              <p className="education-level">
                {item.level}
              </p>

              <div className="education-details">
                <span>{item.detail}</span>
                <span>{item.location}</span>
                <span>{item.years}</span>
              </div>

              <p className="education-note">
                {item.note}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
