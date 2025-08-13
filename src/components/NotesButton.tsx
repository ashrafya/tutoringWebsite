import React from 'react';

interface NotesButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const NotesButton: React.FC<NotesButtonProps> = ({ onClick, children }) => (
  <a
    href="/#/notes-and-tests"
    onClick={onClick}
    className="px-6 py-2 bg-[#EBAD25] hover:bg-[#D99A22] text-black font-semibold rounded-xl shadow transition-colors duration-200 inline-block text-center"
  >
    {children ?? 'Notes Shop'}
  </a>
);

export default NotesButton;

