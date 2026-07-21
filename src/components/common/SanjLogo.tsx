import { Link } from 'react-router-dom';
import PdfLogo from './pdfLogo';

const SanjLogo = () => {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <PdfLogo className="h-10 md:h-12 w-auto object-contain" />
    </Link>
  );
};

export default SanjLogo;