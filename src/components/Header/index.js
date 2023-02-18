import './Header.css';
import { FaAngleDown } from "react-icons/fa";

function Header() {
  return (
    <section className='header'>
        <div className="header-text-content">
            <h1><span className="header-text-animation"></span>./<span>bzr-lipe</span></h1>
            <h2>Felipe Bezerra da Silva</h2>
            <div className="header-subtitle">
                <span>Frontend developer</span>
            </div>
        </div>
        <div className="scroll-down">
            <i><FaAngleDown/></i>
            <span>scroll down</span>
        </div>
    </section>

    
  );
}

export default Header;
