import React from 'react';

interface SocialSharingButtonsProps {
  url: string;
  title: string;
}

const SocialSharingButtons: React.FC<SocialSharingButtonsProps> = ({ url, title }) => {
  return (
    <div>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2"
      >
        Twitter
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-2"
      >
        WhatsApp
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default SocialSharingButtons;
