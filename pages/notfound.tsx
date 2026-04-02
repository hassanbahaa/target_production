import { useRouter } from 'next/router';
import { useEffect } from "react";
import Head from "next/head";

const NotFound = () => {
  const router  = useRouter();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", router .pathname);
  }, [router .pathname]);

  return (
    <>
      {/* ===== SEO METADATA (EDIT HERE) ===== */}
      {/* 404 pages should NOT be indexed by search engines */}
      <Head>
        <title>Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-gray-100" role="main" aria-label="Not Found Page Content">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <a href="/" className="text-blue-500 underline hover:text-blue-700" aria-label="Navigate back to the homepage">
            Return to Home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
