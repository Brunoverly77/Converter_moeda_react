import './containerh.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Containerh({ temaEscuro, alternarTema, abrirMenu, menuAberto }) {
  return (
    <header className="containerh">
      <div className="header-esq">
        <button
          className="btn-menu-mobile"
          onClick={abrirMenu}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <FontAwesomeIcon icon={menuAberto ? faTimes : faBars} />
        </button>
        <div>
          <h1>workflow</h1>
          <span className="header-tagline">Conversor Multimoedas</span>
        </div>
      </div>

      <button
        className="btn-tema"
        onClick={alternarTema}
        title={temaEscuro ? 'Modo claro' : 'Modo escuro'}
      >
        <FontAwesomeIcon icon={temaEscuro ? faSun : faMoon} />
      </button>
    </header>
  );
}

export default Containerh;
