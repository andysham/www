import type { Metadata } from "next";
import { PROFILE } from "../cv";
import styles from "../paper.module.css";
import { Shell } from "../shell";

export const metadata: Metadata = {
  title: "Contact — Andrew Shamis",
};

const LINKS = [
  ...PROFILE.emails.map((entry) => ({
    label: entry.address,
    href: `mailto:${entry.address}`,
    note: entry.note,
  })),
  { label: PROFILE.github, href: PROFILE.githubUrl, note: "GitHub" },
  { label: PROFILE.linkedin, href: PROFILE.linkedinUrl, note: "LinkedIn" },
];

export default function Contact() {
  return (
    <Shell current="/contact" stamp="sham.dev:2609.00003v1 [cs.LG] 24 Sep 2026">
      <header className={styles.titleBlock}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.author}>{PROFILE.location}</p>
      </header>

      <section className={styles.section}>
        <p className={styles.abstractBody}>
          The fastest way to reach me is email. I&rsquo;m happy to talk about
          applied ML work, evaluation infrastructure, or anything in the
          research-to-production seam.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.number}>1</span> Correspondence
        </h2>
        <ul className={styles.refs}>
          {LINKS.map((link, index) => (
            <li key={link.href}>
              <span className={styles.refMark}>[{index + 1}]</span>
              <span className={styles.positionBody}>
                <a href={link.href}>{link.label}</a>
                <span className={styles.period}>{link.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}
