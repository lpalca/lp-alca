// Alca — main app with tweaks for headline & CTA variations

const HEADLINES = {
  A: <>Corretagem de café com <em className="it">transparência</em>, do início ao fim.</>,
  B: <>Intermediação séria para quem leva o café <em className="it">a sério.</em></>,
  C: <>Seu negócio de café conduzido por <em className="it">quem entende o mercado.</em></>,
};

const CTAS = {
  direta: { primary: "Fale com um corretor", sub: "Atendimento direto. Sem burocracia." },
  beneficio: { primary: "Negocie com estrutura e transparência", sub: "Um corretor da Alca atende você agora." },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "A",
  "cta": "direta",
  "showSticky": true
}/*EDITMODE-END*/;

const App = () => {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const headline = HEADLINES[tweaks.headline] || HEADLINES.A;
  const cta = CTAS[tweaks.cta] || CTAS.direta;
  const [brokerModalOpen, setBrokerModalOpen] = React.useState(false);

  React.useEffect(() => {
    window.openBrokerModal = () => setBrokerModalOpen(true);
    return () => { window.openBrokerModal = null; };
  }, []);

  return (
    <>
      <Nav />
      <Hero headline={headline} ctaPrimary={cta.primary} ctaSub={cta.sub} />
      <ValueProp />
      <PainSection />
      <SolutionSection />
      <Benefits />
      <Credentials />
      <Offer />
      <Objections />
      <Guarantee />
      <Urgency />
      <FAQSection />
      <FinalCTA ctaPrimary={cta.primary} />
      <PSBlock />
      <Footer />
      {tweaks.showSticky && <StickyContact />}
      <window.BrokerModal open={brokerModalOpen} onClose={() => setBrokerModalOpen(false)} />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Copy">
          <window.TweakRadio
            label="Headline"
            value={tweaks.headline}
            onChange={(v) => setTweak('headline', v)}
            options={[
              { value: 'A', label: 'Confiança' },
              { value: 'B', label: 'Estrutura' },
              { value: 'C', label: 'Parceria' },
            ]}
          />
          <window.TweakRadio
            label="CTA"
            value={tweaks.cta}
            onChange={(v) => setTweak('cta', v)}
            options={[
              { value: 'direta', label: 'Ação direta' },
              { value: 'beneficio', label: 'Benefício' },
            ]}
          />
          <window.TweakToggle
            label="Botão flutuante de contato"
            value={tweaks.showSticky}
            onChange={(v) => setTweak('showSticky', v)}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
