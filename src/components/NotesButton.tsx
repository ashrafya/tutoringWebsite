import { Link } from 'react-router-dom';

interface NotesButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const NotesButton: React.FC<NotesButtonProps> = ({ onClick, children }) => (
  <Link
    to="notes-and-tests"
    className="inline-block px-7 py-3 bg-[#B45309] hover:bg-[#92400E] text-white font-semibold rounded-xl shadow-md transition-all duration-200 hover:shadow-lg text-center text-lg"
    onClick={onClick}
  >
    {children ?? 'Notes Shop'}
  </Link>
);

export default NotesButton;
