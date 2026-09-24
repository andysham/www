import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./paper.module.css";
import { PROFILE } from "./cv";

const SECTIONS = [
  { href: "/", label: "CV" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Shell({
  current,
  stamp,
  children,
}: {
  current: string;
  stamp: string;
  children: ReactNode;
}) {
  return (
    <main className={styles.page}>
      <span className={styles.stamp} aria-hidden="true">
        {stamp}
      </span>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navHome}>
          sham.dev
        </Link>
        <ul className={styles.navLinks}>
          {SECTIONS.map((section, index) => (
            <li key={section.href}>
              <Link
                href={section.href}
                aria-current={section.href === current ? "page" : undefined}
              >
                <span className={styles.navNumber}>{index + 1}</span>
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <article className={styles.paper}>
        {children}

        <footer className={styles.footer}>
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </article>
    </main>
  );
}
