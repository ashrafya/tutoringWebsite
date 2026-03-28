import { Link } from 'react-router-dom';

interface NotesButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const NotesButton: React.FC<NotesButtonProps> = ({ onClick, children }) => (
  <Link
    to="/resources"
    className="inline-block px-5 py-2.5 bg-[#F97316] hover:bg-[#EA6C00] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center text-base"
    onClick={onClick}
  >
    {children ?? 'Notes Shop'}
  </Link>
);

export default NotesButton;
