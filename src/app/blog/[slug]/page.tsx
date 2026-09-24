import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../paper.module.css";
import { Shell } from "../../shell";
import { formatDate, getPost, getSlugs } from "../posts";

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { meta } = await getPost(slug);
  return { title: `${meta.title} — Andrew Shamis`, description: meta.summary };
}

export default async function Post({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) notFound();

  const { Content, meta } = await getPost(slug);

  return (
    <Shell current="/blog" stamp={`sham.dev/blog/${slug} [cs.LG]`}>
      <header className={styles.postHeader}>
        <h1 className={styles.postHeading}>{meta.title}</h1>
        <p className={styles.period}>{formatDate(meta.date)}</p>
      </header>

      <Content />

      <Link href="/blog" className={styles.back}>
        ← all posts
      </Link>
    </Shell>
  );
}
