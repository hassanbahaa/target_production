import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, Post, PostMeta } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import Head from "next/head";
import { useEffect, useState } from "react";
import SocialSharingButtons from "../../components/SocialSharingButtons";
import ExportedImage from "next-image-export-optimizer";
import PostCard from "@/components/blog/PostCard";
import SEOHead, { SITE_URL } from "@/components/SEOHead";
import { useRouter } from "next/router";

type Props = {
  post: Post;
  relatedPosts: PostMeta[];
};

export default function PostPage({ post, relatedPosts }: Props) {
  const router = useRouter();
  const { language, isRTL } = useLanguage(); // // RTL/LTR: Centralized language and direction handling
  const [url, setUrl] = useState("");

  // --- TRANSLATION HANDLING ---
  // Detect current language from global context.
  // Fallback to Arabic if the specified translation is missing.
  const translation = post.translations?.[language] ||
    post.translations?.ar || {
      title: post.title,
      description: post.description,
    };

  const displayTitle = translation.title;
  const displayDescription = translation.description;

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  // --- SEO DATA DEFINITION: SCHEMA MARKUP (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: displayTitle,
    description: displayDescription,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Target Hotel Marketing",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Target Hotel Marketing",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/targetlogo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${router.asPath}`,
    },
    inLanguage: language,
  };

  return (
    <>
      <Head>
        <title>{displayTitle}</title>
        <meta name="description" content={displayDescription} />
        {/* --- METADATA GENERATED --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <SEOHead
        title={displayTitle}
        description={displayDescription}
        ogType="article"
        ogImage={post.image}
      />

      <div className="min-h-screen">
        <Header />

        <main className="pt-16">
          <section className="section-padding ">
            <div className="container-custom max-w-3xl">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {displayTitle}
              </h1>

              {/* Date */}
              <p className="text-muted-foreground mb-6">{post.date}</p>

              {/* Image */}
              {post.image && (
                <div className="relative w-full h-[400px] mb-6">
                  <ExportedImage
                    src={post.image}
                    className="rounded-lg object-cover"
                    alt={displayTitle}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}

              {/* --- CONTENT RENDERING --- */}
              {/* Select the correct multilingual section based on current language */}
              <div
                className="prose max-w-none article-content"
                dangerouslySetInnerHTML={{
                  __html:
                    (language === "ar"
                      ? post.contentHtmlAr
                      : post.contentHtmlEn) || post.contentHtml,
                }}
              />

              <SocialSharingButtons url={url} title={displayTitle} />
            </div>
          </section>

          {relatedPosts && relatedPosts.length > 0 && (
            <section className="section-padding bg-muted/30">
              <div className="container-custom">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  {isRTL ? "مقالات ذات صلة" : "Related Articles"}
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {relatedPosts.map((rp) => (
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
