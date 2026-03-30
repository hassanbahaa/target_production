import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, Post, PostMeta } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import Head from "next/head";
import { useEffect, useState } from "react";
import SocialSharingButtons from "@/components/SocialSharingButtons";
import PostCard from "@/components/blog/PostCard";
import SEOHead from "@/components/SEOHead";

type Props = {
  post: Post;
  relatedPosts: PostMeta[];
};

export default function PostPage({ post, relatedPosts }: Props) {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <SEOHead
        title={post.title}
        description={post.description}
        ogType="article"
        ogImage={post.image}
      />

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

              <SocialSharingButtons url={url} title={post.title} />
            </div>
          </section>

          {relatedPosts && relatedPosts.length > 0 && (
            <section className="section-padding bg-muted/30">
              <div className="container-custom">
                <h2 
                  className="text-2xl font-bold mb-8 text-center"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {isRTL ? "مقالات ذات صلة" : "Related Articles"}
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {relatedPosts.map(rp => (
                    <PostCard key={rp.slug} post={rp} />
                  ))}
                </div>
              </div>
            </section>
          )}
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
  const allPosts = getAllPosts();
  
  const relatedPosts = allPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 2);

  return {
    props: { post, relatedPosts },
  };
}
