import Link from "next/link";
import type { Metadata } from "next";
import styles from "../paper.module.css";
import { Shell } from "../shell";
import { formatDate, getAllPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Andrew Shamis",
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <Shell current="/blog" stamp="sham.dev:2609.00002v1 [cs.LG] 24 Sep 2026">
      <header className={styles.titleBlock}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.author}>Notes on applied machine learning</p>
      </header>

      <section className={styles.section}>
        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet.</p>
        ) : (
          <ol className={styles.postList}>
            {posts.map((post, index) => (
              <li key={post.slug} className={styles.postItem}>
                <span className={styles.subnumber}>{index + 1}</span>
                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                  <span className={styles.postTitle}>{post.meta.title}</span>
                  <span className={styles.period}>
                    {formatDate(post.meta.date)}
                  </span>
                  <span className={styles.postSummary}>
                    {post.meta.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>
    </Shell>
  );
}
