import React from 'react';
import Link from 'next/link';

/**
 * The site logo component.
 * Links to the homepage.
 * TODO: Replace text with <Image> or <svg> for the final logo.
 */
const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold text-blue-600">
      VERTEX
    </Link>
  );
};

export default Logo;
