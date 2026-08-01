import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Containerh from './home/Header/containerh.jsx'
import Container from './home/Sidebar/container.jsx';
import './index.css'
import './mobile.css'


const traducoes = {
  pt: {
    bemVindo: "Seja bem-vindo",
    heroEyebrow: "Painel · atualizado hoje",
    heroSub: "Acompanhe cotações, converta valores e fique de olho no mercado em um só lugar.",
    heroBtnPrincipal: "Ir para o conversor",
    heroBtnSecundario: "Ver placar de moedas",
    tickerLabel: "Cotações em Reais (BRL)",
    tituloConversor: "Conversor Multimoedas",
    tabelaTitulo: "🏆 Placar das Moedas",
    tabelaSub: "Quanto vale 1 unidade de cada moeda em Reais (BRL)",
    thPais: "País / Moeda",
    thSimbolo: "Símbolo",
    thCotacao: "Cotação (R$)",
    ajudaTitulo: "Ajuda",
    noticiaTitulo: "Notícias do Mercado 📰",
    noticiaSub: "Fique por dentro das últimas movimentações do câmbio.",
    lerNoticia: "Ler notícia completa",
    configTitulo: "Configurações do Perfil ⚙️",
    configSub: "Personalize sua experiência no conversor.",
    idiomaLabel: "Idioma do Sistema",
    privacidadeLabel: "Modo Privacidade",
    privacidadeSub: "Ocultar automaticamente os valores convertidos.",
    btnSalvar: "Salvar Alterações",
    btnRestaurar: "Restaurar Padrão",
    resultadoLabel: "Resultado final estimado:",
    btnCalcular: "Calcular Conversão",
    news1Tit: "Dólar apresenta leve queda após anúncio do Banco Central",
    news1Txt: "O mercado reagiu positivamente às novas medidas de controle de inflação, fazendo a moeda americana recuar frente ao Real.",
    news2Tit: "Euro se estabiliza com foco em decisões da União Europeia",
    news2Txt: "Investidores aguardam o relatório de empregos da zona do euro para definir os próximos passos de investimento.",
    faq1P: "🤔 Como converter?",
    faq1R: "No menu lateral, clique em 'Conversor'. Selecione a moeda de origem e a de destino. Digite o valor e clique em 'Calcular'.",
    faq2P: "📈 As taxas são reais?",
    faq2R: "Não. As taxas são valores fixos e aproximados para fins de demonstração. Para valores reais, consulte órgãos oficiais."
  },
  en: {
    bemVindo: "Welcome",
    heroEyebrow: "Dashboard · updated today",
    heroSub: "Track exchange rates, convert values and keep an eye on the market in one place.",
    heroBtnPrincipal: "Go to converter",
    heroBtnSecundario: "View scoreboard",
    tickerLabel: "Rates in Brazilian Reais (BRL)",
    tituloConversor: "Multi-Currency Converter",
    tabelaTitulo: "🏆 Currency Scoreboard",
    tabelaSub: "Value of 1 unit of each currency in Reais (BRL)",
    thPais: "Country / Currency",
    thSimbolo: "Symbol",
    thCotacao: "Rate (R$)",
    ajudaTitulo: "Help",
    noticiaTitulo: "Market News 📰",
    noticiaSub: "Stay tuned for the latest exchange movements.",
    lerNoticia: "Read full story",
    configTitulo: "Profile Settings ⚙️",
    configSub: "Customize your converter experience.",
    idiomaLabel: "System Language",
    privacidadeLabel: "Privacy Mode",
    privacidadeSub: "Automatically hide converted values.",
    btnSalvar: "Save Changes",
    btnRestaurar: "Restore Default",
    resultadoLabel: "Estimated final result:",
    btnCalcular: "Calculate Conversion",
    news1Tit: "Dollar shows slight drop after Central Bank announcement",
    news1Txt: "The market reacted positively to new inflation control measures, causing the US currency to fall against the Real.",
    news2Tit: "Euro stabilizes with focus on European Union decisions",
    news2Txt: "Investors await the eurozone jobs report to define the next investment steps.",
    faq1P: "🤔 How to convert?",
    faq1R: "In the sidebar, click 'Converter'. Select the source and destination currency. Enter the value and click 'Calculate'.",
    faq2P: "📈 Are rates real?",
    faq2R: "No. Rates are fixed and approximate values for demonstration purposes."
  },
  es: {
    bemVindo: "Bienvenido",
    heroEyebrow: "Panel · actualizado hoy",
    heroSub: "Sigue las cotizaciones, convierte valores y mantente al tanto del mercado en un solo lugar.",
    heroBtnPrincipal: "Ir al conversor",
    heroBtnSecundario: "Ver marcador",
    tickerLabel: "Cotizaciones en Reales (BRL)",
    tituloConversor: "Conversor Multidivisas",
    tabelaTitulo: "🏆 Marcador de Monedas",
    tabelaSub: "Cuánto vale 1 unidad de cada moneda en Reales (BRL)",
    thPais: "País / Moneda",
    thSimbolo: "Símbolo",
    thCotacao: "Cotización (R$)",
    ajudaTitulo: "Ayuda",
    noticiaTitulo: "Noticias del Mercado 📰",
    noticiaSub: "Manténgase al día con los últimos movimientos del mercado.",
    lerNoticia: "Leer noticia completa",
    configTitulo: "Configuración del Perfil ⚙️",
    configSub: "Personaliza tu experiencia.",
    idiomaLabel: "Idioma del Sistema",
    privacidadeLabel: "Modo de Privacidad",
    privacidadeSub: "Ocultar automáticamente los valores convertidos.",
    btnSalvar: "Guardar Cambios",
    btnRestaurar: "Restaurar Patrón",
    resultadoLabel: "Resultado final estimado:",
    btnCalcular: "Calcular Conversión",
    news1Tit: "El dólar cae levemente tras el anuncio del Banco Central",
    news1Txt: "El mercado reaccionó positivamente a las nuevas medidas de control de la inflación.",
    news2Tit: "El euro se estabiliza con el foco en la Unión Europea",
    news2Txt: "Los inversores esperan el informe de empleo de la eurozona.",
    faq1P: "🤔 ¿Cómo convertir?",
    faq1R: "En el menú lateral, haga clic en 'Conversor'. Seleccione la moneda y haga clic en 'Calcular'.",
    faq2P: "📈 ¿Las tasas son reales?",
    faq2R: "No. Las tasas son valores fijos con fines de demostración."
  }
};

const bandeiras = {
  USD: '🇺🇸', EUR: '🇪🇺', GBP: '🇬🇧', CHF: '🇨🇭', CAD: '🇨🇦',
  AUD: '🇦🇺', CNY: '🇨🇳', JPY: '🇯🇵', ARS: '🇦🇷', BRL: '🇧🇷'
};

function App() {
  const [telaAtiva, setTelaAtiva] = useState('boas-vindas');
  const [valor, setValor] = useState(0);
  const [deMoeda, setDeMoeda] = useState('BRL');
  const [paraMoeda, setParaMoeda] = useState('USD');
  const [resultado, setResultado] = useState(0);
  const [idioma, setIdioma] = useState('pt');
  const [privacidadeAtiva, setPrivacidadeAtiva] = useState(false);
  const t = traducoes[idioma];
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  const taxasParaReal = {
    BRL: 1, USD: 5.50, EUR: 6.00, GBP: 7.10, ARS: 0.0065,
    CAD: 4.10, AUD: 3.70, JPY: 0.037, CNY: 0.77, CHF: 6.40
  };

  const simbolos = {
    BRL: 'R$', USD: 'US$', EUR: '€', GBP: '£', ARS: '$',
    CAD: 'C$', AUD: 'A$', JPY: '¥', CNY: '¥', CHF: 'Fr'
  };

  const moedasTicker = ['USD', 'EUR', 'GBP', 'CHF', 'CAD', 'AUD', 'CNY', 'JPY', 'ARS'];

  const converterMoeda = () => {
    if (valor <= 0) return;
    const valorEmReais = valor * taxasParaReal[deMoeda];
    const valorFinal = valorEmReais / taxasParaReal[paraMoeda];
    setResultado(valorFinal);
  };

  const irPara = (tela) => setTelaAtiva(tela);

  return (
    <div className={`layout ${temaEscuro ? 'dark-mode' : ''}`}>
      <Container trocarTela={(novaTela) => {
        setTelaAtiva(novaTela);
        setMenuAberto(false);
      }}
        idioma={idioma}
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
        telaAtiva={telaAtiva} />

      <div className="corpo">
        <Containerh temaEscuro={temaEscuro} alternarTema={() => setTemaEscuro(!temaEscuro)} abrirMenu={() => setMenuAberto(!menuAberto)}
          menuAberto={menuAberto} />

        <main className="conteudo-principal">

          {telaAtiva === 'boas-vindas' && (
            <div className="boas-vindas-wrap">
              <span className="hero-eyebrow">{t.heroEyebrow}</span>
              <h2 className="hero-titulo">{t.bemVindo} 👋</h2>
              <p className="hero-sub">{t.heroSub}</p>

              <div className="ticker">
                <span className="ticker-label">{t.tickerLabel}</span>
                <div className="ticker-track">
                  <div className="ticker-list">
                    {[...moedasTicker, ...moedasTicker].map((id, i) => (
                      <span className="ticker-item" key={id + i}>
                        <span className="flag">{bandeiras[id]}</span>
                        {id}
                        <span className="val">R$ {taxasParaReal[id].toFixed(2)}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hero-acoes">
                <button className="hero-btn principal" onClick={() => irPara('conversor')}>{t.heroBtnPrincipal}</button>
                <button className="hero-btn secundario" onClick={() => irPara('tabela')}>{t.heroBtnSecundario}</button>
              </div>
            </div>
          )}

          {telaAtiva === 'conversor' && (
            <div className="conversor-container">
              <h3>{t.tituloConversor}</h3>
              <div className="conversor-grid">
                <div className="campo">
                  <label>De:</label>
                  <select value={deMoeda} onChange={(e) => { setDeMoeda(e.target.value); setResultado(0); }}>
                    <option value="BRL">🇧🇷 Brasil (Real)</option>
                    <option value="USD">🇺🇸 EUA (Dólar)</option>
                    <option value="EUR">🇪🇺 Europa (Euro)</option>
                    <option value="GBP">🇬🇧 Reino Unido (Libra)</option>
                    <option value="ARS">🇦🇷 Argentina (Peso)</option>
                    <option value="CAD">🇨🇦 Canadá (Dólar)</option>
                    <option value="AUD">🇦🇺 Austrália (Dólar)</option>
                    <option value="JPY">🇯🇵 Japão (Iene)</option>
                    <option value="CNY">🇨🇳 China (Yuan)</option>
                    <option value="CHF">🇨🇭 Suíça (Franco)</option>
                  </select>
                </div>
                <div className="seta-troca"> ➡️ </div>
                <div className="campo">
                  <label>Para:</label>
                  <select value={paraMoeda} onChange={(e) => { setParaMoeda(e.target.value); setResultado(0); }}>
                    <option value="USD">🇺🇸 EUA (Dólar)</option>
                    <option value="BRL">🇧🇷 Brasil (Real)</option>
                    <option value="EUR">🇪🇺 Europa (Euro)</option>
                    <option value="GBP">🇬🇧 Reino Unido (Libra)</option>
                    <option value="ARS">🇦🇷 Argentina (Peso)</option>
                    <option value="CAD">🇨🇦 Canadá (Dólar)</option>
                    <option value="AUD">🇦🇺 Austrália (Dólar)</option>
                    <option value="JPY">🇯🇵 Japão (Iene)</option>
                    <option value="CNY">🇨🇳 China (Yuan)</option>
                    <option value="CHF">🇨🇭 Suíça (Franco)</option>
                  </select>
                </div>
              </div>
              <div className="campo-valor">
                <input type="number" placeholder="Valor para converter" onChange={(e) => { setValor(Number(e.target.value)); setResultado(0); }} />
              </div>
              <button onClick={converterMoeda}>{t.btnCalcular}</button>
              {resultado > 0 && (
                <div className="resultado-box">
                  <span>{t.resultadoLabel}</span>
                  <h4>{privacidadeAtiva ? "••••••" : `${simbolos[paraMoeda]} ${resultado.toFixed(2)}`}</h4>
                </div>
              )}
            </div>
          )}

          {telaAtiva === 'tabela' && (
            <div className="tabela-container">
              <div className="tabela-header">
                <h3>{t.tabelaTitulo}</h3>
                <p>{t.tabelaSub}</p>
              </div>
              <table className="tabela-ranking">
                <thead>
                  <tr>
                    <th>{t.thPais}</th>
                    <th>{t.thSimbolo}</th>
                    <th>{t.thCotacao}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 'USD', nome: 'EUA (Dólar)', flag: '🇺🇸' },
                    { id: 'EUR', nome: 'Europa (Euro)', flag: '🇪🇺' },
                    { id: 'GBP', nome: 'Reino Unido (Libra)', flag: '🇬🇧' },
                    { id: 'CHF', nome: 'Suíça (Franco)', flag: '🇨🇭' },
                    { id: 'CAD', nome: 'Canadá (Dólar)', flag: '🇨🇦' },
                    { id: 'AUD', nome: 'Austrália (Dólar)', flag: '🇦🇺' },
                    { id: 'CNY', nome: 'China (Yuan)', flag: '🇨🇳' },
                    { id: 'JPY', nome: 'Japão (Iene)', flag: '🇯🇵' },
                    { id: 'ARS', nome: 'Argentina (Peso)', flag: '🇦🇷' },
                  ].map((item) => (
                    <tr key={item.id}>
                      <td className="td-pais"><span className="flag">{item.flag}</span> {item.nome}</td>
                      <td className="td-simbolo">{simbolos[item.id]}</td>
                      <td className="td-valor"><strong>R$ {taxasParaReal[item.id].toFixed(2)}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {telaAtiva === 'noticias' && (
            <div className="conteudo-card">
              <h3 className="titulo-secao">{t.noticiaTitulo}</h3>
              <p className="subtitulo-secao">{t.noticiaSub}</p>
              <div className="noticias-lista">
                <div className="noticia-item">
                  <span className="noticia-data">20 de Janeiro, 2026</span>
                  <h4>{t.news1Tit}</h4>
                  <p>{t.news1Txt}</p>
                  <a href="https://valor.globo.com/valor-data/" target="_blank" rel="noopener noreferrer" className="btn-link-externo">{t.lerNoticia}</a>
                </div>
                <div className="noticia-item">
                  <span className="noticia-data">19 de Janeiro, 2026</span>
                  <h4>{t.news2Tit}</h4>
                  <p>{t.news2Txt}</p>
                  <a href="https://www.infomoney.com.br/mercados/cambio/" target="_blank" rel="noopener noreferrer" className="btn-link-externo">{t.lerNoticia}</a>
                </div>
              </div>
            </div>
          )}

          {telaAtiva === 'configuracoes' && (
            <div className="conteudo-card">
              <h3 className="titulo-secao">{t.configTitulo}</h3>
              <p className="subtitulo-secao">{t.configSub}</p>
              <div className="config-lista">
                <div className="config-item">
                  <div className="config-info">
                    <h4>{t.idiomaLabel}</h4>
                    <p>Selecione a língua da interface.</p>
                  </div>
                  <select className="config-select" value={idioma} onChange={(e) => setIdioma(e.target.value)}>
                    <option value="pt">Português (BR)</option>
                    <option value="en">English (US)</option>
                    <option value="es">Español (ES)</option>
                  </select>
                </div>
                <div className="config-item">
                  <div className="config-info">
                    <h4>{t.privacidadeLabel}</h4>
                    <p>{t.privacidadeSub}</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked={privacidadeAtiva} onChange={() => setPrivacidadeAtiva(!privacidadeAtiva)} />
                    <span className="slider-switch"></span>
                  </label>
                </div>
              </div>
              <div className="config-botoes">
                <button className="btn-reset" onClick={() => window.location.reload()}>{t.btnRestaurar}</button>
              </div>
            </div>
          )}

          {telaAtiva === 'ajuda' && (
            <div className="ajuda-container">
              <h3>{t.ajudaTitulo}</h3>
              <div className="faq-card">
                <strong>{t.faq1P}</strong>
                <p>{t.faq1R}</p>
              </div>
              <div className="faq-card">
                <strong>{t.faq2P}</strong>
                <p>{t.faq2R}</p>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)