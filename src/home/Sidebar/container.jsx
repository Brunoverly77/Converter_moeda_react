import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import './container.css';


function Container({ trocarTela, idioma, menuAberto, setMenuAberto }) {
    
    const menuTraducoes = {
        pt: { inicio: "Início", conversor: "Conversor", tabela: "Tabela", ajuda: "Ajuda", noticias: "Notícias", config: "Configurações" },
        en: { inicio: "Home", conversor: "Converter", tabela: "Table", ajuda: "Help", noticias: "News", config: "Settings" },
        es: { inicio: "Inicio", conversor: "Conversor", tabela: "Tabla", ajuda: "Ayuda", noticias: "Noticias", config: "Configuración" }
    };

    const t = menuTraducoes[idioma] || menuTraducoes['pt'];

    return (
        <div className={`container ${menuAberto ? 'aberto' : ''}`}>
           
            <div className="sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
                <FontAwesomeIcon icon={faDollarSign} style={{ color: '#2ecc71', fontSize: '24px' }} />
                
                <button className="btn-fechar-sidebar" onClick={() => setMenuAberto(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>

            <hr className="linha-separadora" />
            
            <p onClick={() => trocarTela('boas-vindas')} style={{ cursor: 'pointer' }}>
                {t.inicio}
            </p>
            
            <p onClick={() => trocarTela('conversor')} style={{ cursor: 'pointer' }}>
                {t.conversor}
            </p>
            
            <p onClick={() => trocarTela('tabela')} style={{ cursor: 'pointer' }}>
                {t.tabela}
            </p>
            
            <p onClick={() => trocarTela('ajuda')} style={{ cursor: 'pointer' }}>
                {t.ajuda}
            </p>
            
            <p onClick={() => trocarTela('noticias')} style={{ cursor: 'pointer' }}>
                {t.noticias}
            </p>
            
            <p onClick={() => trocarTela('configuracoes')} style={{ cursor: 'pointer' }}>
                {t.config}
            </p>
        </div>
    );
}

export default Container;