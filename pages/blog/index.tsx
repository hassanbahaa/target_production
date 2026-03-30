import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts, PostMeta } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import Head from "next/head";
import SEOHead from "@/components/SEOHead";
import { SITE_URL } from "@/lib/i18n";

type Props = {
  posts: PostMeta[];
};

export default function Blog({ posts }: Props) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <>
      <Head>
        <title>{language === "ar" ? "المقالات | Target Hotel Marketing" : "Blog | Target Hotel Marketing"}</title>
        <meta name="description" content={language === "ar" ? "أحدث المقالات والأخبار" : "Our latest articles and insights"} />
        <meta property="og:locale" content={language === "ar" ? "ar_AR" : "en_US"} />
      </Head>
      <SEOHead
        title={language === "ar" ? "المقالات" : "Blog"}
        description={language === "ar" ? "أحدث المقالات والأخبار" : "Our latest articles and insights"}
        ogImage={`${SITE_URL}/assets/targetlogo.webp`}
      />

      <div className="min-h-screen">
        <Header />

        <main className="pt-16">
          {/* Hero Section بسيط بنفس ستايل الموقع */}
          <section className="section-padding bg-muted/50">
            <div className="container-custom text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "ar" ? "المقالات" : "Blog"}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === "ar"
                  ? "أحدث المقالات والأخبار"
                  : "Latest articles & insights"}
              </p>
            </div>
          </section>

          {/* Posts Grid */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}
