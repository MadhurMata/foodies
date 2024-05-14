'use client';

import Link from 'next/link';

export interface LinkComponentProps {
  title: string;
  path: string;
  styles: string;
}

const LinkComponent = ({ styles, path, title }: LinkComponentProps) => {
  return (
    <Link className={`${styles}`} href={path}>
      {title}
    </Link>
  );
};

export default LinkComponent;
