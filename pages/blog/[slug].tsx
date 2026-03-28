import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, Post } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import Head from "next/head";

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>

      <div className="min-h-screen">
        <Header />

        <main className="pt-16">
          <section className="section-padding ">
            <div className="container-custom max-w-3xl">
              {/* Title */}
              <h1
                className="text-3xl md:text-4xl font-bold mb-4"
                dir={isRTL ? "rtl" : "ltr"}
              >
                {post.title}
              </h1>

              {/* Date */}
              <p
                className="text-muted-foreground mb-6"
                dir={isRTL ? "rtl" : "ltr"}
              >
                {post.date}
              </p>

              {/* Image */}
              {post.image && (
                <img
                  src={post.image}
                  className="rounded-lg mb-6 w-full max-h-[400px] object-cover"
                />
              )}

              {/* Content */}
              <div
                className="prose max-w-none article-content"
                dir={isRTL ? "rtl" : "ltr"}
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

// ===== paths =====
export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

// ===== props =====
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: { post },
  };
}
