import React from 'react';
import { GOOGLE_FORM } from './Constants';

interface RegisterButtonProps {
  className?: string;
  label?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ className = '', label = 'Register Now' }) => (
  <a
    href={GOOGLE_FORM}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block rounded-xl bg-[#F97316] hover:bg-[#EA6C00] px-7 py-3 font-semibold text-white text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 cursor-pointer shadow-md hover:shadow-lg ${className}`}
  >
    {label}
  </a>
);

export default RegisterButton;
