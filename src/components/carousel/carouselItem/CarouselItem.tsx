import React from 'react';

interface CarouselItemProps {
  children: React.ReactNode;
  paddingY: string;
}

const CarouselItem = ({ children, paddingY }: CarouselItemProps) => {
  return <div className={`inline-block ${paddingY}`}>{children}</div>;
};

export default CarouselItem;
