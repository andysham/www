import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>sham.dev</p>
          <h1 className={styles.name}>Andrew Shamis</h1>
          <p className={styles.tagline}>
            [TODO - Personal description]
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>CV / Resumé</h2>
        <p className={styles.prose}>
          [TODO - Employment History]
        </p>
        {/* <p className={`${styles.prose} ${styles.muted}`}>
          Recent focus: retrieval, evaluation, and efficient fine-tuning.
        </p> */}
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Andrew Shamis</span>
        <a href="mailto:andy@sham.dev">andy@sham.dev</a>
        <a href="https://github.com/andysham">github.com/andysham</a>
      </footer>
    </main>
  );
}
