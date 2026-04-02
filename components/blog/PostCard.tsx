import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PostMeta } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";
import { localizeHref } from "@/lib/i18n";
import ExportedImage from "next-image-export-optimizer";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const { language, isRTL } = useLanguage();

  // // Blog translation logic:
  // Select the correct title and description based on the current language.
  // Fallback to Arabic if the requested translation is not found.
  const displayTitle = post.translations?.[language]?.title || post.translations?.ar?.title || post.title;
  const displayDescription = post.translations?.[language]?.description || post.translations?.ar?.description || post.description;

  return (
    <Link href={localizeHref(`/blog/${post.slug}`, language)} className="group h-full block" aria-label={`Read full article: ${displayTitle}`}>
      <Card className="card-hover h-full transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          {post.image ? (
            <div className="relative w-full h-48 mb-4">
              <ExportedImage
                src={post.image}
                alt={displayTitle}
                className="rounded-lg object-cover group-hover:opacity-90 transition-opacity"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
              />
            </div>
          ) : (
            <div className="rounded-lg mb-4 w-full h-48 bg-muted/50 flex items-center justify-center">
              <span className="text-muted-foreground">{displayTitle}</span>
            </div>
          )}

          <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {displayTitle}
          </h2>

          <p className="text-muted-foreground mb-4 line-clamp-3 overflow-hidden flex-grow">
            {displayDescription}
          </p>

          <Button variant="outline" size="sm" className="w-fit mt-auto" aria-label={`Read more about ${displayTitle}`}>
            {language === "ar" ? "اقرأ المزيد" : "Read More"}
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
