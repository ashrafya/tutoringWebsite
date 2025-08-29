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
  className = "",
  children = "Purchase Now"
}) => {
  // Determine which link to use
  let link: string;
  
  if (customLink) {
    // Use custom link if provided
    link = customLink;
  } else if (courseId && ETSY_LINKS[courseId as keyof typeof ETSY_LINKS]) {
    // Use Etsy link from constants if courseId is provided
    link = ETSY_LINKS[courseId as keyof typeof ETSY_LINKS];
  } else {
    // Fallback to default
    link = "#";
  }

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default PurchaseButton;
