import React from 'react';

interface NotesButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const NotesButton: React.FC<NotesButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-6 py-2 bg-[#EBAD25] hover:bg-[#0E4DA4] text-black font-semibold rounded-xl shadow transition-colors duration-200"
    type="button"
  >
    {children ?? 'Notes'}
  </button>
);

export default NotesButton;

