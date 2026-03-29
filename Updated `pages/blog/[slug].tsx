import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SocialSharingButtons from '../components/SocialSharingButtons';

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<PostMeta | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    // Fetch the blog post and related posts from an API
    fetch(`/api/blog/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.post);
        setRelatedPosts(data.relatedPosts);
      });
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <img src={post.image} alt={post.alt} />
      <div className="mt-8">
        <h2>Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedPosts.map((relatedPost) => (
            <div key={relatedPost.slug} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={relatedPost.image} alt={relatedPost.alt} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{relatedPost.title}</h3>
                <a
                  href={`/blog/${relatedPost.slug}`}
                  className="block mt-2 text-blue-500 hover:text-blue-600"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SocialSharingButtons url={`https://example.com/blog/${slug}`} title={post.title} />
    </div>
  );
};

export default BlogPost;
