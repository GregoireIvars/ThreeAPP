import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void; // Interface pour les props
}

const Header: React.FC<HeaderProps> = ({ onLinkClick }) => {
    return (
        <header className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white text-center p-2">
            <h1 className="text-2xl font-bold">Grégoire IVARS</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" onClick={(event) => onLinkClick(event, '/')} className="hover:text-blue-300 transition-colors duration-200">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={(event) => onLinkClick(event, '/services')} className="hover:text-blue-300 transition-colors duration-200">
                            Prestations
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={(event) => onLinkClick(event, '/contact')} className="hover:text-blue-300 transition-colors duration-200">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
