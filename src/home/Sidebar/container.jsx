import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faTimes,
  faHouse,
  faRightLeft,
  faTrophy,
  faCircleQuestion,
  faNewspaper,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import './container.css';

const menuTraducoes = {
  pt: { inicio: "Início", conversor: "Conversor", tabela: "Tabela", ajuda: "Ajuda", noticias: "Notícias", config: "Configurações" },
  en: { inicio: "Home", conversor: "Converter", tabela: "Table", ajuda: "Help", noticias: "News", config: "Settings" },
  es: { inicio: "Inicio", conversor: "Conversor", tabela: "Tabla", ajuda: "Ayuda", noticias: "Noticias", config: "Configuración" }
};

const itens = [
  { id: 'boas-vindas', chave: 'inicio', icon: faHouse },
  { id: 'conversor', chave: 'conversor', icon: faRightLeft },
  { id: 'tabela', chave: 'tabela', icon: faTrophy },
  { id: 'ajuda', chave: 'ajuda', icon: faCircleQuestion },
  { id: 'noticias', chave: 'noticias', icon: faNewspaper },
  { id: 'configuracoes', chave: 'config', icon: faGear },
];

function Container({ trocarTela, idioma, menuAberto, setMenuAberto, telaAtiva }) {
  const t = menuTraducoes[idioma] || menuTraducoes['pt'];

  return (
    <>
      <div className={`container ${menuAberto ? 'aberto' : ''}`}>

        <div className="sidebar-brand">
          <FontAwesomeIcon icon={faDollarSign} className="sidebar-brand-icon" />
          <div className="sidebar-brand-textos">
            <span className="sidebar-brand-nome">Câmbio</span>
            <span className="sidebar-brand-sub">Multi-moedas</span>
          </div>
          <button className="btn-fechar-sidebar" onClick={() => setMenuAberto(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <hr className="linha-separadora" />

        {itens.map(({ id, chave, icon }) => (
          <p
            key={id}
            className={telaAtiva === id ? 'ativo' : ''}
            onClick={() => trocarTela(id)}
          >
            <FontAwesomeIcon icon={icon} />
            {t[chave]}
          </p>
        ))}

      </div>

      <div
        className={`sidebar-overlay ${menuAberto ? 'visivel' : ''}`}
        onClick={() => setMenuAberto(false)}
      />
    </>
  );
}

export default Container;