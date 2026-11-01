(function() {
  "use strict";
  const React = window.React;
  const { useState, useRef, useEffect } = React;
  window.CALC_TRANSLATIONS = {
    en: {
      calculator: "Calculator",
      segStandard: "Standard",
      segScientific: "Scientific",
      segCurrency: "Currency",
      currencyConverter: "Currency Converter",
      searchCurrency: "Search currency...",
      ratesUpdated: "Rates updated",
      failedToFetchRates: "Failed to fetch rates.",
      copyToClipboard: "Copy to clipboard",
      copied: "Copied!",
      basicMode: "Basic Mode",
      scientificMode: "Scientific Mode",
      refreshRates: "Refresh Rates",
      copyOutputValue: "Copy output value",
      swapCurrencies: "Swap currencies",
      selectCurrency: "Select Currency",
      noCurrenciesFound: "No currencies found",
      copy: "Copy",
      swap: "Swap"
    },
    tr: {
      calculator: "Hesap Makinesi",
      segStandard: "Standart",
      segScientific: "Bilimsel",
      segCurrency: "Döviz",
      currencyConverter: "Döviz Çevirici",
      searchCurrency: "Para birimi ara...",
      ratesUpdated: "Kurlar güncellendi",
      failedToFetchRates: "Kurlar alınamadı.",
      copyToClipboard: "Panoya kopyala",
      copied: "Kopyalandı!",
      basicMode: "Temel Mod",
      scientificMode: "Bilimsel Mod",
      refreshRates: "Kurları Yenile",
      copyOutputValue: "Çıktı değerini kopyala",
      swapCurrencies: "Para birimlerini değiştir",
      selectCurrency: "Para Birimi Seç",
      noCurrenciesFound: "Para birimi bulunamadı",
      copy: "Kopyala",
      swap: "Değiştir"
    },
    de: {
      calculator: "Rechner",
      segStandard: "Standard",
      segScientific: "Wissenschaftlich",
      segCurrency: "Währung",
      currencyConverter: "Währungsrechner",
      searchCurrency: "Währung suchen...",
      ratesUpdated: "Kurse aktualisiert",
      failedToFetchRates: "Kurse konnten nicht abgerufen werden.",
      copyToClipboard: "In Zwischenablage kopieren",
      copied: "Kopiert!",
      basicMode: "Standardmodus",
      scientificMode: "Wissenschaftlicher Modus",
      refreshRates: "Kurse aktualisieren",
      copyOutputValue: "Ausgabewert kopieren",
      swapCurrencies: "Währungen tauschen",
      selectCurrency: "Währung auswählen",
      noCurrenciesFound: "Keine Währungen gefunden",
      copy: "Kopieren",
      swap: "Tauschen"
    },
    fr: {
      calculator: "Calculatrice",
      segStandard: "Standard",
      segScientific: "Scientifique",
      segCurrency: "Devises",
      currencyConverter: "Convertisseur de devises",
      searchCurrency: "Rechercher une devise...",
      ratesUpdated: "Taux mis à jour",
      failedToFetchRates: "Échec de la récupération des taux.",
      copyToClipboard: "Copier dans le presse-papiers",
      copied: "Copié !",
      basicMode: "Mode de base",
      scientificMode: "Mode scientifique",
      refreshRates: "Actualiser les taux",
      copyOutputValue: "Copier la valeur de sortie",
      swapCurrencies: "Échanger les devises",
      selectCurrency: "Sélectionner une devise",
      noCurrenciesFound: "Aucune devise trouvée",
      copy: "Copier",
      swap: "Échanger"
    },
    es: {
      calculator: "Calculadora",
      segStandard: "Estándar",
      segScientific: "Científica",
      segCurrency: "Divisas",
      currencyConverter: "Conversor de divisas",
      searchCurrency: "Buscar divisa...",
      ratesUpdated: "Tasas actualizadas",
      failedToFetchRates: "Error al obtener tasas.",
      copyToClipboard: "Copiar al portapapeles",
      copied: "¡Copiado!",
      basicMode: "Modo Básico",
      scientificMode: "Modo Científico",
      refreshRates: "Actualizar tasas",
      copyOutputValue: "Copiar valor de salida",
      swapCurrencies: "Intercambiar divisas",
      selectCurrency: "Seleccionar divisa",
      noCurrenciesFound: "No se encontraron divisas",
      copy: "Copiar",
      swap: "Intercambiar"
    },
    ru: {
      calculator: "Калькулятор",
      segStandard: "Обычный",
      segScientific: "Научный",
      segCurrency: "Валюта",
      currencyConverter: "Конвертер валют",
      searchCurrency: "Поиск валюты...",
      ratesUpdated: "Курсы обновлены",
      failedToFetchRates: "Не удалось получить курсы.",
      copyToClipboard: "Скопировать в буфер обмена",
      copied: "Скопировано!",
      basicMode: "Базовый режим",
      scientificMode: "Научный режим",
      refreshRates: "Обновить курсы",
      copyOutputValue: "Скопировать результат",
      swapCurrencies: "Поменять валюты",
      selectCurrency: "Выберите валюту",
      noCurrenciesFound: "Валюты не найдены",
      copy: "Копировать",
      swap: "Обмен"
    },
    ja: {
      calculator: "電卓",
      segStandard: "標準",
      segScientific: "関数",
      segCurrency: "通貨",
      currencyConverter: "通貨換算",
      searchCurrency: "通貨を検索...",
      ratesUpdated: "レート更新済み",
      failedToFetchRates: "レートの取得に失敗しました。",
      copyToClipboard: "クリップボードにコピー",
      copied: "コピーしました！",
      basicMode: "基本モード",
      scientificMode: "関数電卓モード",
      refreshRates: "レートを更新",
      copyOutputValue: "出力値をコピー",
      swapCurrencies: "通貨を入れ替える",
      selectCurrency: "通貨を選択",
      noCurrenciesFound: "通貨が見つかりません",
      copy: "コピー",
      swap: "入替"
    },
    zh: {
      calculator: "计算器",
      segStandard: "标准",
      segScientific: "科学",
      segCurrency: "货币",
      currencyConverter: "货币转换器",
      searchCurrency: "搜索货币...",
      ratesUpdated: "汇率已更新",
      failedToFetchRates: "获取汇率失败。",
      copyToClipboard: "复制到剪贴板",
      copied: "已复制！",
      basicMode: "基本模式",
      scientificMode: "科学模式",
      refreshRates: "刷新汇率",
      copyOutputValue: "复制输出值",
      swapCurrencies: "交换货币",
      selectCurrency: "选择货币",
      noCurrenciesFound: "未找到货币",
      copy: "复制",
      swap: "交换"
    },
    ar: {
      calculator: "آلة حاسبة",
      segStandard: "عادي",
      segScientific: "علمي",
      segCurrency: "العملات",
      currencyConverter: "محول العملات",
      searchCurrency: "ابحث عن العملة...",
      ratesUpdated: "تم تحديث الأسعار",
      failedToFetchRates: "فشل في جلب الأسعار.",
      copyToClipboard: "انسخ إلى الحافظة",
      copied: "تم النسخ!",
      basicMode: "الوضع الأساسي",
      scientificMode: "الوضع العلمي",
      refreshRates: "تحديث الأسعار",
      copyOutputValue: "نسخ القيمة الناتجة",
      swapCurrencies: "تبديل العملات",
      selectCurrency: "اختر العملة",
      noCurrenciesFound: "لم يتم العثور على عملات",
      copy: "نسخ",
      swap: "تبديل"
    },
    hi: {
      calculator: "कैलकुलेटर",
      segStandard: "मानक",
      segScientific: "वैज्ञानिक",
      segCurrency: "मुद्रा",
      currencyConverter: "मुद्रा परिवर्तक",
      searchCurrency: "मुद्रा खोजें...",
      ratesUpdated: "दरें अपडेट की गईं",
      failedToFetchRates: "दरें प्राप्त करने में विफल।",
      copyToClipboard: "क्लिपबोर्ड पर कॉपी करें",
      copied: "कॉपी किया गया!",
      basicMode: "मूल मोड",
      scientificMode: "वैज्ञानिक मोड",
      refreshRates: "दरें ताज़ा करें",
      copyOutputValue: "आउटपुट मान कॉपी करें",
      swapCurrencies: "मुद्राएं स्वैप करें",
      selectCurrency: "मुद्रा चुनें",
      noCurrenciesFound: "कोई मुद्रा नहीं मिली",
      copy: "कॉपी",
      swap: "स्वैप"
    }
  };
  function useStore(selector) {
    const selectorRef = useRef(selector);
    selectorRef.current = selector;
    const [state, setState] = useState(() => selectorRef.current(window.useAppStore.getState()));
    useEffect(() => {
      const checkUpdate = (newState) => {
        const newMappedState = selectorRef.current(newState);
        setState((prev) => {
          if (prev === newMappedState) return prev;
          return newMappedState;
        });
      };
      return window.useAppStore.subscribe(checkUpdate);
    }, []);
    return state;
  }
  const POPULAR_CURRENCIES = ["USD", "EUR", "GBP", "JPY", "INR", "CAD", "AUD", "CHF", "CNY"];
  const FALLBACK_RATES = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 156.5,
    CAD: 1.36,
    AUD: 1.51,
    CHF: 0.91,
    CNY: 7.24,
    INR: 83.3,
    NZD: 1.63,
    SGD: 1.35,
    HKD: 7.81,
    SEK: 10.7,
    KRW: 1365,
    TRY: 32.2,
    MXN: 16.7,
    BRL: 5.15,
    RUB: 90,
    ZAR: 18.4,
    NOK: 10.6,
    DKK: 6.87,
    PLN: 3.93,
    AED: 3.67,
    SAR: 3.75,
    THB: 36.5,
    MYR: 4.71,
    IDR: 16e3,
    PHP: 58.2,
    ILS: 3.7,
    TWD: 32.2,
    VND: 25400
  };
  const CURRENCY_DETAILS = {
    USD: { name: "US Dollar", flag: "🇺🇸" },
    EUR: { name: "Euro", flag: "🇪🇺" },
    GBP: { name: "British Pound", flag: "🇬🇧" },
    JPY: { name: "Japanese Yen", flag: "🇯🇵" },
    CAD: { name: "Canadian Dollar", flag: "🇨🇦" },
    AUD: { name: "Australian Dollar", flag: "🇦🇺" },
    CHF: { name: "Swiss Franc", flag: "🇨🇭" },
    CNY: { name: "Chinese Yuan", flag: "🇨🇳" },
    INR: { name: "Indian Rupee", flag: "🇮🇳" },
    NZD: { name: "New Zealand Dollar", flag: "🇳🇿" },
    SGD: { name: "Singapore Dollar", flag: "🇸🇬" },
    HKD: { name: "Hong Kong Dollar", flag: "🇭🇰" },
    SEK: { name: "Swedish Krona", flag: "🇸🇪" },
    KRW: { name: "South Korean Won", flag: "🇰🇷" },
    TRY: { name: "Turkish Lira", flag: "🇹🇷" },
    MXN: { name: "Mexican Peso", flag: "🇲🇽" },
    BRL: { name: "Brazilian Real", flag: "🇧🇷" },
    RUB: { name: "Russian Ruble", flag: "🇷🇺" },
    ZAR: { name: "South African Rand", flag: "🇿🇦" },
    NOK: { name: "Norwegian Krone", flag: "🇳🇴" },
    DKK: { name: "Danish Krone", flag: "🇩🇰" },
    PLN: { name: "Polish Zloty", flag: "🇵🇱" },
    AED: { name: "UAE Dirham", flag: "🇦🇪" },
    SAR: { name: "Saudi Riyal", flag: "🇸🇦" },
    THB: { name: "Thai Baht", flag: "🇹🇭" },
    MYR: { name: "Malaysian Ringgit", flag: "🇲🇾" },
    IDR: { name: "Indonesian Rupiah", flag: "🇮🇩" },
    PHP: { name: "Philippine Peso", flag: "🇵🇭" },
    ILS: { name: "Israeli New Shekel", flag: "🇮🇱" },
    ARS: { name: "Argentine Peso", flag: "🇦🇷" },
    CLP: { name: "Chilean Peso", flag: "🇨🇱" },
    COP: { name: "Colombian Peso", flag: "🇨🇴" },
    EGP: { name: "Egyptian Pound", flag: "🇪🇬" },
    VND: { name: "Vietnamese Dong", flag: "🇻🇳" },
    KWD: { name: "Kuwaiti Dinar", flag: "🇰🇼" },
    QAR: { name: "Qatari Rial", flag: "🇶🇦" },
    HUF: { name: "Hungarian Forint", flag: "🇭🇺" },
    CZK: { name: "Czech Koruna", flag: "🇨🇿" },
    RON: { name: "Romanian Leu", flag: "🇷🇴" },
    UAH: { name: "Ukrainian Hryvnia", flag: "🇺🇦" },
    NGN: { name: "Nigerian Naira", flag: "🇳🇬" },
    PKR: { name: "Pakistani Rupee", flag: "🇵🇰" },
    BDT: { name: "Bangladeshi Taka", flag: "🇧🇩" },
    LKR: { name: "Sri Lankan Rupee", flag: "🇱🇰" },
    TWD: { name: "New Taiwan Dollar", flag: "🇹🇼" }
  };
  let sessionDefaultCurrency = null;
  const KBC_CSS = `
.kbc-shell{display:flex;flex-direction:column;border-radius:32px;padding:20px;background:var(--kb-bg-shell,var(--theme-bg-dark,#1b1e27));border:1px solid var(--kb-stroke-subtle,var(--theme-border,rgba(255,255,255,.1)));box-shadow:var(--kb-shadow-e3,0 12px 32px rgba(0,0,0,.45));color:var(--kb-fg-1,#f2f3f7);font-family:var(--kb-font,inherit)}
.kbc-icon{font-family:'Material Symbols Rounded','Material Symbols Outlined';font-variation-settings:'FILL' 0,'wght' 400}
.kbc-icon--fill{font-variation-settings:'FILL' 1,'wght' 400}
.kbc-hicon{width:44px;height:44px;border-radius:15px;display:flex;align-items:center;justify-content:center;flex:none;background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.18)));color:var(--kb-accent,var(--theme-primary,#8b9cff))}
.kbc-title{font-family:var(--kb-font-display,inherit);font-size:19px;font-weight:600;line-height:1.2}
.kbc-circle{width:36px;height:36px;border-radius:999px;display:flex;align-items:center;justify-content:center;flex:none;background:var(--kb-bg-inset,rgba(255,255,255,.06));color:var(--kb-fg-1,#f2f3f7)}
.kbc-circle:hover{filter:brightness(1.2)}
.kbc-seg{display:flex;gap:4px;padding:4px;border-radius:999px;margin-bottom:12px;background:var(--kb-bg-inset,rgba(255,255,255,.06))}
.kbc-seg button{flex:1;min-width:0;height:36px;border-radius:999px;padding:0 6px;font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--kb-fg-2,#b4b8c6)}
.kbc-seg button:hover{color:var(--kb-fg-1,#f2f3f7)}
.kbc-seg button[aria-pressed=true]{background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)));color:var(--kb-on-container,var(--kb-fg-1,#f2f3f7))}
.kbc-body{flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden}
.kbc-circle--on{background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)));color:var(--kb-on-container,var(--kb-fg-1,#f2f3f7))}
.kbc-chip{height:28px;padding:0 10px;border-radius:10px;font-size:12px;font-weight:600;background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)));color:var(--kb-on-container,var(--kb-fg-1,#f2f3f7))}
.kbc-hero{background:var(--kb-bg-inset,rgba(255,255,255,.06));border-radius:24px;padding:12px 18px;text-align:right}
.kbc-hero-sub{font-size:12px;color:var(--kb-fg-2,#b4b8c6);height:16px;overflow:hidden;white-space:nowrap;font-variant-numeric:tabular-nums}
.kbc-hero-val{font-family:var(--kb-font-display,inherit);font-size:34px;font-weight:600;line-height:1.2;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.kbc-dense .kbc-hero-val{font-size:28px}
.kbc-card{background:var(--kb-bg-surface,var(--theme-surface,#242833));border-radius:24px;padding:14px 16px}
.kbc-key{height:48px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;font-variant-numeric:tabular-nums;background:var(--kb-bg-tile,var(--theme-surface,#242833));color:var(--kb-fg-1,#f2f3f7)}
.kbc-dense .kbc-key{height:40px;font-size:15px}
.kbc-key:hover,.kbc-sci:hover,.kbc-row:hover{filter:brightness(1.15)}
.kbc-key--op{background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)));color:var(--kb-on-container,var(--kb-fg-1,#f2f3f7))}
.kbc-key--danger{background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)));color:var(--kb-danger,#ff7b7b)}
.kbc-key--eq{background:var(--kb-accent,var(--theme-primary,#8b9cff));color:var(--kb-on-accent,#101218)}
.kbc-key.h-full{height:100%}
.kbc-sci{height:34px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;background:var(--kb-bg-tile,var(--theme-surface,#242833));color:var(--kb-on-container,var(--kb-fg-1,#f2f3f7))}
.kbc-sci--on{background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)))}
.kbc-pill{height:36px;border-radius:999px;padding:0 12px;display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)));color:var(--kb-on-container,var(--kb-fg-1,#f2f3f7))}
.kbc-round{width:32px;height:32px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)));color:var(--kb-on-container,var(--kb-fg-1,#f2f3f7))}
.kbc-input{width:100%;height:40px;border-radius:999px;padding:0 14px 0 38px;font-size:13px;outline:none;border:0;background:var(--kb-bg-inset,rgba(255,255,255,.06));color:var(--kb-fg-1,#f2f3f7)}
.kbc-modal{border-radius:32px;padding:20px;background:var(--kb-bg-shell,var(--theme-bg-dark,#1b1e27))}
.kbc-row{width:100%;min-height:52px;border-radius:16px;padding:6px 12px;display:flex;align-items:center;justify-content:space-between;text-align:left;margin-bottom:8px;background:var(--kb-bg-tile,var(--theme-surface,#242833));color:var(--kb-fg-1,#f2f3f7)}
.kbc-row--sel{background:var(--kb-bg-container,var(--theme-accent-glow,rgba(99,102,241,.25)));color:var(--kb-on-container,var(--kb-fg-1,#f2f3f7))}
`;
  if (typeof document !== "undefined" && !document.getElementById("kobar-calc-canli-css")) {
    const styleEl = document.createElement("style");
    styleEl.id = "kobar-calc-canli-css";
    styleEl.textContent = KBC_CSS;
    document.head.appendChild(styleEl);
  }
  const CALC_BTN_ID = "com.kobar.calculator.plugin.btn";
  const CALC_TILE_LABELS = {
    en: "Calculator — last result {r}",
    tr: "Hesap makinesi — son sonuç {r}",
    de: "Rechner — letztes Ergebnis {r}",
    fr: "Calculatrice — dernier résultat {r}",
    es: "Calculadora — último resultado {r}",
    ru: "Калькулятор — последний результат {r}",
    ja: "電卓 — 前回の結果 {r}",
    zh: "计算器 — 上次结果 {r}",
    ar: "الآلة الحاسبة — آخر نتيجة {r}",
    hi: "कैलकुलेटर — पिछला परिणाम {r}"
  };
  const CALC_CLOSE = { en: "Close", tr: "Kapat", de: "Schließen", fr: "Fermer", es: "Cerrar", ru: "Закрыть", ja: "閉じる", zh: "关闭", ar: "إغلاق", hi: "बंद करें" };
  let calcLastResult = null;
  let calcLocale = null;
  const calcTileExt = () => {
    const ext = window.KoBarExtensions;
    return typeof ext?.setBarItemState === "function" ? ext : null;
  };
  const calcLang = () => calcLocale || window.useAppStore?.getState?.().language || "en";
  const publishCalcTile = () => {
    const ext = calcTileExt();
    if (!ext) return;
    try {
      const lang = calcLang();
      const dict = window.CALC_TRANSLATIONS[lang] || window.CALC_TRANSLATIONS["en"];
      const state = { label: dict.calculator || "Calculator" };
      const num = calcLastResult !== null ? parseFloat(calcLastResult) : NaN;
      if (calcLastResult !== null && isFinite(num)) {
        let pretty = calcLastResult;
        try {
          pretty = new Intl.NumberFormat(lang, { maximumFractionDigits: 10 }).format(num);
        } catch (e) {
        }
        state.label = (CALC_TILE_LABELS[lang] || CALC_TILE_LABELS.en).replace("{r}", pretty);
        if (calcLastResult.length <= 5) state.value = calcLastResult;
      }
      ext.setBarItemState(CALC_BTN_ID, state);
    } catch (e) {
    }
  };
  const setCalcResult = (str) => {
    calcLastResult = str;
    publishCalcTile();
  };
  const CalculatorPluginPanel = ({ onClose, anchorRect }) => {
    const currentLang = useStore((state) => state.language) || "en";
    const tc = () => CALC_CLOSE[currentLang] || "Close";
    const t = (key) => (window.CALC_TRANSLATIONS[currentLang] || window.CALC_TRANSLATIONS["en"])[key] || key;
    const isSmartPositioning = useStore((state) => state.isPopupSmartPositioning);
    const edgePosition = useStore((state) => state.edgePosition);
    useStore((state) => state.design);
    useStore((state) => state.glassOpacity);
    useStore((state) => state.isMac);
    const screenBounds = useStore((state) => state.screenBounds);
    const [display, setDisplay] = useState("0");
    const [prevValue, setPrevValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [parenStack, setParenStack] = useState([]);
    const operatorJustPressed = useRef(false);
    const [isScientific, setIsScientific] = useState(() => localStorage.getItem("kobar_calc_scientific") === "true");
    const [angleMode, setAngleMode] = useState("DEG");
    const [memory, setMemory] = useState(0);
    const [history, setHistory] = useState([]);
    const [mode, setMode] = useState(() => {
      return localStorage.getItem("kobar_calc_plugin_mode") || "basic";
    });
    useEffect(() => {
      localStorage.setItem("kobar_calc_plugin_mode", mode);
    }, [mode]);
    const [rates, setRates] = useState(FALLBACK_RATES);
    const [ratesLoading, setRatesLoading] = useState(false);
    const [ratesError, setRatesError] = useState(null);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState(() => {
      return sessionDefaultCurrency || "EUR";
    });
    const [currencyAmount, setCurrencyAmount] = useState("1");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectorMode, setSelectorMode] = useState(null);
    const [copyFeedback, setCopyFeedback] = useState(false);
    const [lastFetched, setLastFetched] = useState(null);
    const fetchRates = async () => {
      setRatesLoading(true);
      setRatesError(null);
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        if (data && data.rates) {
          setRates(data.rates);
          const now = Date.now();
          setLastFetched(new Date(now));
          localStorage.setItem("kobar_exchange_rates", JSON.stringify({
            rates: data.rates,
            timestamp: now
          }));
        } else {
          throw new Error("Invalid rate data");
        }
      } catch (err) {
        console.error("Failed to fetch exchange rates:", err);
        setRatesError("failed");
        const cached = localStorage.getItem("kobar_exchange_rates");
        if (cached) {
          try {
            const { rates: cachedRates, timestamp } = JSON.parse(cached);
            if (cachedRates) {
              setRates(cachedRates);
              if (timestamp) setLastFetched(new Date(timestamp));
              return;
            }
          } catch (e) {
          }
        }
        setRates(FALLBACK_RATES);
      } finally {
        setRatesLoading(false);
      }
    };
    useEffect(() => {
      if (mode === "currency") {
        const cached = localStorage.getItem("kobar_exchange_rates");
        if (cached) {
          try {
            const { rates: cachedRates, timestamp } = JSON.parse(cached);
            if (cachedRates && timestamp && Date.now() - timestamp < 432e5) {
              setRates(cachedRates);
              setLastFetched(new Date(timestamp));
              setRatesLoading(false);
              return;
            }
          } catch (e) {
          }
        }
        fetchRates();
      }
    }, [mode]);
    useEffect(() => {
      const detectLocalCurrency = async () => {
        if (sessionDefaultCurrency) {
          setToCurrency(sessionDefaultCurrency);
          return;
        }
        try {
          const res = await fetch("https://ipapi.co/json/");
          if (res.ok) {
            const data = await res.json();
            if (data && data.currency && CURRENCY_DETAILS[data.currency]) {
              setToCurrency(data.currency);
              sessionDefaultCurrency = data.currency;
              return;
            }
          }
        } catch (err) {
          console.warn("Failed to fetch IP-based currency:", err);
        }
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const tzCurrencyMap = {
            "Asia/Kolkata": "INR",
            "Asia/Calcutta": "INR",
            "Europe/London": "GBP",
            "Europe/Paris": "EUR",
            "Europe/Berlin": "EUR",
            "Europe/Rome": "EUR",
            "Europe/Madrid": "EUR",
            "Europe/Amsterdam": "EUR",
            "Asia/Tokyo": "JPY",
            "Asia/Shanghai": "CNY",
            "Asia/Hong_Kong": "HKD",
            "Asia/Singapore": "SGD",
            "Australia/Sydney": "AUD",
            "Australia/Melbourne": "AUD",
            "America/Toronto": "CAD",
            "America/Vancouver": "CAD",
            "America/Mexico_City": "MXN",
            "America/Sao_Paulo": "BRL",
            "Europe/Istanbul": "TRY",
            "Asia/Dubai": "AED",
            "Asia/Riyadh": "SAR",
            "Asia/Bangkok": "THB",
            "Asia/Seoul": "KRW",
            "Europe/Moscow": "RUB"
          };
          let matchedCurrency = tzCurrencyMap[tz];
          if (!matchedCurrency) {
            for (const [key, val] of Object.entries(tzCurrencyMap)) {
              if (tz.startsWith(key.split("/")[0])) {
                matchedCurrency = val;
                break;
              }
            }
          }
          if (matchedCurrency && CURRENCY_DETAILS[matchedCurrency]) {
            setToCurrency(matchedCurrency);
            sessionDefaultCurrency = matchedCurrency;
            return;
          }
        } catch (e) {
        }
      };
      detectLocalCurrency();
    }, []);
    const handleCurrencyDigit = (digit) => {
      if (currencyAmount === "0") {
        setCurrencyAmount(digit === "00" ? "0" : digit);
      } else if (currencyAmount.length < 12) {
        setCurrencyAmount(currencyAmount + digit);
      }
    };
    const handleCurrencyBackspace = () => {
      if (currencyAmount.length <= 1) {
        setCurrencyAmount("0");
      } else {
        setCurrencyAmount(currencyAmount.slice(0, -1));
      }
    };
    const handleCurrencyClear = () => {
      setCurrencyAmount("0");
    };
    const handleCurrencyDot = () => {
      if (!currencyAmount.includes(".")) {
        setCurrencyAmount(currencyAmount + ".");
      }
    };
    const handleSwapCurrencies = () => {
      const temp = fromCurrency;
      setFromCurrency(toCurrency);
      setToCurrency(temp);
    };
    const fromRate = rates[fromCurrency] || 1;
    const toRate = rates[toCurrency] || 1;
    const amountVal = parseFloat(currencyAmount) || 0;
    const convertedVal = amountVal * (toRate / fromRate);
    const convertedAmountStr = isNaN(convertedVal) ? "0.00" : convertedVal.toLocaleString(void 0, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const currentRateStr = `1 ${fromCurrency} = ${(toRate / fromRate).toFixed(4)} ${toCurrency}`;
    const lastFetchedStr = lastFetched ? lastFetched.toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" }) : "";
    const popupRef = useRef(null);
    const orientation = useStore((state) => state.orientation);
    const sidebarPosition = useStore((state) => state.sidebarPosition);
    const getPopupStyle = () => {
      if (!anchorRect) return { display: "none" };
      const popupHeight = Math.min(mode === "scientific" ? 790 : 640, (screenBounds?.height ?? 800) - 48);
      const popupWidth = mode === "scientific" ? 400 : 320;
      const screenHeight = screenBounds?.height ?? 800;
      const screenWidth = screenBounds?.width ?? 1200;
      const offsetTop = sidebarPosition ? sidebarPosition.y : 0;
      const offsetLeft = sidebarPosition ? sidebarPosition.x : 0;
      const style = {
        position: "absolute",
        zIndex: 99999,
        width: `${popupWidth}px`,
        maxHeight: `${screenHeight - 48}px`,
        pointerEvents: "auto",
        willChange: "transform, opacity",
        transition: "width 0.3s ease"
      };
      const screenXInViewport = (screenBounds?.x ?? 0) - window.screenX;
      const screenYInViewport = (screenBounds?.y ?? 0) - window.screenY;
      if (orientation === "horizontal") {
        let adjustedLeft = screenXInViewport + screenWidth / 2 - popupWidth / 2 - offsetLeft;
        const maxLeft = screenXInViewport + (screenWidth - offsetLeft) - popupWidth - 20;
        const minLeft = screenXInViewport - offsetLeft + 20;
        if (adjustedLeft < minLeft) adjustedLeft = minLeft;
        if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
        if (!isSmartPositioning) {
          style.left = "50%";
          style.transform = "translateX(-50%)";
        } else {
          style.left = adjustedLeft;
        }
        if (edgePosition === "top") {
          style.top = "100%";
          style.marginTop = "12px";
        } else {
          style.bottom = "100%";
          style.marginBottom = "12px";
        }
      } else {
        let adjustedTop = screenYInViewport + screenHeight / 2 - popupHeight / 2 - offsetTop;
        const maxTop = screenYInViewport + (screenHeight - offsetTop) - popupHeight - 20;
        const minTop = screenYInViewport - offsetTop + 20;
        if (adjustedTop < minTop) adjustedTop = minTop;
        if (adjustedTop > maxTop) adjustedTop = maxTop;
        if (!isSmartPositioning) {
          style.top = "50%";
          style.transform = "translateY(-50%)";
        } else {
          style.top = adjustedTop;
        }
        if (edgePosition === "left") {
          style.left = "100%";
          style.marginLeft = "12px";
        } else {
          style.right = "100%";
          style.marginRight = "12px";
        }
      }
      return style;
    };
    const isSmartRef = useRef(isSmartPositioning);
    React.useEffect(() => {
      isSmartRef.current = isSmartPositioning;
    }, [isSmartPositioning]);
    React.useEffect(() => {
      const onDrag = (e) => {
        if (!popupRef.current || !anchorRect || !isSmartRef.current) return;
        const newX = e.detail.x;
        const newY = e.detail.y;
        const popupHeight = Math.min(mode === "scientific" ? 790 : 640, (screenBounds?.height ?? 800) - 48);
        const popupWidth = mode === "scientific" ? 400 : 320;
        const screenXInViewport = (screenBounds?.x ?? 0) - window.screenX;
        const screenYInViewport = (screenBounds?.y ?? 0) - window.screenY;
        if (orientation === "horizontal") {
          const screenWidth = screenBounds?.width ?? 1200;
          let adjustedLeft = screenXInViewport + screenWidth / 2 - popupWidth / 2 - newX;
          const maxLeft = screenXInViewport + (screenWidth - newX) - popupWidth - 20;
          const minLeft = screenXInViewport - newX + 20;
          if (adjustedLeft < minLeft) adjustedLeft = minLeft;
          if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
          popupRef.current.style.left = `${adjustedLeft}px`;
        } else {
          const screenHeight = screenBounds?.height ?? 800;
          let adjustedTop = screenYInViewport + screenHeight / 2 - popupHeight / 2 - newY;
          const maxTop = screenYInViewport + (screenHeight - newY) - popupHeight - 20;
          const minTop = screenYInViewport - newY + 20;
          if (adjustedTop < minTop) adjustedTop = minTop;
          if (adjustedTop > maxTop) adjustedTop = maxTop;
          popupRef.current.style.top = `${adjustedTop}px`;
        }
      };
      document.addEventListener("kobar-drag", onDrag);
      return () => document.removeEventListener("kobar-drag", onDrag);
    }, [anchorRect, screenBounds, orientation, mode]);
    const handleDigit = (digit) => {
      operatorJustPressed.current = false;
      if (waitingForOperand) {
        if (digit === ".") {
          setDisplay("0.");
        } else {
          setDisplay(digit === "00" ? "0" : digit);
        }
        setWaitingForOperand(false);
      } else {
        if (digit === ".") {
          if (!display.includes(".")) {
            setDisplay(display + ".");
          }
        } else if (display === "0") {
          setDisplay(digit === "00" ? "0" : digit);
        } else {
          setDisplay(display + digit);
        }
      }
    };
    const handleOperator = (nextOperator) => {
      if (operatorJustPressed.current) {
        setOperator(nextOperator);
        return;
      }
      const inputValue = parseFloat(display);
      if (prevValue === null) {
        setPrevValue(inputValue);
      } else if (operator) {
        const result = performCalculation();
        const cleanStr = formatDisplay(result);
        setPrevValue(parseFloat(cleanStr));
        setDisplay(cleanStr);
      }
      setWaitingForOperand(true);
      setOperator(nextOperator);
      operatorJustPressed.current = true;
    };
    const performCalculation = () => {
      const inputValue = parseFloat(display);
      if (prevValue === null || operator === null) return inputValue;
      switch (operator) {
        case "+":
          return prevValue + inputValue;
        case "-":
          return prevValue - inputValue;
        case "×":
          return prevValue * inputValue;
        case "÷":
          return inputValue !== 0 ? prevValue / inputValue : NaN;
        case "^":
          return Math.pow(prevValue, inputValue);
        case "mod": {
          const res = prevValue % inputValue;
          return Math.abs(res) < 1e-12 ? 0 : res;
        }
        default:
          return inputValue;
      }
    };
    const handleEqual = () => {
      operatorJustPressed.current = false;
      if (!operator) return;
      const expression = `${formatDisplay(prevValue)} ${operator} ${formatDisplay(display)}`;
      const result = performCalculation();
      const resultStr = formatDisplay(result);
      setHistory((prev) => [`${expression} = ${resultStr}`, ...prev].slice(0, 10));
      setCalcResult(resultStr);
      setDisplay(resultStr);
      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    };
    const handleClear = () => {
      operatorJustPressed.current = false;
      setDisplay("0");
      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(false);
      setParenStack([]);
    };
    const handleBackspace = () => {
      if (operatorJustPressed.current) return;
      setWaitingForOperand(false);
      if (display === "0") return;
      if (display.length === 1) {
        setDisplay("0");
      } else {
        setDisplay(display.slice(0, -1));
      }
    };
    const handleParenOpen = () => {
      operatorJustPressed.current = false;
      setParenStack([...parenStack, { prevValue, operator }]);
      setPrevValue(null);
      setOperator(null);
      setDisplay("0");
      setWaitingForOperand(true);
    };
    const handleParenClose = () => {
      operatorJustPressed.current = false;
      if (parenStack.length === 0) return;
      let result = parseFloat(display);
      if (prevValue !== null && operator !== null) {
        result = performCalculation();
      }
      const newStack = [...parenStack];
      const { prevValue: savedPrev, operator: savedOp } = newStack.pop();
      setParenStack(newStack);
      setDisplay(formatDisplay(result));
      setPrevValue(savedPrev);
      setOperator(savedOp);
      setWaitingForOperand(true);
    };
    const toRadians = (deg) => deg * Math.PI / 180;
    const getAngleInput = (val) => angleMode === "DEG" ? toRadians(val) : val;
    const handleScientific = (fn) => {
      operatorJustPressed.current = false;
      const val = parseFloat(display);
      let result;
      switch (fn) {
        case "sin":
          result = Math.sin(getAngleInput(val));
          break;
        case "cos":
          result = Math.cos(getAngleInput(val));
          break;
        case "tan":
          result = Math.tan(getAngleInput(val));
          break;
        case "asin":
          result = angleMode === "DEG" ? Math.asin(val) * 180 / Math.PI : Math.asin(val);
          break;
        case "acos":
          result = angleMode === "DEG" ? Math.acos(val) * 180 / Math.PI : Math.acos(val);
          break;
        case "atan":
          result = angleMode === "DEG" ? Math.atan(val) * 180 / Math.PI : Math.atan(val);
          break;
        case "ln":
          result = Math.log(val);
          break;
        case "log":
          result = Math.log10(val);
          break;
        case "√":
          result = Math.sqrt(val);
          break;
        case "∛":
          result = Math.cbrt(val);
          break;
        case "x²":
          result = val * val;
          break;
        case "x³":
          result = val * val * val;
          break;
        case "1/x":
          result = val !== 0 ? 1 / val : NaN;
          break;
        case "n!":
          result = factorial(val);
          break;
        case "|x|":
          result = Math.abs(val);
          break;
        case "e^x":
          result = Math.exp(val);
          break;
        case "10^x":
          result = Math.pow(10, val);
          break;
        case "±":
          result = -val;
          break;
        case "%":
          result = val / 100;
          break;
        default:
          result = val;
      }
      setDisplay(formatDisplay(result));
      setCalcResult(formatDisplay(result));
      setWaitingForOperand(true);
    };
    const factorial = (n) => {
      if (n < 0 || !Number.isInteger(n)) return NaN;
      if (n <= 1) return 1;
      if (n > 170) return Infinity;
      let result = 1;
      for (let i = 2; i <= n; i++) result *= i;
      return result;
    };
    const insertConstant = (val) => {
      operatorJustPressed.current = false;
      setDisplay(String(val));
      setWaitingForOperand(true);
    };
    const formatDisplay = (val) => {
      const num = typeof val === "string" ? parseFloat(val) : val;
      if (isNaN(num)) return "Error";
      if (!isFinite(num)) return "∞";
      const str = typeof val === "string" ? val : String(num);
      if (str.length > 14) {
        const cleanNum = parseFloat(num.toPrecision(12));
        let formatted = String(cleanNum);
        if (formatted.length > 14) {
          formatted = cleanNum.toExponential(8).replace(/\.?0+e/, "e");
        }
        return formatted;
      }
      return str;
    };
    const handleMemory = (action) => {
      operatorJustPressed.current = false;
      const val = parseFloat(display);
      switch (action) {
        case "MC":
          setMemory(0);
          break;
        case "MR":
          setDisplay(formatDisplay(memory));
          setWaitingForOperand(true);
          break;
        case "M+":
          setMemory(memory + val);
          break;
        case "M-":
          setMemory(memory - val);
          break;
      }
    };
    React.useEffect(() => {
      const handleKeyDown = (e) => {
        if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName || "")) return;
        const { key } = e;
        if (/[0-9]/.test(key)) {
          if (mode === "currency") handleCurrencyDigit(key);
          else handleDigit(key);
        } else if (key === "." || key === ",") {
          if (mode === "currency") handleCurrencyDot();
          else if (!display.includes(".")) handleDigit(".");
        } else if (key === "Backspace") {
          if (mode === "currency") handleCurrencyBackspace();
          else handleBackspace();
        } else if (key === "Escape" || key.toLowerCase() === "c") {
          if (mode === "currency") handleCurrencyClear();
          else handleClear();
        } else if (mode !== "currency") {
          if (key === "+") handleOperator("+");
          else if (key === "-") handleOperator("-");
          else if (key === "*" || key.toLowerCase() === "x") handleOperator("×");
          else if (key === "/") handleOperator("÷");
          else if (key === "Enter" || key === "=") {
            e.preventDefault();
            handleEqual();
          } else if (key === "(") handleParenOpen();
          else if (key === ")") handleParenClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [display, prevValue, operator, waitingForOperand, parenStack, mode, currencyAmount]);
    const CalcButton = ({ onClick, children, className = "", title }) => /* @__PURE__ */ window.React.createElement(
      "button",
      {
        onClick,
        className: `kbc-key no-drag-region ${className}`,
        title,
        "aria-label": title
      },
      children
    );
    const SciFnButton = ({ onClick, children, title }) => /* @__PURE__ */ window.React.createElement(
      "button",
      {
        onClick,
        className: "kbc-sci no-drag-region",
        title,
        "aria-label": title
      },
      children
    );
    return /* @__PURE__ */ window.React.createElement(
      "div",
      {
        ref: popupRef,
        className: `kbc-shell pointer-events-auto overflow-hidden ${mode === "scientific" ? "kbc-dense" : ""}`,
        style: getPopupStyle()
      },
      /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center", style: { gap: 12, marginBottom: 12, flex: "none" } }, /* @__PURE__ */ window.React.createElement("div", { className: "kbc-hicon" }, /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon kbc-icon--fill material-symbols-outlined", style: { fontSize: 24 } }, mode === "currency" ? "payments" : "calculate")), /* @__PURE__ */ window.React.createElement("div", { className: "flex-1 min-w-0 drag-region" }, /* @__PURE__ */ window.React.createElement("div", { className: "kbc-title" }, mode === "currency" ? t("currencyConverter") : t("calculator"))), /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center", style: { gap: 6 } }, mode === "scientific" && /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: () => setAngleMode(angleMode === "DEG" ? "RAD" : "DEG"),
          className: "kbc-chip no-drag-region",
          title: angleMode
        },
        angleMode
      ), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: () => onClose(),
          className: "kbc-circle no-drag-region",
          title: tc(),
          "aria-label": tc()
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined", style: { fontSize: 20 } }, "close")
      ))),
      /* @__PURE__ */ window.React.createElement("div", { className: "kbc-seg", role: "group", style: { flex: "none" } }, [["basic", "segStandard", "basicMode"], ["scientific", "segScientific", "scientificMode"], ["currency", "segCurrency", "currencyConverter"]].map(([m, k, full]) => /* @__PURE__ */ window.React.createElement(
        "button",
        {
          key: m,
          className: "no-drag-region",
          "aria-pressed": mode === m,
          title: t(full),
          onClick: () => {
            if (m === "scientific") {
              setMode("scientific");
              setIsScientific(true);
              localStorage.setItem("kobar_calc_scientific", "true");
            } else if (m === "basic") {
              setMode("basic");
              setIsScientific(false);
              localStorage.setItem("kobar_calc_scientific", "false");
            } else {
              setMode("currency");
            }
          }
        },
        t(k)
      ))),
      /* @__PURE__ */ window.React.createElement("div", { className: "kbc-body" }, mode === "currency" ? /* @__PURE__ */ window.React.createElement("div", { className: "flex-1 flex flex-col" }, /* @__PURE__ */ window.React.createElement("div", { className: "kbc-card flex flex-col gap-2 relative", style: { marginBottom: 12 } }, /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: () => setSelectorMode("from"),
          className: "kbc-pill no-drag-region"
        },
        /* @__PURE__ */ window.React.createElement("span", null, CURRENCY_DETAILS[fromCurrency]?.flag || "🪙"),
        /* @__PURE__ */ window.React.createElement("span", { className: "font-bold" }, fromCurrency),
        /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[14px] text-slate-400" }, "arrow_drop_down")
      ), /* @__PURE__ */ window.React.createElement("div", { className: "kbc-hero-val truncate flex-1 text-right max-w-[180px]", style: { fontSize: 24 } }, currencyAmount)), /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: () => setSelectorMode("to"),
          className: "kbc-pill no-drag-region"
        },
        /* @__PURE__ */ window.React.createElement("span", null, CURRENCY_DETAILS[toCurrency]?.flag || "🪙"),
        /* @__PURE__ */ window.React.createElement("span", { className: "font-bold" }, toCurrency),
        /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[14px] text-slate-400" }, "arrow_drop_down")
      ), /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center justify-end flex-1 min-w-0" }, /* @__PURE__ */ window.React.createElement("div", { className: "kbc-hero-val truncate max-w-[150px] mr-1.5", style: { fontSize: 24, color: "var(--kb-accent-text, var(--kb-fg-1, #f2f3f7))" } }, convertedAmountStr))), /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center justify-between border-t border-white/5 pt-1.5 mt-0.5 text-[10px]" }, /* @__PURE__ */ window.React.createElement("div", { className: "text-slate-500 font-medium flex flex-col gap-0.5" }, /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ window.React.createElement("span", null, currentRateStr), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: fetchRates,
          disabled: ratesLoading,
          className: `p-0.5 rounded hover:bg-white/5 active:scale-95 transition-all text-slate-400 hover:text-white inline-flex items-center justify-center no-drag-region ${ratesLoading ? "animate-spin" : ""}`,
          title: t("refreshRates")
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[10px]" }, "refresh")
      )), lastFetchedStr && /* @__PURE__ */ window.React.createElement("div", { className: "text-[10px]", style: { color: "var(--kb-fg-3, #868b9b)" } }, t("ratesUpdated"), ": ", lastFetchedStr)), /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center gap-1.5 no-drag-region" }, /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: () => {
            const cleanVal = convertedAmountStr.replace(/[^\d.]/g, "");
            navigator.clipboard.writeText(cleanVal);
            window.api?.writeToClipboard?.({ type: "text", content: cleanVal });
            setCopyFeedback(true);
            setTimeout(() => setCopyFeedback(false), 1500);
          },
          className: "kbc-round relative",
          title: t("copyToClipboard")
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[14px]" }, copyFeedback ? "check" : "content_copy"),
        copyFeedback && /* @__PURE__ */ window.React.createElement("span", { className: "absolute bottom-full right-0 mb-1 px-1.5 py-0.5 text-[8px] bg-slate-950 text-white rounded border border-white/10 whitespace-nowrap" }, t("copied"))
      ), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: handleSwapCurrencies,
          className: "kbc-round",
          title: "Swap Currencies"
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[14px] font-bold" }, "swap_vert")
      ))), ratesError && /* @__PURE__ */ window.React.createElement("div", { className: "text-[9px] text-yellow-500 font-medium text-center mt-1" }, t("failedToFetchRates"))), /* @__PURE__ */ window.React.createElement("div", { className: "grid grid-cols-4 gap-2" }, /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("7"), className: "" }, "7"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("8"), className: "" }, "8"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("9"), className: "" }, "9"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleCurrencyBackspace, className: "kbc-key--danger", title: "Backspace" }, /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[16px]" }, "backspace")), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("4"), className: "" }, "4"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("5"), className: "" }, "5"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("6"), className: "" }, "6"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleCurrencyClear, className: "kbc-key--danger" }, "C"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("1"), className: "" }, "1"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("2"), className: "" }, "2"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("3"), className: "" }, "3"), /* @__PURE__ */ window.React.createElement(
        CalcButton,
        {
          onClick: () => {
            const cleanVal = convertedAmountStr.replace(/[^\d.]/g, "");
            navigator.clipboard.writeText(cleanVal);
            window.api?.writeToClipboard?.({ type: "text", content: cleanVal });
            setCopyFeedback(true);
            setTimeout(() => setCopyFeedback(false), 1500);
          },
          className: "kbc-key--op",
          title: t("copyOutputValue")
        },
        "Copy"
      ), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("0"), className: "" }, "0"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleCurrencyDigit("00"), className: "" }, "00"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleCurrencyDot, className: "" }, "."), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleSwapCurrencies, className: "kbc-key--eq", title: t("swapCurrencies") }, t("swap")))) : /* @__PURE__ */ window.React.createElement(window.React.Fragment, null, /* @__PURE__ */ window.React.createElement("div", { className: "kbc-hero", style: { marginBottom: 12 } }, /* @__PURE__ */ window.React.createElement("div", { className: "kbc-hero-sub" }, parenStack.map((item, index) => /* @__PURE__ */ window.React.createElement("span", { key: index }, item.prevValue !== null ? `${formatDisplay(item.prevValue)} ${item.operator} (` : "( ")), prevValue !== null ? `${formatDisplay(prevValue)} ${operator}` : ""), /* @__PURE__ */ window.React.createElement("div", { className: "kbc-hero-val", "aria-live": "polite" }, formatDisplay(display))), isScientific && /* @__PURE__ */ window.React.createElement("div", { className: "grid grid-cols-4 gap-1.5 mb-2" }, ["MC", "MR", "M+", "M-"].map((m) => /* @__PURE__ */ window.React.createElement(
        "button",
        {
          key: m,
          onClick: () => handleMemory(m),
          className: `kbc-sci no-drag-region ${memory !== 0 && (m === "MR" || m === "MC") ? "kbc-sci--on" : ""}`
        },
        m
      ))), isScientific && /* @__PURE__ */ window.React.createElement("div", { className: "grid grid-cols-5 gap-1.5 mb-2" }, /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("sin"), title: "Sine" }, "sin"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("cos"), title: "Cosine" }, "cos"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("tan"), title: "Tangent" }, "tan"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("ln"), title: "Natural Log" }, "ln"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("log"), title: "Log base 10" }, "log"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("asin"), title: "Arc Sine" }, "sin⁻¹"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("acos"), title: "Arc Cosine" }, "cos⁻¹"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("atan"), title: "Arc Tangent" }, "tan⁻¹"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("e^x"), title: "e to the power x" }, "eˣ"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("10^x"), title: "10 to the power x" }, "10ˣ"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("√"), title: "Square Root" }, "√"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("∛"), title: "Cube Root" }, "∛"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("x²"), title: "Square" }, "x²"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("x³"), title: "Cube" }, "x³"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleOperator("^"), title: "Power" }, "xʸ"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("n!"), title: "Factorial" }, "n!"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("1/x"), title: "Reciprocal" }, "1/x"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => handleScientific("|x|"), title: "Absolute" }, "|x|"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => insertConstant(Math.PI), title: "Pi" }, "π"), /* @__PURE__ */ window.React.createElement(SciFnButton, { onClick: () => insertConstant(Math.E), title: "Euler's Number" }, "e")), /* @__PURE__ */ window.React.createElement("div", { className: "grid grid-cols-4 gap-2 mb-2" }, /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleParenOpen, className: "kbc-key--op" }, "("), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleParenClose, className: "kbc-key--op" }, ")"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleScientific("±"), className: "kbc-key--op", title: "Plus/Minus" }, "±"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleOperator("÷"), className: "kbc-key--op" }, "÷")), /* @__PURE__ */ window.React.createElement("div", { className: "grid grid-cols-4 gap-2" }, /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleClear, className: "kbc-key--danger" }, "C"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleOperator("mod"), className: "kbc-key--op", title: "Modulo" }, "mod"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleScientific("%"), className: "kbc-key--op", title: "Percentage" }, "%"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleOperator("×"), className: "kbc-key--op" }, "×"), [7, 8, 9].map((n) => /* @__PURE__ */ window.React.createElement(CalcButton, { key: n, onClick: () => handleDigit(String(n)), className: "" }, " ", n, " ")), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleOperator("-"), className: "kbc-key--op" }, "−"), [4, 5, 6].map((n) => /* @__PURE__ */ window.React.createElement(CalcButton, { key: n, onClick: () => handleDigit(String(n)), className: "" }, " ", n, " ")), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleOperator("+"), className: "kbc-key--op" }, "+"), [1, 2, 3].map((n) => /* @__PURE__ */ window.React.createElement(CalcButton, { key: n, onClick: () => handleDigit(String(n)), className: "" }, " ", n, " ")), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleEqual, className: "kbc-key--eq row-span-2 h-full" }, "="), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => !display.includes(".") && handleDigit("."), className: "" }, "."), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: () => handleDigit("0"), className: "" }, "0"), /* @__PURE__ */ window.React.createElement(CalcButton, { onClick: handleBackspace, className: "", title: "Backspace" }, /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[16px]" }, "backspace"))), isScientific && history.length > 0 && /* @__PURE__ */ window.React.createElement("div", { className: "mt-2 border-t border-white/5 pt-2 max-h-20 overflow-y-auto custom-scrollbar" }, history.map((h, i) => /* @__PURE__ */ window.React.createElement("div", { key: i, className: "text-[10px] text-slate-500 truncate py-0.5 tabular-nums" }, h))))),
      selectorMode && /* @__PURE__ */ window.React.createElement("div", { className: "kbc-modal absolute inset-0 z-[100] flex flex-col" }, /* @__PURE__ */ window.React.createElement("div", { className: "flex justify-between items-center mb-3" }, /* @__PURE__ */ window.React.createElement("span", { className: "kbc-title", style: { fontSize: 17 } }, t("selectCurrency")), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          onClick: () => {
            setSelectorMode(null);
            setSearchQuery("");
          },
          className: "kbc-circle no-drag-region",
          "aria-label": tc(),
          title: tc()
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[16px]" }, "close")
      )), /* @__PURE__ */ window.React.createElement("div", { className: "relative mb-3 no-drag-region" }, /* @__PURE__ */ window.React.createElement("span", { className: "absolute left-2.5 top-1/2 -translate-y-1/2 kbc-icon material-symbols-outlined text-[16px] text-slate-500" }, "search"), /* @__PURE__ */ window.React.createElement(
        "input",
        {
          type: "text",
          autoFocus: true,
          placeholder: t("searchCurrency"),
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "kbc-input"
        }
      )), /* @__PURE__ */ window.React.createElement("div", { className: "flex-1 overflow-y-auto custom-scrollbar pr-1 no-drag-region" }, (() => {
        const availableCurrencies = Object.keys(rates);
        const q = searchQuery.toLowerCase().trim();
        const filtered = availableCurrencies.filter((code) => {
          const details = CURRENCY_DETAILS[code];
          const name = details?.name.toLowerCase() || "";
          return code.toLowerCase().includes(q) || name.includes(q);
        });
        const sorted = [...filtered].sort((a, b) => {
          const idxA = POPULAR_CURRENCIES.indexOf(a);
          const idxB = POPULAR_CURRENCIES.indexOf(b);
          if (idxA !== -1 && idxB !== -1) return idxA - idxB;
          if (idxA !== -1) return -1;
          if (idxB !== -1) return 1;
          return a.localeCompare(b);
        });
        if (sorted.length === 0) {
          return /* @__PURE__ */ window.React.createElement("div", { className: "text-center py-6 text-xs text-slate-500" }, t("noCurrenciesFound"));
        }
        return sorted.map((code) => {
          const details = CURRENCY_DETAILS[code] || { name: code, flag: "🪙" };
          const isSelected = selectorMode === "from" ? fromCurrency === code : toCurrency === code;
          return /* @__PURE__ */ window.React.createElement(
            "button",
            {
              key: code,
              onClick: () => {
                if (selectorMode === "from") {
                  setFromCurrency(code);
                } else {
                  setToCurrency(code);
                }
                setSelectorMode(null);
                setSearchQuery("");
              },
              className: `kbc-row ${isSelected ? "kbc-row--sel" : ""}`
            },
            /* @__PURE__ */ window.React.createElement("div", { className: "flex items-center gap-2.5 min-w-0" }, /* @__PURE__ */ window.React.createElement("span", { className: "text-base select-none" }, details.flag), /* @__PURE__ */ window.React.createElement("div", { className: "min-w-0" }, /* @__PURE__ */ window.React.createElement("div", { className: "text-xs font-bold leading-none" }, code), /* @__PURE__ */ window.React.createElement("div", { className: "text-[10px] text-slate-500 truncate mt-0.5" }, details.name))),
            isSelected && /* @__PURE__ */ window.React.createElement("span", { className: "kbc-icon material-symbols-outlined text-[18px]" }, "check")
          );
        });
      })()))
    );
  };
  window.KoBarExtensions.registerSidebarButton({
    id: "com.kobar.calculator.plugin.btn",
    icon: "calculate",
    label: "Calculator",
    tile: { template: "value-caption", sensitive: false },
    onClick: (e, btnAnchorRect) => {
      const store = window.useAppStore.getState();
      const isOpen = store.activeExtensionPanelId === "com.kobar.calculator.plugin.panel";
      store.closeAllUtilityPopups();
      if (!isOpen) {
        window.useAppStore.setState({
          activeExtensionPanelId: "com.kobar.calculator.plugin.panel",
          activeExtensionAnchorRect: btnAnchorRect
        });
      }
    }
  });
  window.KoBarExtensions.registerPanel("com.kobar.calculator.plugin.panel", {
    id: "com.kobar.calculator.plugin.panel",
    render: (props) => window.React.createElement(CalculatorPluginPanel, props)
  });
  (() => {
    const ext = calcTileExt();
    if (!ext) return;
    publishCalcTile();
    if (typeof ext.onBarItemChange === "function") {
      try {
        ext.onBarItemChange(CALC_BTN_ID, (c) => {
          if (c && c.locale && c.locale !== calcLocale) {
            calcLocale = c.locale;
            publishCalcTile();
          }
        });
      } catch (e) {
      }
    }
  })();
})();
