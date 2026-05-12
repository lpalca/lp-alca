// Alca — section components

const { useState, useEffect, useRef } = React;

// Arrow icon
const Arrow = () =>
<svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


// ====== NAV ======
const Nav = () =>
<nav className="nav">
    <div className="nav-inner">
      <a href="#" className="logo">
        <span className="logo-mark">Alca</span>
        <span className="logo-sub">Corretora de Café · est. 2015</span>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="#sobre">Sobre</a>
        <a className="nav-link" href="#solucao">Atuação</a>
        <a className="nav-link" href="#beneficios">Diferenciais</a>
        <a className="nav-link" href="#faq">FAQ</a>
        <a className="btn btn-primary nav-cta" href="#" onClick={(e) => { e.preventDefault(); window.openBrokerModal?.(); }}>
          Fale com a Alca <Arrow />
        </a>
      </div>
    </div>
  </nav>;


// ====== HERO ======
const Hero = ({ headline, ctaPrimary, ctaSub }) =>
<section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
    <window.DottedSurface color={[27, 18, 10]} opacity={0.45} size={5} />
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: 'radial-gradient(ellipse 70% 60% at 30% 40%, rgba(242,235,220,0.55) 0%, rgba(242,235,220,0) 70%)'
    }} />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
        <div className="eyebrow">CORRETAGEM DE CAFÉ ·</div>
        <div className="small mono">EST. 2015 · MG · BR</div>
      </div>

      <div className="hero-content">
        <h1 className="h-display" style={{ margin: '0 0 28px', maxWidth: '16ch' }}>
          {headline}
        </h1>
        <p className="lead" style={{ margin: '0 0 40px' }}>
          Mais de 10 anos conectando compradores e vendedores de café com
          profissionalismo, transparência e compromisso em cada operação.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); window.openBrokerModal?.(); }}>
            {ctaPrimary} <Arrow />
          </a>
          <a className="btn btn-ghost" href="#solucao">Como operamos</a>
        </div>
        <div className="small" style={{ marginTop: 18, fontFamily: 'Geist Mono, monospace', letterSpacing: '0.04em' }}>
          {ctaSub}
        </div>
      </div>

      <div className="hero-stat-floating">
        <div className="hero-stat-num">10+ anos</div>
        <div className="hero-stat-label">no mercado cafeeiro, com clientes que voltam.</div>
      </div>
    </div>
    <style>{`
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
    `}</style>
  </section>;


// ====== VALUE PROP / SOBRE ======
const ValueProp = () =>
<section id="sobre" style={{ padding: '120px 0', background: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
    <div className="container-narrow">
      <div className="eyebrow" style={{ marginBottom: 32 }}>Proposta de valor</div>
      <h2 className="h-1" style={{ margin: '0 0 40px', maxWidth: '20ch' }}>
        Quem trabalha com café sabe:<br />
        <em className="it">o intermediário certo faz toda a diferença.</em>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 32 }} className="vp-grid">
        <p className="body" style={{ margin: 0, fontSize: 17 }}>Seriedade na condução, transparência na intermediação e qualidade em cada negócio. É isso que nos permite trabalhar com volume e gerar melhores condições para ambas as partes.



      </p>
        <p className="body" style={{ margin: 0, fontSize: 17 }}>
          A Alca é uma corretora de café com estrutura, experiência e foco no que
          realmente importa: <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>fazer o negócio acontecer do jeito certo, para os dois
          lados da mesa.</strong> Sem surpresa. Sem promessa vazia. Com profissionalismo do
          começo ao fim.
        </p>
      </div>
    </div>
    <style>{`
      @media (max-width: 760px) { .vp-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }
    `}</style>
  </section>;


// ====== PAIN POINTS (dor) ======
const PAIN = [
"Combinado de um jeito, entregue de outro — e ninguém pra resolver.",
"Pagamento que atrasa sem explicação e sem responsável.",
"Informação desencontrada bem na hora que tudo precisa estar alinhado.",
"Corretor que aparece pra fechar e some quando surge o problema.",
"Condições mal definidas desde o começo da negociação.",
"Operar sem saber se a outra parte tem como honrar o que foi acordado."];


const PainSection = () =>
<section style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '120px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }} className="pain-grid">
        <div>
          <div className="eyebrow" style={{ color: 'rgba(242, 235, 220, 0.6)' }}>Identificação da dor</div>
          <div style={{ height: 24 }} />
          <h2 className="h-1" style={{ margin: 0, color: 'var(--cream)', maxWidth: '14ch' }}>
            Intermediação ruim <em className="it">custa caro</em> — e quem vive do café já sentiu isso na pele.
          </h2>
          <p style={{ marginTop: 32, fontSize: 16, color: 'rgba(242, 235, 220, 0.7)', maxWidth: '30ch' }}>
            Você já passou por isso?
          </p>
        </div>

        <div>
          {PAIN.map((p, i) =>
        <div className="pain-row" key={i}>
              <div className="pain-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="pain-text">{p}</div>
            </div>
        )}
          <p style={{ marginTop: 40, fontSize: 17, color: 'rgba(242, 235, 220, 0.85)', maxWidth: '52ch' }}>
            Uma corretora de verdade não faz mágica. Mas tira esses riscos da mesa —
            e isso é <em className="it" style={{ color: 'var(--cream)' }}>exatamente o que a Alca faz.</em>
          </p>
        </div>
      </div>
    </div>
    <style>{`
      .pain-grid .eyebrow::before { background: rgba(242, 235, 220, 0.6) !important; }
      @media (max-width: 900px) { .pain-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
    `}</style>
  </section>;


// ====== SOLUTION ======
const SolutionSection = () =>
<section id="solucao">
    <div className="container">
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 28 }}>
</div>
          <h2 className="h-1" style={{ margin: 0 }}>
            Uma corretora de café focada em <em className="it">comercialização</em> e <em className="it">exportação</em>.
          </h2>
        </div>
        <div>
          <p className="body" style={{ fontSize: 17, marginTop: 0 }}>Arábica, conilon, comercial interno, exportação e industrias. Trabalhamos com todo tipo de café, acompanhando cada etapa da operação com atenção e responsabilidade.



        </p>
          <p className="body" style={{ fontSize: 17 }}>
            O que oferecemos é direto: processo claro, condições bem definidas e
            compromisso com o que foi combinado. Mais de uma década no mercado nos
            ensinou que não tem outro caminho — <em className="it" style={{ color: 'var(--ink)' }}>negócio bom é negócio feito direito.</em>
          </p>
        </div>
      </div>

      <div className="sol-grid">
        <div className="sol-card">
          <div className="sol-card-cat">03 · EXPORTAÇÃO</div>
          <div className="sol-card-name">Café pronto embarque</div>
          <div className="sol-card-body">Cafés pronto embarque em peneiras separadas (17/18, 15/16, 14/16) e grinders padrão exportação.
        </div>
        </div>
        <div className="sol-card">
          <div className="sol-card-cat">02 · COMERCIAL INTERNO</div>
          <div className="sol-card-name">Café arábica</div>
          <div className="sol-card-body">Todos os tipos de café comercial interno que o mercado trabalha. </div>
        </div>
        <div className="sol-card">
          <div className="sol-card-cat">03 · INDUSTRIA/TORREFAÇÃO</div>
          <div className="sol-card-name">Café baixo e Conilon</div>
          <div className="sol-card-body">Cafés para indústria e torrefação, com padrão consistente para blend e mistura.</div>
        </div>
      </div>
    </div>
  </section>; // ====== BENEFITS ======
const BENEFITS = [
{ t: "Processo claro do começo ao fim", b: "Você sabe o que está negociando, em quais condições e com quais responsabilidades de cada parte." },
{ t: "Café conferido antes do fechamento", b: "Sem surpresa na qualidade nem no padrão da mercadoria que sai." },
{ t: "Pagamento no prazo combinado", b: "Compromisso que a Alca cumpre em toda operação. Sem exceção." },
{ t: "Atendimento para todo tipo de café", b: "Arábica, conilon, fino de xícara, blends para exportação." },
{ t: "+10 anos no mercado", b: "Experiência construída negócio por negócio, com clientes que voltam." },
{ t: "Intermediação completa", b: "Comercialização e exportação acompanhadas de ponta a ponta." }];


const Benefits = () =>
<section id="beneficios" style={{ background: 'var(--cream)', paddingTop: 0 }}>
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Diferenciais</div>
          <h2 className="h-1" style={{ margin: 0, maxWidth: '16ch' }}>
            O que a Alca <em className="it">entrega</em> em toda operação.
          </h2>
        </div>
        <p className="body" style={{ maxWidth: '36ch', margin: 0, fontSize: 16 }}>
          Padrão consistente que faz cliente voltar — independente do volume,
          do tipo de café ou do destino.
        </p>
      </div>

      <div className="benefits-grid">
        {BENEFITS.map((b, i) =>
      <div className="benefit" key={i}>
            <div className="benefit-num">— {String(i + 1).padStart(2, '0')}</div>
            <div>
              <div className="benefit-title">{b.t}</div>
              <p className="benefit-body" style={{ margin: '14px 0 0' }}>{b.b}</p>
            </div>
          </div>
      )}
      </div>
    </div>
  </section>;


// ====== CREDENTIALS BAR ======
const Credentials = () =>
<section className="creds" style={{ padding: '88px 0 0' }}>
    <div className="container">
      <div className="creds-row">
        <div>
          <div className="creds-num">10+</div>
          <div className="creds-label">anos de atuação no mercado cafeeiro.</div>
        </div>
        <div>
          <div className="creds-num">décadas</div>
          <div className="creds-label">de experiência somada entre nossos clientes ativos.</div>
        </div>
        <div>
          <div className="creds-num">alto vol.</div>
          <div className="creds-label">operações conduzidas com a mesma transparência do primeiro dia.</div>
        </div>
      </div>
    </div>

    <div style={{ position: 'relative', height: 220, marginTop: 80, overflow: 'hidden', borderTop: '1px solid rgba(242, 235, 220, 0.18)', borderBottom: '1px solid rgba(242, 235, 220, 0.18)' }}>
      <window.DottedSurface color={[240, 232, 216]} opacity={0.6} size={5} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(90deg, rgba(27,18,10,0.8) 0%, rgba(27,18,10,0) 18%, rgba(27,18,10,0) 82%, rgba(27,18,10,0.8) 100%)'
      }} />
    </div>
  </section>; // ====== OFFER ======
const OFFER = ["Corretagem para comercialização e exportação de café no mercado interno",
"Todo tipo de café: arábica, conilon, bebida, rio, indústria e  exportação",
"Condições transparentes",
"Acompanhamento de todas as etapas da operação",
"Atendimento direto e sem burocracia",
"Mais de 10 anos no mercado cafeeiro",
"Relacionamento construído com seriedade e compromisso"];


const Offer = () =>
<section style={{ background: 'var(--cream)' }}>
    <div className="container">
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Apresentação da oferta</div>
          <h2 className="h-1" style={{ margin: '0 0 24px' }}>
            Intermediação completa, do <em className="it">campo ao embarque.</em>
          </h2>
          <p className="body" style={{ fontSize: 17, maxWidth: '40ch' }}>
            Comerciante local ou exportador de alto volume, o padrão é o mesmo.
          </p>
        </div>

        <div className="offer">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <div className="mono small" style={{ color: 'var(--olive)' }}>O QUE INCLUI</div>
            <div className="mono small">07 itens</div>
          </div>
          <div className="rule-strong" />
          <ul className="offer-list">
            {OFFER.map((o, i) =>
          <li key={i}>
                <span className="offer-check">✓</span>
                <span>{o}</span>
              </li>
          )}
          </ul>
          <div className="offer-divider" />
          <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: 22, lineHeight: 1.35, margin: 0 }}>
            <em className="it">Fale com a gente.</em>
          </p>
          <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); window.openBrokerModal?.(); }} style={{ marginTop: 24 }}>
            Fale com um corretor <Arrow />
          </a>
        </div>
      </div>
    </div>
  </section>;


// ====== OBJECTIONS ======
const OBJ = [
{ q: "“Já tenho meu comprador fixo.”", a: "Ótimo. Ter a Alca na sua rede não substitui seus contatos — soma. Quando surgir uma demanda fora do padrão ou uma janela boa, a gente já vai estar aqui." },
{ q: "“Não conheço a Alca.”", a: "Justo. A primeira conversa é sem compromisso — você conhece como operamos, vê o histórico e decide se faz sentido. O mercado já nos conhece há mais de uma década; agora é a sua vez." },
{ q: "“Minha operação é menor, será que encaixa?”", a: "Encaixa. Atendemos portes diferentes. O critério aqui não é volume — é seriedade. Se você trabalha com café com comprometimento, tem espaço." },
{ q: "“Já fui mal atendido por corretor antes.”", a: "A gente sabe que isso acontece — e é exatamente por isso que a Alca trabalha com condição clara desde o começo e compromisso com o combinado até o fim. Transparência aqui não é diferencial. É o mínimo." }];


const Objections = () =>
<section style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
    <div className="container-narrow">
      <div className="eyebrow" style={{ marginBottom: 28 }}>Quebra de objeções</div>
      <h2 className="h-1" style={{ margin: '0 0 64px', maxWidth: '20ch' }}>
        Você pode estar pensando…
      </h2>
      <div className="obj-grid">
        {OBJ.map((o, i) =>
      <div className="obj" key={i}>
            <div className="obj-q">{o.q}</div>
            <p className="obj-a" style={{ margin: 0 }}>{o.a}</p>
          </div>
      )}
      </div>
    </div>
  </section>;


// ====== GUARANTEE ======
const Guarantee = () =>
<section>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 80, alignItems: 'center' }} className="gar-grid">
        <div className="seal">
          <div className="seal-ring" />
          <div>
            <div className="seal-num">10+</div>
            <div className="seal-label">Anos de mercado<br />Intermediação com transparência</div>
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>A garantia da Alca</div>
          <h2 className="h-1" style={{ margin: '0 0 24px', maxWidth: '20ch' }}>
            Construída em <em className="it">cada negócio</em> que a gente faz.
          </h2>
          <p className="body" style={{ fontSize: 17, maxWidth: '52ch' }}>
            Mais de 10 anos no mercado, clientes que voltam e operações conduzidas
            com o mesmo padrão desde o primeiro dia — isso não se constrói no
            improviso.
          </p>
          <p className="body" style={{ fontSize: 17, maxWidth: '52ch' }}>
            <em className="it" style={{ color: 'var(--ink)' }}>Você não precisa acreditar na nossa palavra.</em> Pergunte a quem já operou
            com a gente.
          </p>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 760px) { .gar-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
    `}</style>
  </section>;


// ====== URGENCY ======
const Urgency = () =>
<section className="urgency">
    <div className="container-narrow" style={{ textAlign: 'center' }}>
      <div className="eyebrow no-line" style={{ marginBottom: 24, justifyContent: 'center' }}>Urgência</div>
      <h2 className="h-1" style={{ margin: '0 auto 28px', color: 'var(--cream)', maxWidth: '20ch' }}>
        O mercado de café <em className="it">não espera.</em>
      </h2>
      <p className="body" style={{ fontSize: 18, maxWidth: '52ch', margin: '0 auto 16px' }}>
        Quando a oportunidade aparece, quem tem uma corretora estruturada do lado
        consegue agir no momento certo.
      </p>
      <p className="body" style={{ fontSize: 18, maxWidth: '52ch', margin: '0 auto 36px' }}>
        Quando você precisar, a Alca precisa já te conhecer.
      </p>
      <a className="btn btn-cream" href="#" onClick={(e) => { e.preventDefault(); window.openBrokerModal?.(); }}>
        Comece essa conversa agora <Arrow />
      </a>
    </div>
  </section>;


// ====== FAQ ======
const FAQ = [
{ q: "O que faz uma corretora de café?", a: "A corretora intermedia a negociação entre comprador e vendedor — garante que as condições estão claras, que a mercadoria foi conferida e que o negócio é honrado pelos dois lados. A Alca acompanha cada etapa do processo." },
{ q: "Quem a Alca atende?", a: "Comerciantes, exportadores, torrefadores — toda a cadeia. O que importa é que a operação seja conduzida com seriedade dos dois lados." },
{ q: "Com quais tipos de café trabalham?", a: "Todo tipo. Arábica, conilon, fino de xícara, blends para exportação — qualquer origem e padrão de qualidade." },
{ q: "Como funciona a conferência da mercadoria?", a: "Antes do fechamento, o café é conferido para garantir que está dentro das condições negociadas. Sem surpresa na entrega." },
{ q: "Minha operação é menor. Tem espaço pra mim?", a: "Tem. Atendemos portes diferentes — fale com a gente que vamos entender o que faz sentido pra sua operação." },
{ q: "Como falo com a Alca?", a: "Pelo botão de contato. Um corretor responde diretamente — sem formulário longo, sem robô, sem enrolação." },
{ q: "Como sei que posso confiar?", a: "Mais de 10 anos no mercado, clientes com décadas de atuação que continuam operando com a gente e processo transparente desde a primeira conversa. A confiança se constrói na prática — e estamos prontos pra mostrar." }];


const FAQSection = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: 'var(--cream)' }}>
      <div className="container-narrow">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }} className="faq-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>FAQ</div>
            <h2 className="h-2" style={{ margin: 0 }}>
              Perguntas que costumam <em className="it">aparecer.</em>
            </h2>
            <p className="small" style={{ marginTop: 24, maxWidth: '24ch' }}>
              Não achou o que procura? Fale direto com um corretor.
            </p>
            <a className="btn btn-ghost" href="#" onClick={(e) => { e.preventDefault(); window.openBrokerModal?.(); }} style={{ marginTop: 20, fontSize: 13, padding: '12px 18px' }}>
              Fale com a Alca <Arrow />
            </a>
          </div>
          <div className="faq-list">
            {FAQ.map((f, i) =>
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
                <button className="faq-q-btn" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-toggle">+</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) { .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>);

};

// ====== FINAL CTA ======
const FinalCTA = ({ ctaPrimary }) =>
<section id="contato" className="final">
    <div className="container-narrow">
      <div className="eyebrow" style={{ marginBottom: 32 }}>O parceiro certo</div>
      <h2 className="h-display" style={{ margin: '0 0 40px', color: 'var(--cream)', maxWidth: '14ch' }}>
        No café, o parceiro certo <em className="it">não é o que aparece mais.</em>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 56 }} className="final-grid">
        <p className="body" style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
          É o que aparece quando o negócio precisa ser feito — com clareza nas
          condições, seriedade na condução e compromisso até o fim.
        </p>
        <p className="body" style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
          É isso que a Alca faz há mais de 10 anos. E é assim que a gente quer
          fazer com você também.
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20 }}>
        <a className="final-btn" href="#" onClick={(e) => { e.preventDefault(); window.openBrokerModal?.(); }}>
          {ctaPrimary} <Arrow />
        </a>
        <div className="small" style={{ color: 'rgba(242, 235, 220, 0.6)', fontFamily: 'Geist Mono, monospace', letterSpacing: '0.04em' }}>
          Um corretor atende você agora.
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 760px) { .final-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }
    `}</style>
  </section>;


// ====== PS BLOCK ======
const PSBlock = () =>
<section className="ps">
    <div className="container">
      <div className="ps-block">
        <div className="ps-label">P.S.</div>
        <p className="ps-text" style={{ margin: 0 }}>
          Corretora de café boa não se vende em propaganda — <em className="it">se mostra em negócio fechado.</em> Seriedade na
          condução, transparência na intermediação e qualidade em cada negócio: é
          assim que a Alca trabalha há mais de uma década. Se quiser conversar, a
          porta está aberta.
        </p>
      </div>
    </div>
  </section>;


// ====== FOOTER ======
const Footer = () =>
<footer className="footer">
    <div className="container">
      <div className="footer-row">
        <div className="footer-col">
          <div className="footer-mark">Alca</div>
          <p className="small" style={{ color: 'rgba(242, 235, 220, 0.6)', maxWidth: '32ch' }}>
            Corretora de café com atuação em comercialização e exportação.
            Mais de 10 anos no mercado.
          </p>
        </div>
        <div className="footer-col">
          <h4></h4>
          <a className="footer-link" href="#"></a>
          <a className="footer-link" href="#"></a>
          <a className="footer-link" href="#"></a>
        </div>
        <div className="footer-col">
          <h4></h4>
          <a className="footer-link" href="#"></a>
          <a className="footer-link" href="#"></a>
          <a className="footer-link" href="#"></a>
          <a className="footer-link" href="#"></a>
        </div>
        <div className="footer-col">
          <h4>Contato</h4>
          <a className="footer-link" href="#" onClick={(e) => { e.preventDefault(); window.openBrokerModal?.(); }}>WhatsApp</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Alca Serviços e Negócios · Todos os direitos reservados.</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a className="footer-link" href="#" style={{ padding: 0 }}>Política de Privacidade</a>
          <a className="footer-link" href="#" style={{ padding: 0 }}>LGPD</a>
        </div>
      </div>
    </div>
  </footer>;


// ====== STICKY CONTACT ======
const StickyContact = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href="#contato" className={"sticky-contact" + (visible ? " visible" : "")}>
      <span className="dot" />
      Fale com um corretor
    </a>);

};

// ====== BROKER MODAL ======
const BROKERS = [
  { name: "Caio Laitano",    role: "Corretor de Café", phone: "5533998101964" },
  { name: "Lucas Cravo",     role: "Corretor de Café", phone: "5533998359867" },
  { name: "Layonel Duarte",  role: "Corretor de Café", phone: "5533999290211" },
];

const BrokerModal = ({ open, onClose }) => {
  const WA_MSG = encodeURIComponent("Olá! Vim pelo site da Alca e quero conversar.");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <style>{`
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
      `}</style>
      <div className="bk-overlay" onClick={onClose}>
        <div className="bk-modal" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Equipe Alca</div>
              <h3 className="h-2" style={{ margin: 0 }}>Fale com um corretor</h3>
            </div>
            <button onClick={onClose} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--umber)', fontSize: 20, lineHeight: 1, padding: '4px 6px', marginTop: -4,
            }}>✕</button>
          </div>
          <div>
            {BROKERS.map((b, i) => (
              <a key={i} className="bk-card"
                href={`https://wa.me/${b.phone}?text=${WA_MSG}`}
                target="_blank" rel="noopener noreferrer"
              >
                <div>
                  <div className="bk-name">{b.name}</div>
                  <div className="bk-role">{b.role}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
          <p className="small" style={{ marginTop: 20, textAlign: 'center', fontFamily: 'Geist Mono, monospace', letterSpacing: '0.04em' }}>
            Atendimento direto. Sem formulário. Sem enrolação.
          </p>
        </div>
      </div>
    </>
  );
};

Object.assign(window, {
  Nav, Hero, ValueProp, PainSection, SolutionSection,
  Benefits, Credentials, Offer, Objections, Guarantee,
  Urgency, FAQSection, FinalCTA, PSBlock, Footer, StickyContact, BrokerModal
});