
import '../styles/header.scss';

interface MovieProps {

  Category: string;
}

const Header: React.FC<MovieProps> = ({ Category }) => {
  // Complete aqui
  return (
    <header>
      <span className="category">Categoria: <span>{Category}</span></span>
    </header>
  )
}

export default Header;