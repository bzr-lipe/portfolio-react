import './Navbar.css'
import {FaLinkedin} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";

const Navbar = () => {
    return (
        
        <div className="navbar">
            
            <a href="*" className="nav-title"><span className="nav-title-span">.</span><span className="nav-title-span">/</span><span>b</span><span>z</span><span>r</span><span>-</span><span>l</span><span>i</span><span>p</span><span>e</span></a>
            <ul>
                <li className="nav-list-item"><a href="./pages/resumo.html">/resumo</a></li>
                <li className="nav-list-item"><a href="*">/projetos</a></li>
                <li className="nav-list-item"><a href="*" >/contato</a></li>
                <li className="nav-list-item"><a href="https://www.linkedin.com/in/lp-bzr/" target="_blank" rel="noreferrer"><i><FaLinkedin/></i></a></li>
                <li className="nav-list-item"><a href="https://github.com/bzr-lipe" target="_blank" rel="noreferrer"><i><FaGithubSquare/></i></a></li>
            </ul>
        </div>
        
    )
}

export default Navbar;