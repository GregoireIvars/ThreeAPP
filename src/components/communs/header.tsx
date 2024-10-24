import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Grégoire IVARS</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-300 transition-colors duration-200">Accueil</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-300 transition-colors duration-200">Prestations</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300 transition-colors duration-200">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
