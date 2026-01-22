import './containerh.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Containerh({ temaEscuro, alternarTema, abrirMenu, menuAberto }) {
    return (
        <div className="containerh">
            <div className="header-esq">
                <FontAwesomeIcon icon={faHouse} />
                <button className="btn-menu-mobile" onClick={abrirMenu}>
                    <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} />
                </button>
                <h1>Dashboard</h1>
            </div>

            <button className="btn-tema" onClick={alternarTema}>
                <FontAwesomeIcon icon={temaEscuro ? faSun : faMoon} />
            </button>
        </div>
    );
}
export default Containerh;