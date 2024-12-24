import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
//Look at activity 22, because readme says to use conditional rendering
//REDO USING CONDITIONAL RENDERING
//Looking at activity 24 for example
export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                    About Me
                </Link>,
                <Link key={2} className="nav-link text-light" to="/Portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link text-light" to="/Contact">
                    Contact
                </Link>,
                <Link key={4} className="nav-link text-light" to="/Resume">
                    Resume
                </Link>,
            ]}
        />
    );
} 