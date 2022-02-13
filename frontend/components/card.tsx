import React from 'react';
import Link from 'next/link';
import NextImage from './image';

const Card = ({ cardData }) => {
  return (
    <div className="opacity-20 hover:opacity-100 w-[252px] h-[533px] md:w-[403px] md:h-[533px] xl:w-[520px] xl:h-[632px] shrink-0 relative">
      <Link href={`/works/1`}>
        <a>
          <NextImage image={cardData.attributes.image} />
        </a>
      </Link>
    </div>
  );
};

export default Card;
