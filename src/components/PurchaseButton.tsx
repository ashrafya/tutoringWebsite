import React from 'react';
import { ETSY_LINKS } from './Constants';

interface PurchaseButtonProps {
  courseId?: string;
  customLink?: string;
  className?: string;
  children?: React.ReactNode;
}

const PurchaseButton: React.FC<PurchaseButtonProps> = ({
  courseId,
  customLink,
  className = '',
  children = 'Purchase Now',
}) => {
  let link: string;
  if (customLink) {
    link = customLink;
  } else if (courseId && ETSY_LINKS[courseId as keyof typeof ETSY_LINKS]) {
    link = ETSY_LINKS[courseId as keyof typeof ETSY_LINKS];
  } else {
    link = '#';
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 ${className}`}
    >
      {children}
    </a>
  );
};

export default PurchaseButton;
