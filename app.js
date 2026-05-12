// Alca — main app with tweaks for headline & CTA variations

const HEADLINES = {
  A: /*#__PURE__*/React.createElement(React.Fragment, null, "Corretagem de caf\xE9 com ", /*#__PURE__*/React.createElement("em", {
    className: "it"
  }, "transpar\xEAncia"), ", do in\xEDcio ao fim."),
  B: /*#__PURE__*/React.createElement(React.Fragment, null, "Intermedia\xE7\xE3o s\xE9ria para quem leva o caf\xE9 ", /*#__PURE__*/React.createElement("em", {
    className: "it"
  }, "a s\xE9rio.")),
  C: /*#__PURE__*/React.createElement(React.Fragment, null, "Seu neg\xF3cio de caf\xE9 conduzido por ", /*#__PURE__*/React.createElement("em", {
    className: "it"
  }, "quem entende o mercado."))
};
const CTAS = {
  direta: {
    primary: "Fale com um corretor",
    sub: "Atendimento direto. Sem burocracia."
  },
  beneficio: {
    primary: "Negocie com estrutura e transparência",
    sub: "Um corretor da Alca atende você agora."
  }
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "A",
  "cta": "direta",
  "showSticky": true
} /*EDITMODE-END*/;
const App = () => {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const headline = HEADLINES[tweaks.headline] || HEADLINES.A;
  const cta = CTAS[tweaks.cta] || CTAS.direta;
  const [brokerModalOpen, setBrokerModalOpen] = React.useState(false);
  React.useEffect(() => {
    window.openBrokerModal = () => setBrokerModalOpen(true);
    return () => {
      window.openBrokerModal = null;
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, {
    headline: headline,
    ctaPrimary: cta.primary,
    ctaSub: cta.sub
  }), /*#__PURE__*/React.createElement(ValueProp, null), /*#__PURE__*/React.createElement(PainSection, null), /*#__PURE__*/React.createElement(SolutionSection, null), /*#__PURE__*/React.createElement(Benefits, null), /*#__PURE__*/React.createElement(Credentials, null), /*#__PURE__*/React.createElement(Offer, null), /*#__PURE__*/React.createElement(Objections, null), /*#__PURE__*/React.createElement(Guarantee, null), /*#__PURE__*/React.createElement(Urgency, null), /*#__PURE__*/React.createElement(FAQSection, null), /*#__PURE__*/React.createElement(FinalCTA, {
    ctaPrimary: cta.primary
  }), /*#__PURE__*/React.createElement(PSBlock, null), /*#__PURE__*/React.createElement(Footer, null), tweaks.showSticky && /*#__PURE__*/React.createElement(StickyContact, null), /*#__PURE__*/React.createElement(window.BrokerModal, {
    open: brokerModalOpen,
    onClose: () => setBrokerModalOpen(false)
  }), /*#__PURE__*/React.createElement(window.TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Copy"
  }, /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Headline",
    value: tweaks.headline,
    onChange: v => setTweak('headline', v),
    options: [{
      value: 'A',
      label: 'Confiança'
    }, {
      value: 'B',
      label: 'Estrutura'
    }, {
      value: 'C',
      label: 'Parceria'
    }]
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "CTA",
    value: tweaks.cta,
    onChange: v => setTweak('cta', v),
    options: [{
      value: 'direta',
      label: 'Ação direta'
    }, {
      value: 'beneficio',
      label: 'Benefício'
    }]
  }), /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Bot\xE3o flutuante de contato",
    value: tweaks.showSticky,
    onChange: v => setTweak('showSticky', v)
  }))));
};
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));