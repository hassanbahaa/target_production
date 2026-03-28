import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import Head from "next/head";

type Props = {
  posts: PostMeta[];
};

export default function Blog({ posts }: Props) {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Our latest articles" />
      </Head>

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
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="card-hover cursor-pointer">
                      <CardContent className="p-6" dir={isRTL ? "rtl" : "ltr"}>
                        {post.image && (
                          <img
                            src={post.image}
                            className="rounded-lg mb-4 w-full h-48 object-cover"
                          />
                        )}

                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>

                        <p className="text-muted-foreground mb-4">
                          {post.description}
                        </p>

                        <Button variant="outline" size="sm">
                          {language === "ar" ? "اقرأ المزيد" : "Read More"}
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
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
