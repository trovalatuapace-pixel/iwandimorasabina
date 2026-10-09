import type { Lang } from "@/lib/i18n/translations";

type CookieRow = { name: string; provider: string; purpose: string; duration: string };
type Category = { key: "necessary" | "statistics" | "marketing"; title: string; text: string; cookies: CookieRow[]; empty?: string };

export type BannerText = {
  tabs: [string, string, string];
  title: string;
  intro: string;
  acceptAll: string;
  customize: string;
  saveSelection: string;
  necessaryOnly: string;
  close: string;
  alwaysOn: string;
  cookieHead: [string, string, string, string];
  categories: Category[];
  aboutTitle: string;
  about: string[];
  policyLink: string;
  privacyLink: string;
  settingsLink: string;
};

const cookieNames = {
  consent: "orbis-cookie-consent",
  meta: "_fbp, _fbc",
  google: "NID, AEC, SOCS, __Secure-ENID",
};

export const bannerText: Record<Lang, BannerText> = {
  it: {
    tabs: ["Consenso", "Dettagli", "Informazioni sui cookie"],
    title: "Questo sito web utilizza i cookie",
    intro:
      "Utilizziamo cookie tecnici, necessari per il funzionamento del sito, e — solo con il tuo consenso — cookie di terze parti per mostrarti contenuti esterni come la mappa di Google Maps e per misurare l'efficacia delle nostre campagne pubblicitarie (Meta Pixel). Il titolare del trattamento è Iwan Donateo (Dimora Pangea), contattabile all'email iwandonateo@hotmail.com. Puoi accettare tutti i cookie, sceglierli uno per uno con «Personalizza» oppure usare solo quelli necessari. Puoi cambiare idea in qualsiasi momento dal link «Preferenze cookie» in fondo a ogni pagina.",
    acceptAll: "Accetta tutti i cookie",
    customize: "Personalizza",
    saveSelection: "Consenti la selezione",
    necessaryOnly: "Usa solo i cookie necessari",
    close: "Chiudi e usa solo i cookie necessari",
    alwaysOn: "Sempre attivi",
    cookieHead: ["Nome", "Fornitore", "Scopo", "Durata"],
    categories: [
      {
        key: "necessary",
        title: "Necessari",
        text: "Servono al funzionamento del sito e a ricordare le tue scelte sui cookie. Non si possono disattivare.",
        cookies: [{ name: cookieNames.consent, provider: "Dimora Pangea", purpose: "Ricorda le tue preferenze sui cookie", duration: "6 mesi (local storage)" }],
      },
      {
        key: "statistics",
        title: "Statistiche",
        text: "Aiutano a capire in forma anonima come i visitatori usano il sito.",
        cookies: [],
        empty: "Al momento il sito non usa cookie statistici.",
      },
      {
        key: "marketing",
        title: "Marketing e contenuti esterni",
        text: "Permettono di caricare contenuti di terze parti, come la mappa di Google Maps nelle pagine Territorio e Contatti. Google può usarli anche per finalità proprie. Includono il Meta Pixel (Meta Platforms Ireland Ltd.), che ci permette di misurare le visite e le azioni (clic su WhatsApp, Booking.com, Airbnb, richiesta di preventivo) dopo aver visto i nostri annunci su Facebook e Instagram.",
        cookies: [
          { name: cookieNames.google, provider: "Google Ireland Ltd.", purpose: "Mappa Google Maps, preferenze e sicurezza", duration: "Fino a 13 mesi" },
          { name: cookieNames.meta, provider: "Meta Platforms Ireland Ltd.", purpose: "Meta Pixel: misurazione delle visite e delle campagne pubblicitarie", duration: "Fino a 3 mesi" },
        ],
      },
    ],
    aboutTitle: "Cosa sono i cookie",
    about: [
      "I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo per funzionare o per offrire servizi aggiuntivi.",
      "Per legge possiamo usare senza consenso solo i cookie strettamente necessari. Per tutti gli altri ti chiediamo il permesso, che puoi dare o revocare quando vuoi.",
      "Alcuni cookie sono installati da servizi di terze parti presenti sulle nostre pagine (ad esempio Google Maps e Meta Pixel).",
    ],
    policyLink: "Cookie policy",
    privacyLink: "Informativa privacy",
    settingsLink: "Preferenze cookie",
  },

  en: {
    tabs: ["Consent", "Details", "About cookies"],
    title: "This website uses cookies",
    intro:
      "We use technical cookies needed for the website to work and — only with your consent — third-party cookies to show external content such as the Google Maps map and to measure the effectiveness of our advertising campaigns (Meta Pixel). The data controller is Iwan Donateo (Dimora Pangea), iwandonateo@hotmail.com. You can accept all cookies, choose them one by one with “Customise”, or use only the necessary ones. You can change your mind at any time via the “Cookie settings” link at the bottom of every page.",
    acceptAll: "Accept all cookies",
    customize: "Customise",
    saveSelection: "Allow selection",
    necessaryOnly: "Use necessary cookies only",
    close: "Close and use necessary cookies only",
    alwaysOn: "Always on",
    cookieHead: ["Name", "Provider", "Purpose", "Duration"],
    categories: [
      {
        key: "necessary",
        title: "Necessary",
        text: "Needed for the website to work and to remember your cookie choices. They cannot be switched off.",
        cookies: [{ name: cookieNames.consent, provider: "Dimora Pangea", purpose: "Remembers your cookie preferences", duration: "6 months (local storage)" }],
      },
      {
        key: "statistics",
        title: "Statistics",
        text: "Help us understand anonymously how visitors use the website.",
        cookies: [],
        empty: "The website currently uses no statistics cookies.",
      },
      {
        key: "marketing",
        title: "Marketing and external content",
        text: "Allow third-party content to load, such as the Google Maps map on the Surroundings and Contact pages. Google may also use them for its own purposes. They include the Meta Pixel (Meta Platforms Ireland Ltd.), which lets us measure visits and actions (clicks on WhatsApp, Booking.com, Airbnb, quote requests) after you have seen our ads on Facebook and Instagram.",
        cookies: [
          { name: cookieNames.google, provider: "Google Ireland Ltd.", purpose: "Google Maps map, preferences and security", duration: "Up to 13 months" },
          { name: cookieNames.meta, provider: "Meta Platforms Ireland Ltd.", purpose: "Meta Pixel: measuring visits and advertising campaigns", duration: "Up to 3 months" },
        ],
      },
    ],
    aboutTitle: "What cookies are",
    about: [
      "Cookies are small text files that websites store on your device in order to work or to offer additional services.",
      "By law we may only use strictly necessary cookies without consent. For all others we ask your permission, which you can give or withdraw at any time.",
      "Some cookies are set by third-party services on our pages (for example Google Maps and the Meta Pixel).",
    ],
    policyLink: "Cookie policy",
    privacyLink: "Privacy policy",
    settingsLink: "Cookie settings",
  },

  de: {
    tabs: ["Einwilligung", "Details", "Über Cookies"],
    title: "Diese Website verwendet Cookies",
    intro:
      "Wir verwenden technische Cookies, die für den Betrieb der Website nötig sind, und — nur mit Ihrer Einwilligung — Cookies von Drittanbietern, um externe Inhalte wie die Google-Maps-Karte anzuzeigen und die Wirksamkeit unserer Werbekampagnen zu messen (Meta-Pixel). Verantwortlicher ist Iwan Donateo (Dimora Pangea), iwandonateo@hotmail.com. Sie können alle Cookies akzeptieren, sie mit „Anpassen“ einzeln auswählen oder nur die notwendigen verwenden. Über den Link „Cookie-Einstellungen“ unten auf jeder Seite können Sie Ihre Wahl jederzeit ändern.",
    acceptAll: "Alle Cookies akzeptieren",
    customize: "Anpassen",
    saveSelection: "Auswahl erlauben",
    necessaryOnly: "Nur notwendige Cookies",
    close: "Schließen und nur notwendige Cookies verwenden",
    alwaysOn: "Immer aktiv",
    cookieHead: ["Name", "Anbieter", "Zweck", "Dauer"],
    categories: [
      {
        key: "necessary",
        title: "Notwendig",
        text: "Für den Betrieb der Website und zum Speichern Ihrer Cookie-Auswahl erforderlich. Sie können nicht deaktiviert werden.",
        cookies: [{ name: cookieNames.consent, provider: "Dimora Pangea", purpose: "Speichert Ihre Cookie-Einstellungen", duration: "6 Monate (Local Storage)" }],
      },
      {
        key: "statistics",
        title: "Statistiken",
        text: "Helfen uns, anonym zu verstehen, wie Besucher die Website nutzen.",
        cookies: [],
        empty: "Die Website verwendet derzeit keine Statistik-Cookies.",
      },
      {
        key: "marketing",
        title: "Marketing und externe Inhalte",
        text: "Ermöglichen das Laden von Inhalten Dritter, etwa der Google-Maps-Karte auf den Seiten Umgebung und Kontakt. Google kann sie auch für eigene Zwecke nutzen. Dazu gehört das Meta-Pixel (Meta Platforms Ireland Ltd.), mit dem wir Besuche und Aktionen (Klicks auf WhatsApp, Booking.com, Airbnb, Anfragen) messen, nachdem Sie unsere Anzeigen auf Facebook und Instagram gesehen haben.",
        cookies: [
          { name: cookieNames.google, provider: "Google Ireland Ltd.", purpose: "Google-Maps-Karte, Einstellungen und Sicherheit", duration: "Bis zu 13 Monate" },
          { name: cookieNames.meta, provider: "Meta Platforms Ireland Ltd.", purpose: "Meta-Pixel: Messung von Besuchen und Werbekampagnen", duration: "Bis zu 3 Monate" },
        ],
      },
    ],
    aboutTitle: "Was sind Cookies?",
    about: [
      "Cookies sind kleine Textdateien, die Websites auf Ihrem Gerät speichern, um zu funktionieren oder zusätzliche Dienste anzubieten.",
      "Ohne Einwilligung dürfen wir nur unbedingt notwendige Cookies verwenden. Für alle anderen bitten wir um Ihre Erlaubnis, die Sie jederzeit erteilen oder widerrufen können.",
      "Einige Cookies werden von Drittanbietern auf unseren Seiten gesetzt (zum Beispiel Google Maps und das Meta-Pixel).",
    ],
    policyLink: "Cookie-Richtlinie",
    privacyLink: "Datenschutzerklärung",
    settingsLink: "Cookie-Einstellungen",
  },

  fr: {
    tabs: ["Consentement", "Détails", "À propos des cookies"],
    title: "Ce site utilise des cookies",
    intro:
      "Nous utilisons des cookies techniques nécessaires au fonctionnement du site et — uniquement avec votre accord — des cookies tiers pour afficher des contenus externes comme la carte Google Maps et mesurer l'efficacité de nos campagnes publicitaires (Meta Pixel). Le responsable du traitement est Iwan Donateo (Dimora Pangea), iwandonateo@hotmail.com. Vous pouvez accepter tous les cookies, les choisir un par un avec « Personnaliser » ou n'utiliser que les cookies nécessaires. Vous pouvez changer d'avis à tout moment via le lien « Préférences cookies » en bas de chaque page.",
    acceptAll: "Accepter tous les cookies",
    customize: "Personnaliser",
    saveSelection: "Autoriser la sélection",
    necessaryOnly: "Cookies nécessaires uniquement",
    close: "Fermer et n'utiliser que les cookies nécessaires",
    alwaysOn: "Toujours actifs",
    cookieHead: ["Nom", "Fournisseur", "Finalité", "Durée"],
    categories: [
      {
        key: "necessary",
        title: "Nécessaires",
        text: "Indispensables au fonctionnement du site et pour mémoriser vos choix de cookies. Ils ne peuvent pas être désactivés.",
        cookies: [{ name: cookieNames.consent, provider: "Dimora Pangea", purpose: "Mémorise vos préférences de cookies", duration: "6 mois (local storage)" }],
      },
      {
        key: "statistics",
        title: "Statistiques",
        text: "Nous aident à comprendre de façon anonyme comment les visiteurs utilisent le site.",
        cookies: [],
        empty: "Le site n'utilise actuellement aucun cookie statistique.",
      },
      {
        key: "marketing",
        title: "Marketing et contenus externes",
        text: "Permettent de charger des contenus tiers, comme la carte Google Maps des pages Alentours et Contact. Google peut aussi les utiliser pour ses propres finalités. Ils incluent le Meta Pixel (Meta Platforms Ireland Ltd.), qui nous permet de mesurer les visites et les actions (clics sur WhatsApp, Booking.com, Airbnb, demandes de devis) après que vous avez vu nos annonces sur Facebook et Instagram.",
        cookies: [
          { name: cookieNames.google, provider: "Google Ireland Ltd.", purpose: "Carte Google Maps, préférences et sécurité", duration: "Jusqu'à 13 mois" },
          { name: cookieNames.meta, provider: "Meta Platforms Ireland Ltd.", purpose: "Meta Pixel : mesure des visites et des campagnes publicitaires", duration: "Jusqu'à 3 mois" },
        ],
      },
    ],
    aboutTitle: "Qu'est-ce qu'un cookie ?",
    about: [
      "Les cookies sont de petits fichiers texte que les sites enregistrent sur votre appareil pour fonctionner ou proposer des services supplémentaires.",
      "La loi nous permet d'utiliser sans consentement uniquement les cookies strictement nécessaires. Pour tous les autres, nous vous demandons votre accord, que vous pouvez donner ou retirer à tout moment.",
      "Certains cookies sont déposés par des services tiers présents sur nos pages (par exemple Google Maps et le Meta Pixel).",
    ],
    policyLink: "Politique cookies",
    privacyLink: "Politique de confidentialité",
    settingsLink: "Préférences cookies",
  },
};
