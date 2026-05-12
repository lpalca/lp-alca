// Alca — section components

const {
  useState,
  useEffect,
  useRef
} = React;

// Arrow icon
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  className: "arrow",
  width: "14",
  height: "14",
  viewBox: "0 0 14 14",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1 7H13M13 7L8 2M13 7L8 12",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

// ====== NAV ======
const Nav = () => /*#__PURE__*/React.createElement("nav", {
  className: "nav"
}, /*#__PURE__*/React.createElement("div", {
  className: "nav-inner"
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  className: "logo"
}, /*#__PURE__*/React.createElement("span", {
  className: "logo-mark"
}, "Alca"), /*#__PURE__*/React.createElement("span", {
  className: "logo-sub"
}, "Corretora de Caf\xE9 \xB7 est. 2015")), /*#__PURE__*/React.createElement("div", {
  className: "nav-links"
}, /*#__PURE__*/React.createElement("a", {
  className: "nav-link",
  href: "#sobre"
}, "Sobre"), /*#__PURE__*/React.createElement("a", {
  className: "nav-link",
  href: "#solucao"
}, "Atua\xE7\xE3o"), /*#__PURE__*/React.createElement("a", {
  className: "nav-link",
  href: "#beneficios"
}, "Diferenciais"), /*#__PURE__*/React.createElement("a", {
  className: "nav-link",
  href: "#faq"
}, "FAQ"), /*#__PURE__*/React.createElement("a", {
  className: "btn btn-primary nav-cta",
  href: "#",
  onClick: e => {
    e.preventDefault();
    window.openBrokerModal?.();
  }
}, "Fale com a Alca ", /*#__PURE__*/React.createElement(Arrow, null)))));

// ====== HERO ======
const Hero = ({
  headline,
  ctaPrimary,
  ctaSub
}) => /*#__PURE__*/React.createElement("section", {
  className: "hero",
  style: {
    position: 'relative',
    overflow: 'hidden'
  }
}, /*#__PURE__*/React.createElement(window.DottedSurface, {
  color: [27, 18, 10],
  opacity: 0.45,
  size: 5
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: 'radial-gradient(ellipse 70% 60% at 30% 40%, rgba(242,235,220,0.55) 0%, rgba(242,235,220,0) 70%)'
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "container",
  style: {
    position: 'relative',
    zIndex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 56,
    flexWrap: 'wrap',
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "CORRETAGEM DE CAF\xC9 \xB7"), /*#__PURE__*/React.createElement("div", {
  className: "small mono"
}, "EST. 2015 \xB7 MG \xB7 BR")), /*#__PURE__*/React.createElement("div", {
  className: "hero-content"
}, /*#__PURE__*/React.createElement("h1", {
  className: "h-display",
  style: {
    margin: '0 0 28px',
    maxWidth: '16ch'
  }
}, headline), /*#__PURE__*/React.createElement("p", {
  className: "lead",
  style: {
    margin: '0 0 40px'
  }
}, "Mais de 10 anos conectando compradores e vendedores de caf\xE9 com profissionalismo, transpar\xEAncia e compromisso em cada opera\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 14,
    flexWrap: 'wrap',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "btn btn-primary",
  href: "#",
  onClick: e => {
    e.preventDefault();
    window.openBrokerModal?.();
  }
}, ctaPrimary, " ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("a", {
  className: "btn btn-ghost",
  href: "#solucao"
}, "Como operamos")), /*#__PURE__*/React.createElement("div", {
  className: "small",
  style: {
    marginTop: 18,
    fontFamily: 'Geist Mono, monospace',
    letterSpacing: '0.04em'
  }
}, ctaSub)), /*#__PURE__*/React.createElement("div", {
  className: "hero-stat-floating"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-stat-num"
}, "10+ anos"), /*#__PURE__*/React.createElement("div", {
  className: "hero-stat-label"
}, "no mercado cafeeiro, com clientes que voltam."))), /*#__PURE__*/React.createElement("style", null, `
      .hero-content { max-width: 68ch; padding: 32px 0 200px; }
      .hero-stat-floating {
        position: absolute;
        right: 32px;
        bottom: 56px;
        background: var(--paper);
        border: 1px solid var(--line);
        padding: 20px 24px;
        max-width: 260px;
        z-index: 2;
        box-shadow: 0 18px 50px rgba(27,18,10,0.08);
      }
      @media (max-width: 760px) {
        .hero-stat-floating { position: static; margin-top: 48px; max-width: 100%; }
        .hero-content { padding-bottom: 0; }
      }
    `));

// ====== VALUE PROP / SOBRE ======
const ValueProp = () => /*#__PURE__*/React.createElement("section", {
  id: "sobre",
  style: {
    padding: '120px 0',
    background: 'var(--paper)',
    borderTop: '1px solid var(--line)',
    borderBottom: '1px solid var(--line)'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "container-narrow"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 32
  }
}, "Proposta de valor"), /*#__PURE__*/React.createElement("h2", {
  className: "h-1",
  style: {
    margin: '0 0 40px',
    maxWidth: '20ch'
  }
}, "Quem trabalha com caf\xE9 sabe:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "o intermedi\xE1rio certo faz toda a diferen\xE7a.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    marginTop: 32
  },
  className: "vp-grid"
}, /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    margin: 0,
    fontSize: 17
  }
}, "Seriedade na condu\xE7\xE3o, transpar\xEAncia na intermedia\xE7\xE3o e qualidade em cada neg\xF3cio. \xC9 isso que nos permite trabalhar com volume e gerar melhores condi\xE7\xF5es para ambas as partes."), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    margin: 0,
    fontSize: 17
  }
}, "A Alca \xE9 uma corretora de caf\xE9 com estrutura, experi\xEAncia e foco no que realmente importa: ", /*#__PURE__*/React.createElement("strong", {
  style: {
    color: 'var(--ink)',
    fontWeight: 500
  }
}, "fazer o neg\xF3cio acontecer do jeito certo, para os dois lados da mesa."), " Sem surpresa. Sem promessa vazia. Com profissionalismo do come\xE7o ao fim."))), /*#__PURE__*/React.createElement("style", null, `
      @media (max-width: 760px) { .vp-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }
    `));

// ====== PAIN POINTS (dor) ======
const PAIN = ["Combinado de um jeito, entregue de outro — e ninguém pra resolver.", "Pagamento que atrasa sem explicação e sem responsável.", "Informação desencontrada bem na hora que tudo precisa estar alinhado.", "Corretor que aparece pra fechar e some quando surge o problema.", "Condições mal definidas desde o começo da negociação.", "Operar sem saber se a outra parte tem como honrar o que foi acordado."];
const PainSection = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'var(--ink)',
    color: 'var(--cream)',
    padding: '120px 0'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.4fr',
    gap: 80
  },
  className: "pain-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    color: 'rgba(242, 235, 220, 0.6)'
  }
}, "Identifica\xE7\xE3o da dor"), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 24
  }
}), /*#__PURE__*/React.createElement("h2", {
  className: "h-1",
  style: {
    margin: 0,
    color: 'var(--cream)',
    maxWidth: '14ch'
  }
}, "Intermedia\xE7\xE3o ruim ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "custa caro"), " \u2014 e quem vive do caf\xE9 j\xE1 sentiu isso na pele."), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 32,
    fontSize: 16,
    color: 'rgba(242, 235, 220, 0.7)',
    maxWidth: '30ch'
  }
}, "Voc\xEA j\xE1 passou por isso?")), /*#__PURE__*/React.createElement("div", null, PAIN.map((p, i) => /*#__PURE__*/React.createElement("div", {
  className: "pain-row",
  key: i
}, /*#__PURE__*/React.createElement("div", {
  className: "pain-num"
}, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
  className: "pain-text"
}, p))), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 40,
    fontSize: 17,
    color: 'rgba(242, 235, 220, 0.85)',
    maxWidth: '52ch'
  }
}, "Uma corretora de verdade n\xE3o faz m\xE1gica. Mas tira esses riscos da mesa \u2014 e isso \xE9 ", /*#__PURE__*/React.createElement("em", {
  className: "it",
  style: {
    color: 'var(--cream)'
  }
}, "exatamente o que a Alca faz."))))), /*#__PURE__*/React.createElement("style", null, `
      .pain-grid .eyebrow::before { background: rgba(242, 235, 220, 0.6) !important; }
      @media (max-width: 900px) { .pain-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
    `));

// ====== SOLUTION ======
const SolutionSection = () => /*#__PURE__*/React.createElement("section", {
  id: "solucao"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "grid-2",
  style: {
    alignItems: 'start'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 28
  }
}), /*#__PURE__*/React.createElement("h2", {
  className: "h-1",
  style: {
    margin: 0
  }
}, "Uma corretora de caf\xE9 focada em ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "comercializa\xE7\xE3o"), " e ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "exporta\xE7\xE3o"), ".")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    fontSize: 17,
    marginTop: 0
  }
}, "Ar\xE1bica, conilon, comercial interno, exporta\xE7\xE3o e industrias. Trabalhamos com todo tipo de caf\xE9, acompanhando cada etapa da opera\xE7\xE3o com aten\xE7\xE3o e responsabilidade."), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    fontSize: 17
  }
}, "O que oferecemos \xE9 direto: processo claro, condi\xE7\xF5es bem definidas e compromisso com o que foi combinado. Mais de uma d\xE9cada no mercado nos ensinou que n\xE3o tem outro caminho \u2014 ", /*#__PURE__*/React.createElement("em", {
  className: "it",
  style: {
    color: 'var(--ink)'
  }
}, "neg\xF3cio bom \xE9 neg\xF3cio feito direito.")))), /*#__PURE__*/React.createElement("div", {
  className: "sol-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "sol-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "sol-card-cat"
}, "03 \xB7 EXPORTA\xC7\xC3O"), /*#__PURE__*/React.createElement("div", {
  className: "sol-card-name"
}, "Caf\xE9 pronto embarque"), /*#__PURE__*/React.createElement("div", {
  className: "sol-card-body"
}, "Caf\xE9s pronto embarque em peneiras separadas (17/18, 15/16, 14/16) e grinders padr\xE3o exporta\xE7\xE3o.")), /*#__PURE__*/React.createElement("div", {
  className: "sol-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "sol-card-cat"
}, "02 \xB7 COMERCIAL INTERNO"), /*#__PURE__*/React.createElement("div", {
  className: "sol-card-name"
}, "Caf\xE9 ar\xE1bica"), /*#__PURE__*/React.createElement("div", {
  className: "sol-card-body"
}, "Todos os tipos de caf\xE9 comercial interno que o mercado trabalha.\xA0")), /*#__PURE__*/React.createElement("div", {
  className: "sol-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "sol-card-cat"
}, "03 \xB7 INDUSTRIA/TORREFA\xC7\xC3O"), /*#__PURE__*/React.createElement("div", {
  className: "sol-card-name"
}, "Caf\xE9 baixo e Conilon"), /*#__PURE__*/React.createElement("div", {
  className: "sol-card-body"
}, "Caf\xE9s para ind\xFAstria e torrefa\xE7\xE3o, com padr\xE3o consistente para blend e mistura."))))); // ====== BENEFITS ======
const BENEFITS = [{
  t: "Processo claro do começo ao fim",
  b: "Você sabe o que está negociando, em quais condições e com quais responsabilidades de cada parte."
}, {
  t: "Café conferido antes do fechamento",
  b: "Sem surpresa na qualidade nem no padrão da mercadoria que sai."
}, {
  t: "Pagamento no prazo combinado",
  b: "Compromisso que a Alca cumpre em toda operação. Sem exceção."
}, {
  t: "Atendimento para todo tipo de café",
  b: "Arábica, conilon, fino de xícara, blends para exportação."
}, {
  t: "+10 anos no mercado",
  b: "Experiência construída negócio por negócio, com clientes que voltam."
}, {
  t: "Intermediação completa",
  b: "Comercialização e exportação acompanhadas de ponta a ponta."
}];
const Benefits = () => /*#__PURE__*/React.createElement("section", {
  id: "beneficios",
  style: {
    background: 'var(--cream)',
    paddingTop: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    marginBottom: 48,
    flexWrap: 'wrap',
    gap: 24
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 24
  }
}, "Diferenciais"), /*#__PURE__*/React.createElement("h2", {
  className: "h-1",
  style: {
    margin: 0,
    maxWidth: '16ch'
  }
}, "O que a Alca ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "entrega"), " em toda opera\xE7\xE3o.")), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    maxWidth: '36ch',
    margin: 0,
    fontSize: 16
  }
}, "Padr\xE3o consistente que faz cliente voltar \u2014 independente do volume, do tipo de caf\xE9 ou do destino.")), /*#__PURE__*/React.createElement("div", {
  className: "benefits-grid"
}, BENEFITS.map((b, i) => /*#__PURE__*/React.createElement("div", {
  className: "benefit",
  key: i
}, /*#__PURE__*/React.createElement("div", {
  className: "benefit-num"
}, "\u2014 ", String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "benefit-title"
}, b.t), /*#__PURE__*/React.createElement("p", {
  className: "benefit-body",
  style: {
    margin: '14px 0 0'
  }
}, b.b)))))));

// ====== CREDENTIALS BAR ======
const Credentials = () => /*#__PURE__*/React.createElement("section", {
  className: "creds",
  style: {
    padding: '88px 0 0'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "creds-row"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "creds-num"
}, "10+"), /*#__PURE__*/React.createElement("div", {
  className: "creds-label"
}, "anos de atua\xE7\xE3o no mercado cafeeiro.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "creds-num"
}, "d\xE9cadas"), /*#__PURE__*/React.createElement("div", {
  className: "creds-label"
}, "de experi\xEAncia somada entre nossos clientes ativos.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "creds-num"
}, "alto vol."), /*#__PURE__*/React.createElement("div", {
  className: "creds-label"
}, "opera\xE7\xF5es conduzidas com a mesma transpar\xEAncia do primeiro dia.")))), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'relative',
    height: 220,
    marginTop: 80,
    overflow: 'hidden',
    borderTop: '1px solid rgba(242, 235, 220, 0.18)',
    borderBottom: '1px solid rgba(242, 235, 220, 0.18)'
  }
}, /*#__PURE__*/React.createElement(window.DottedSurface, {
  color: [240, 232, 216],
  opacity: 0.6,
  size: 5
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background: 'linear-gradient(90deg, rgba(27,18,10,0.8) 0%, rgba(27,18,10,0) 18%, rgba(27,18,10,0) 82%, rgba(27,18,10,0.8) 100%)'
  }
}))); // ====== OFFER ======
const OFFER = ["Corretagem para comercialização e exportação de café no mercado interno", "Todo tipo de café: arábica, conilon, bebida, rio, indústria e  exportação", "Condições transparentes", "Acompanhamento de todas as etapas da operação", "Atendimento direto e sem burocracia", "Mais de 10 anos no mercado cafeeiro", "Relacionamento construído com seriedade e compromisso"];
const Offer = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'var(--cream)'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "grid-2",
  style: {
    alignItems: 'start'
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 24
  }
}, "Apresenta\xE7\xE3o da oferta"), /*#__PURE__*/React.createElement("h2", {
  className: "h-1",
  style: {
    margin: '0 0 24px'
  }
}, "Intermedia\xE7\xE3o completa, do ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "campo ao embarque.")), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    fontSize: 17,
    maxWidth: '40ch'
  }
}, "Comerciante local ou exportador de alto volume, o padr\xE3o \xE9 o mesmo.")), /*#__PURE__*/React.createElement("div", {
  className: "offer"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mono small",
  style: {
    color: 'var(--olive)'
  }
}, "O QUE INCLUI"), /*#__PURE__*/React.createElement("div", {
  className: "mono small"
}, "07 itens")), /*#__PURE__*/React.createElement("div", {
  className: "rule-strong"
}), /*#__PURE__*/React.createElement("ul", {
  className: "offer-list"
}, OFFER.map((o, i) => /*#__PURE__*/React.createElement("li", {
  key: i
}, /*#__PURE__*/React.createElement("span", {
  className: "offer-check"
}, "\u2713"), /*#__PURE__*/React.createElement("span", null, o)))), /*#__PURE__*/React.createElement("div", {
  className: "offer-divider"
}), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'Instrument Serif, serif',
    fontSize: 22,
    lineHeight: 1.35,
    margin: 0
  }
}, /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "Fale com a gente.")), /*#__PURE__*/React.createElement("a", {
  className: "btn btn-primary",
  href: "#",
  onClick: e => {
    e.preventDefault();
    window.openBrokerModal?.();
  },
  style: {
    marginTop: 24
  }
}, "Fale com um corretor ", /*#__PURE__*/React.createElement(Arrow, null))))));

// ====== OBJECTIONS ======
const OBJ = [{
  q: "“Já tenho meu comprador fixo.”",
  a: "Ótimo. Ter a Alca na sua rede não substitui seus contatos — soma. Quando surgir uma demanda fora do padrão ou uma janela boa, a gente já vai estar aqui."
}, {
  q: "“Não conheço a Alca.”",
  a: "Justo. A primeira conversa é sem compromisso — você conhece como operamos, vê o histórico e decide se faz sentido. O mercado já nos conhece há mais de uma década; agora é a sua vez."
}, {
  q: "“Minha operação é menor, será que encaixa?”",
  a: "Encaixa. Atendemos portes diferentes. O critério aqui não é volume — é seriedade. Se você trabalha com café com comprometimento, tem espaço."
}, {
  q: "“Já fui mal atendido por corretor antes.”",
  a: "A gente sabe que isso acontece — e é exatamente por isso que a Alca trabalha com condição clara desde o começo e compromisso com o combinado até o fim. Transparência aqui não é diferencial. É o mínimo."
}];
const Objections = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'var(--paper)',
    borderTop: '1px solid var(--line)',
    borderBottom: '1px solid var(--line)'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "container-narrow"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 28
  }
}, "Quebra de obje\xE7\xF5es"), /*#__PURE__*/React.createElement("h2", {
  className: "h-1",
  style: {
    margin: '0 0 64px',
    maxWidth: '20ch'
  }
}, "Voc\xEA pode estar pensando\u2026"), /*#__PURE__*/React.createElement("div", {
  className: "obj-grid"
}, OBJ.map((o, i) => /*#__PURE__*/React.createElement("div", {
  className: "obj",
  key: i
}, /*#__PURE__*/React.createElement("div", {
  className: "obj-q"
}, o.q), /*#__PURE__*/React.createElement("p", {
  className: "obj-a",
  style: {
    margin: 0
  }
}, o.a))))));

// ====== GUARANTEE ======
const Guarantee = () => /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 80,
    alignItems: 'center'
  },
  className: "gar-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "seal"
}, /*#__PURE__*/React.createElement("div", {
  className: "seal-ring"
}), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "seal-num"
}, "10+"), /*#__PURE__*/React.createElement("div", {
  className: "seal-label"
}, "Anos de mercado", /*#__PURE__*/React.createElement("br", null), "Intermedia\xE7\xE3o com transpar\xEAncia"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 24
  }
}, "A garantia da Alca"), /*#__PURE__*/React.createElement("h2", {
  className: "h-1",
  style: {
    margin: '0 0 24px',
    maxWidth: '20ch'
  }
}, "Constru\xEDda em ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "cada neg\xF3cio"), " que a gente faz."), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    fontSize: 17,
    maxWidth: '52ch'
  }
}, "Mais de 10 anos no mercado, clientes que voltam e opera\xE7\xF5es conduzidas com o mesmo padr\xE3o desde o primeiro dia \u2014 isso n\xE3o se constr\xF3i no improviso."), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    fontSize: 17,
    maxWidth: '52ch'
  }
}, /*#__PURE__*/React.createElement("em", {
  className: "it",
  style: {
    color: 'var(--ink)'
  }
}, "Voc\xEA n\xE3o precisa acreditar na nossa palavra."), " Pergunte a quem j\xE1 operou com a gente.")))), /*#__PURE__*/React.createElement("style", null, `
      @media (max-width: 760px) { .gar-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
    `));

// ====== URGENCY ======
const Urgency = () => /*#__PURE__*/React.createElement("section", {
  className: "urgency"
}, /*#__PURE__*/React.createElement("div", {
  className: "container-narrow",
  style: {
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow no-line",
  style: {
    marginBottom: 24,
    justifyContent: 'center'
  }
}, "Urg\xEAncia"), /*#__PURE__*/React.createElement("h2", {
  className: "h-1",
  style: {
    margin: '0 auto 28px',
    color: 'var(--cream)',
    maxWidth: '20ch'
  }
}, "O mercado de caf\xE9 ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "n\xE3o espera.")), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    fontSize: 18,
    maxWidth: '52ch',
    margin: '0 auto 16px'
  }
}, "Quando a oportunidade aparece, quem tem uma corretora estruturada do lado consegue agir no momento certo."), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    fontSize: 18,
    maxWidth: '52ch',
    margin: '0 auto 36px'
  }
}, "Quando voc\xEA precisar, a Alca precisa j\xE1 te conhecer."), /*#__PURE__*/React.createElement("a", {
  className: "btn btn-cream",
  href: "#",
  onClick: e => {
    e.preventDefault();
    window.openBrokerModal?.();
  }
}, "Comece essa conversa agora ", /*#__PURE__*/React.createElement(Arrow, null))));

// ====== FAQ ======
const FAQ = [{
  q: "O que faz uma corretora de café?",
  a: "A corretora intermedia a negociação entre comprador e vendedor — garante que as condições estão claras, que a mercadoria foi conferida e que o negócio é honrado pelos dois lados. A Alca acompanha cada etapa do processo."
}, {
  q: "Quem a Alca atende?",
  a: "Comerciantes, exportadores, torrefadores — toda a cadeia. O que importa é que a operação seja conduzida com seriedade dos dois lados."
}, {
  q: "Com quais tipos de café trabalham?",
  a: "Todo tipo. Arábica, conilon, fino de xícara, blends para exportação — qualquer origem e padrão de qualidade."
}, {
  q: "Como funciona a conferência da mercadoria?",
  a: "Antes do fechamento, o café é conferido para garantir que está dentro das condições negociadas. Sem surpresa na entrega."
}, {
  q: "Minha operação é menor. Tem espaço pra mim?",
  a: "Tem. Atendemos portes diferentes — fale com a gente que vamos entender o que faz sentido pra sua operação."
}, {
  q: "Como falo com a Alca?",
  a: "Pelo botão de contato. Um corretor responde diretamente — sem formulário longo, sem robô, sem enrolação."
}, {
  q: "Como sei que posso confiar?",
  a: "Mais de 10 anos no mercado, clientes com décadas de atuação que continuam operando com a gente e processo transparente desde a primeira conversa. A confiança se constrói na prática — e estamos prontos pra mostrar."
}];
const FAQSection = () => {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-narrow"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 80,
      alignItems: 'start'
    },
    className: "faq-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 24
    }
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "h-2",
    style: {
      margin: 0
    }
  }, "Perguntas que costumam ", /*#__PURE__*/React.createElement("em", {
    className: "it"
  }, "aparecer.")), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 24,
      maxWidth: '24ch'
    }
  }, "N\xE3o achou o que procura? Fale direto com um corretor."), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#",
    onClick: e => {
      e.preventDefault();
      window.openBrokerModal?.();
    },
    style: {
      marginTop: 20,
      fontSize: 13,
      padding: '12px 18px'
    }
  }, "Fale com a Alca ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, FAQ.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "faq-item" + (open === i ? " open" : ""),
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q-btn",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
    className: "faq-toggle"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-a-inner"
  }, f.a))))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 760px) { .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `));
};

// ====== FINAL CTA ======
const FinalCTA = ({
  ctaPrimary
}) => /*#__PURE__*/React.createElement("section", {
  id: "contato",
  className: "final"
}, /*#__PURE__*/React.createElement("div", {
  className: "container-narrow"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow",
  style: {
    marginBottom: 32
  }
}, "O parceiro certo"), /*#__PURE__*/React.createElement("h2", {
  className: "h-display",
  style: {
    margin: '0 0 40px',
    color: 'var(--cream)',
    maxWidth: '14ch'
  }
}, "No caf\xE9, o parceiro certo ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "n\xE3o \xE9 o que aparece mais.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64,
    marginBottom: 56
  },
  className: "final-grid"
}, /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    margin: 0,
    fontSize: 17,
    lineHeight: 1.6
  }
}, "\xC9 o que aparece quando o neg\xF3cio precisa ser feito \u2014 com clareza nas condi\xE7\xF5es, seriedade na condu\xE7\xE3o e compromisso at\xE9 o fim."), /*#__PURE__*/React.createElement("p", {
  className: "body",
  style: {
    margin: 0,
    fontSize: 17,
    lineHeight: 1.6
  }
}, "\xC9 isso que a Alca faz h\xE1 mais de 10 anos. E \xE9 assim que a gente quer fazer com voc\xEA tamb\xE9m.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 20
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "final-btn",
  href: "#",
  onClick: e => {
    e.preventDefault();
    window.openBrokerModal?.();
  }
}, ctaPrimary, " ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("div", {
  className: "small",
  style: {
    color: 'rgba(242, 235, 220, 0.6)',
    fontFamily: 'Geist Mono, monospace',
    letterSpacing: '0.04em'
  }
}, "Um corretor atende voc\xEA agora."))), /*#__PURE__*/React.createElement("style", null, `
      @media (max-width: 760px) { .final-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }
    `));

// ====== PS BLOCK ======
const PSBlock = () => /*#__PURE__*/React.createElement("section", {
  className: "ps"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "ps-block"
}, /*#__PURE__*/React.createElement("div", {
  className: "ps-label"
}, "P.S."), /*#__PURE__*/React.createElement("p", {
  className: "ps-text",
  style: {
    margin: 0
  }
}, "Corretora de caf\xE9 boa n\xE3o se vende em propaganda \u2014 ", /*#__PURE__*/React.createElement("em", {
  className: "it"
}, "se mostra em neg\xF3cio fechado."), " Seriedade na condu\xE7\xE3o, transpar\xEAncia na intermedia\xE7\xE3o e qualidade em cada neg\xF3cio: \xE9 assim que a Alca trabalha h\xE1 mais de uma d\xE9cada. Se quiser conversar, a porta est\xE1 aberta."))));

// ====== FOOTER ======
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "container"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-row"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-mark"
}, "Alca"), /*#__PURE__*/React.createElement("p", {
  className: "small",
  style: {
    color: 'rgba(242, 235, 220, 0.6)',
    maxWidth: '32ch'
  }
}, "Corretora de caf\xE9 com atua\xE7\xE3o em comercializa\xE7\xE3o e exporta\xE7\xE3o. Mais de 10 anos no mercado.")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#"
}), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#"
}), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#"
})), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#"
}), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#"
}), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#"
}), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#"
})), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Contato"), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#",
  onClick: e => {
    e.preventDefault();
    window.openBrokerModal?.();
  }
}, "WhatsApp"))), /*#__PURE__*/React.createElement("div", {
  className: "footer-bottom"
}, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Alca Servi\xE7os e Neg\xF3cios \xB7 Todos os direitos reservados."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 24
  }
}, /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#",
  style: {
    padding: 0
  }
}, "Pol\xEDtica de Privacidade"), /*#__PURE__*/React.createElement("a", {
  className: "footer-link",
  href: "#",
  style: {
    padding: 0
  }
}, "LGPD")))));

// ====== STICKY CONTACT ======
const StickyContact = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "sticky-contact" + (visible ? " visible" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Fale com um corretor");
};

// ====== BROKER MODAL ======
const BROKERS = [{
  name: "Caio Laitano",
  role: "Corretor de Café",
  phone: "5533998101964"
}, {
  name: "Lucas Cravo",
  role: "Corretor de Café",
  phone: "5533998359867"
}, {
  name: "Layonel Duarte",
  role: "Corretor de Café",
  phone: "5533999290211"
}];
const BrokerModal = ({
  open,
  onClose
}) => {
  const WA_MSG = encodeURIComponent("Olá! Vim pelo site da Alca e quero conversar.");
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `
        .bk-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(27, 18, 10, 0.65);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          animation: bk-fade 200ms ease;
        }
        .bk-modal {
          background: var(--paper); border: 1px solid var(--line-strong);
          max-width: 420px; width: 100%; padding: 40px;
          animation: bk-up 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .bk-card {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 22px; border: 1px solid var(--line);
          background: var(--cream); text-decoration: none; color: var(--ink);
          transition: background 160ms, color 160ms, border-color 160ms;
        }
        .bk-card + .bk-card { margin-top: 8px; }
        .bk-card:hover { background: var(--ink); color: var(--cream); border-color: var(--ink); }
        .bk-card:hover .bk-role { color: rgba(242,235,220,0.6); }
        .bk-name { font-family: 'Instrument Serif', serif; font-size: 22px; line-height: 1.2; }
        .bk-role { font-family: 'Geist Mono', monospace; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--umber); margin-top: 4px; transition: color 160ms; }
        @keyframes bk-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bk-up   { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 480px) { .bk-modal { padding: 28px 20px; } }
      `), /*#__PURE__*/React.createElement("div", {
    className: "bk-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "bk-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Equipe Alca"), /*#__PURE__*/React.createElement("h3", {
    className: "h-2",
    style: {
      margin: 0
    }
  }, "Fale com um corretor")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--umber)',
      fontSize: 20,
      lineHeight: 1,
      padding: '4px 6px',
      marginTop: -4
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", null, BROKERS.map((b, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "bk-card",
    href: `https://wa.me/${b.phone}?text=${WA_MSG}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bk-name"
  }, b.name), /*#__PURE__*/React.createElement("div", {
    className: "bk-role"
  }, b.role)), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 8H14M14 8L9 3M14 8L9 13",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 20,
      textAlign: 'center',
      fontFamily: 'Geist Mono, monospace',
      letterSpacing: '0.04em'
    }
  }, "Atendimento direto. Sem formul\xE1rio. Sem enrola\xE7\xE3o."))));
};
Object.assign(window, {
  Nav,
  Hero,
  ValueProp,
  PainSection,
  SolutionSection,
  Benefits,
  Credentials,
  Offer,
  Objections,
  Guarantee,
  Urgency,
  FAQSection,
  FinalCTA,
  PSBlock,
  Footer,
  StickyContact,
  BrokerModal
});