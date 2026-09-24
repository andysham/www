import type { MDXComponents } from "mdx/types";
import styles from "./app/prose.module.css";

const components: MDXComponents = {
  h2: (props) => <h2 className={styles.h2} {...props} />,
  h3: (props) => <h3 className={styles.h3} {...props} />,
  p: (props) => <p className={styles.p} {...props} />,
  ul: (props) => <ul className={styles.ul} {...props} />,
  ol: (props) => <ol className={styles.ol} {...props} />,
  li: (props) => <li className={styles.li} {...props} />,
  a: (props) => <a className={styles.a} {...props} />,
  blockquote: (props) => <blockquote className={styles.quote} {...props} />,
  code: (props) => <code className={styles.code} {...props} />,
  pre: (props) => <pre className={styles.pre} {...props} />,
  hr: (props) => <hr className={styles.hr} {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
