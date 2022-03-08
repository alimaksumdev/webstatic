import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import CustomLink from "../../components/CustomLink";
import Container from "../../components/Container";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../../components/TestComponent")),
  LinkButton: dynamic(() => import("../../components/LinkButton")),
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Container title={`${frontMatter.title} - PP Ali Maksum`}>
      <main>
        <div className="prose post-header mx-auto max-w-xl">
          <h1>{frontMatter.title}</h1>
          {frontMatter.description && (
            <p className="description">{frontMatter.description}</p>
          )}
        </div>
        <article className="p-2 lg:p-4 prose lg:prose-lg prose-headings:text-slate-900 dark:prose-headings:text-slate-100 mx-auto text-slate-900 dark:text-slate-100">
          <div>
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </main>
    </Container>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
