import { EDUCATION, EXPERIENCE, PROFILE, PROJECTS } from "./cv";
import styles from "./paper.module.css";
import { Shell } from "./shell";

export default function CV() {
  return (
    <Shell current="/" stamp="sham.dev:2609.00001v1 [cs.LG] 24 Sep 2026">
      <header className={styles.titleBlock}>
        <h1 className={styles.title}>{PROFILE.name}</h1>
        <p className={styles.author}>{PROFILE.role}</p>
        <p className={styles.affiliation}>
          {PROFILE.location}
          {PROFILE.emails.map((entry) => (
            <span key={entry.address}>
              {" · "}
              <a href={`mailto:${entry.address}`}>{entry.address}</a>
            </span>
          ))}
        </p>
      </header>

      <section className={styles.abstract}>
        <h2 className={styles.abstractHeading}>Abstract</h2>
        <p className={styles.abstractBody}>{PROFILE.summary}</p>
        <p className={styles.keywords}>
          <span className={styles.keywordsLabel}>Keywords:</span>{" "}
          {PROFILE.topSkills.join(", ")}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.number}>1</span> Experience
        </h2>
        <ol className={styles.positions}>
          {EXPERIENCE.map((item, index) => (
            <li key={`${item.org}-${item.period}`} className={styles.position}>
              <span className={styles.subnumber}>1.{index + 1}</span>
              <span className={styles.positionBody}>
                <span className={styles.role}>{item.org}</span>
                <span className={styles.org}>
                  {item.title}, {item.location}
                </span>
                <span className={styles.period}>
                  {item.period} · {item.stack.join(", ")}
                </span>
                <ul className={styles.bullets}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.number}>2</span> Education
        </h2>
        <div className={styles.position}>
          <span className={styles.subnumber}>2.1</span>
          <span className={styles.positionBody}>
            <span className={styles.role}>{EDUCATION.institution}</span>
            <span className={styles.org}>{EDUCATION.degree}</span>
            <span className={styles.period}>{EDUCATION.period}</span>
            <ul className={styles.courses}>
              {EDUCATION.courses.map((course) => (
                <li key={course.name}>
                  <span>{course.name}</span>
                  <span className={styles.grade}>{course.grade}</span>
                </li>
              ))}
            </ul>
          </span>
        </div>
        <div className={`${styles.position} ${styles.positionSpaced}`}>
          <span className={styles.subnumber}>2.2</span>
          <span className={styles.positionBody}>
            <span className={styles.role}>Dissertation</span>
            <span className={styles.org}>{EDUCATION.dissertation.title}</span>
            <span className={styles.period}>
              {EDUCATION.dissertation.grade}
            </span>
            <ul className={styles.bullets}>
              {EDUCATION.dissertation.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.number}>3</span> Projects
        </h2>
        <ol className={styles.positions}>
          {PROJECTS.map((project, index) => (
            <li key={project.name} className={styles.position}>
              <span className={styles.subnumber}>3.{index + 1}</span>
              <span className={styles.positionBody}>
                <span className={styles.role}>{project.name}</span>
                <span className={styles.org}>
                  {project.role ? `${project.role} — ` : ""}
                  {project.stack.join(", ")}
                </span>
                <span className={styles.period}>{project.date}</span>
                <ul className={styles.bullets}>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </span>
            </li>
          ))}
        </ol>
      </section>
    </Shell>
  );
}
