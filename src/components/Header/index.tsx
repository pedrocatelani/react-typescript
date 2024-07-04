import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <span>TypeScript</span>
      </Link>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/person">Person</Link>
        <a>Test2</a>
      </nav>
    </header>
  );
}

export { Header };
