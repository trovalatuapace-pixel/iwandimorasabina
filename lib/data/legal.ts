import type { Lang } from "@/lib/i18n/translations";
import { contacts } from "@/lib/site";

/**
 * Informativa privacy (art. 13 GDPR) e cookie policy (Linee guida Garante 10/06/2021)
 * in 4 lingue.
 *
 * Il sito NON usa cookie di profilazione né statistiche. L'unico contenuto di terze parti
 * che può installare cookie è la mappa Google, che si carica solo con il consenso
 * "Marketing e contenuti esterni" dato nel banner (components/site/CookieBanner.tsx) o con il clic sulla mappa.
 *
 * Se in futuro si aggiungono Google Analytics, Meta Pixel, YouTube, ecc. bisogna
 * aggiornare la cookie policy e il banner (lib/data/cookieBanner.ts), e caricarli solo col consenso.
 */

export const LEGAL_UPDATED = "2026-09-25";

export type LegalBlock = { h: string; p?: string[]; ul?: string[] };
export type LegalDoc = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  blocks: LegalBlock[];
};

const email = contacts.email;
const phone = contacts.phoneDisplay;
const owner = "Iwan Donateo";

const privacy: Record<Lang, LegalDoc> = {
  it: {
    metaTitle: "Informativa privacy",
    metaDescription: "Come Orbis in Sabina tratta i dati personali di chi visita il sito e di chi chiede un preventivo o soggiorna in struttura.",
    eyebrow: "Privacy",
    title: "Informativa sulla privacy",
    lead: "Come trattiamo i tuoi dati quando visiti il sito, ci scrivi o soggiorni da noi. Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR).",
    updated: "Ultimo aggiornamento",
    blocks: [
      {
        h: "1. Titolare del trattamento",
        p: [
          `Il titolare del trattamento è ${owner}, gestore dell'alloggio per uso turistico «Orbis in Sabina», Montopoli di Sabina (RI), Italia — CIN ${contacts.cin}, CIR ${contacts.cir}.`,
          `Per qualsiasi domanda sulla privacy puoi scrivere a ${email} o contattarci al ${phone}.`,
        ],
      },
      {
        h: "2. Quali dati trattiamo",
        ul: [
          "Dati di navigazione: indirizzo IP, tipo di browser e dispositivo, pagine visitate, data e ora. Sono raccolti automaticamente dai server che ospitano il sito, per il suo funzionamento e la sua sicurezza.",
          "Dati che ci invii tu: nome, cognome, telefono, email, date del soggiorno, numero di ospiti e il testo del messaggio, quando compili il modulo «Chiedi un preventivo» o ci scrivi via WhatsApp, email o telefono.",
          "Dati del soggiorno: se prenoti, i dati necessari per la prenotazione e quelli dei documenti d'identità degli ospiti, richiesti dalla legge al momento dell'arrivo.",
        ],
      },
      {
        h: "3. Il modulo «Chiedi un preventivo»",
        p: [
          "Il modulo non salva i dati sul sito: prepara il messaggio sul tuo dispositivo e lo apre in WhatsApp (o nel tuo programma di posta). I dati arrivano a noi solo quando premi «invia» nell'app. Da quel momento vengono trattati anche da WhatsApp (Meta) o dal tuo fornitore email secondo le loro informative.",
        ],
      },
      {
        h: "4. Perché trattiamo i dati e su quale base",
        ul: [
          "Rispondere alle tue richieste e preparare un preventivo — misure precontrattuali richieste da te (art. 6.1.b GDPR).",
          "Gestire la prenotazione e il soggiorno — esecuzione del contratto (art. 6.1.b GDPR).",
          "Adempiere agli obblighi di legge: comunicazione delle generalità degli ospiti alla Questura tramite il portale Alloggiati Web (art. 109 TULPS), statistiche turistiche regionali/ISTAT, imposta di soggiorno ove prevista, obblighi fiscali e contabili (art. 6.1.c GDPR).",
          "Garantire il funzionamento e la sicurezza del sito — legittimo interesse del titolare (art. 6.1.f GDPR).",
        ],
        p: ["Non usiamo i tuoi dati per pubblicità o profilazione e non li vendiamo a nessuno."],
      },
      {
        h: "5. Per quanto tempo conserviamo i dati",
        ul: [
          "Richieste di informazioni e preventivi senza prenotazione: per il tempo necessario a rispondere e comunque non oltre 12 mesi.",
          "Dati di prenotazione e documenti fiscali: 10 anni, come previsto dalla normativa fiscale.",
          "Dati inviati ad Alloggiati Web: non conserviamo copie oltre quanto richiesto dalla legge.",
          "Dati di navigazione: per il periodo tecnico previsto dal fornitore di hosting (in genere pochi giorni o settimane).",
        ],
      },
      {
        h: "6. A chi possono essere comunicati",
        ul: [
          "Vercel Inc. (fornitore di hosting del sito), che tratta i dati di navigazione come responsabile del trattamento.",
          "Autorità pubbliche quando richiesto dalla legge (Questura, Regione/ISTAT, Comune, Agenzia delle Entrate).",
          "Commercialista e consulenti, per gli adempimenti fiscali.",
          "Piattaforme che scegli tu: se prenoti tramite Booking.com o Airbnb, o ci scrivi su WhatsApp, queste aziende trattano i tuoi dati come titolari autonomi secondo le proprie informative.",
        ],
      },
      {
        h: "7. Trasferimento fuori dall'Unione Europea",
        p: [
          "Alcuni fornitori (Vercel, Meta/WhatsApp, Google) possono trattare dati negli Stati Uniti. Il trasferimento avviene sulla base della decisione di adeguatezza UE-USA (EU-U.S. Data Privacy Framework) o delle Clausole Contrattuali Standard approvate dalla Commissione Europea.",
        ],
      },
      {
        h: "8. Mappa e contenuti esterni",
        p: [
          "La mappa di Google Maps nelle pagine «Territorio» e «Contatti» si carica solo se la attivi tu con un clic. Da quel momento Google può raccogliere dati come l'indirizzo IP e usare cookie. Trovi i dettagli nella Cookie policy.",
        ],
      },
      {
        h: "9. I tuoi diritti",
        p: [
          `In qualsiasi momento puoi chiedere l'accesso ai tuoi dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità, oppure opporti al trattamento (artt. 15–22 GDPR), scrivendo a ${email}. Risponderemo entro 30 giorni.`,
          "Se ritieni che i tuoi dati siano trattati in modo non corretto, puoi presentare reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        ],
      },
      {
        h: "10. Obbligatorietà del conferimento",
        p: [
          "Fornire i dati per un preventivo o una prenotazione è facoltativo, ma senza di essi non possiamo risponderti né ospitarti. I dati dei documenti d'identità sono obbligatori per legge per soggiornare in struttura.",
        ],
      },
      {
        h: "11. Modifiche",
        p: ["Possiamo aggiornare questa informativa. La data dell'ultimo aggiornamento è indicata in fondo alla pagina."],
      },
    ],
  },

  en: {
    metaTitle: "Privacy policy",
    metaDescription: "How Orbis in Sabina handles the personal data of website visitors, guests and anyone requesting a quote.",
    eyebrow: "Privacy",
    title: "Privacy policy",
    lead: "How we handle your data when you visit the website, contact us or stay with us. Pursuant to Art. 13 of EU Regulation 2016/679 (GDPR).",
    updated: "Last updated",
    blocks: [
      {
        h: "1. Data controller",
        p: [
          `The data controller is ${owner}, host of the tourist accommodation “Orbis in Sabina”, Montopoli di Sabina (RI), Italy — CIN ${contacts.cin}, CIR ${contacts.cir}.`,
          `For any privacy question, write to ${email} or call ${phone}.`,
        ],
      },
      {
        h: "2. What data we process",
        ul: [
          "Browsing data: IP address, browser and device type, pages visited, date and time. These are collected automatically by the servers hosting the website, for its operation and security.",
          "Data you send us: first and last name, phone, email, dates of stay, number of guests and your message, when you fill in the “Request a quote” form or contact us via WhatsApp, email or phone.",
          "Stay data: if you book, the data needed for the booking and the guests' identity-document details required by law on arrival.",
        ],
      },
      {
        h: "3. The “Request a quote” form",
        p: [
          "The form does not store any data on the website: it prepares the message on your device and opens it in WhatsApp (or your email app). We only receive the data when you press “send” in the app. From then on, it is also processed by WhatsApp (Meta) or your email provider under their own privacy policies.",
        ],
      },
      {
        h: "4. Why we process data and on what legal basis",
        ul: [
          "Answering your enquiries and preparing a quote — pre-contractual steps taken at your request (Art. 6(1)(b) GDPR).",
          "Managing your booking and stay — performance of a contract (Art. 6(1)(b) GDPR).",
          "Complying with legal obligations: reporting guest details to the police via the Alloggiati Web portal (Art. 109 TULPS), regional/ISTAT tourism statistics, tourist tax where applicable, tax and accounting obligations (Art. 6(1)(c) GDPR).",
          "Keeping the website working and secure — legitimate interest of the controller (Art. 6(1)(f) GDPR).",
        ],
        p: ["We do not use your data for advertising or profiling, and we never sell it."],
      },
      {
        h: "5. How long we keep data",
        ul: [
          "Enquiries and quotes not followed by a booking: as long as needed to reply, and no longer than 12 months.",
          "Booking data and tax records: 10 years, as required by tax law.",
          "Data sent to Alloggiati Web: we keep no copies beyond what the law requires.",
          "Browsing data: for the technical period set by the hosting provider (usually a few days or weeks).",
        ],
      },
      {
        h: "6. Who may receive the data",
        ul: [
          "Vercel Inc. (website hosting provider), which processes browsing data as a data processor.",
          "Public authorities when required by law (police, Region/ISTAT, Municipality, Revenue Agency).",
          "Our accountant and advisers, for tax compliance.",
          "Platforms you choose: if you book via Booking.com or Airbnb, or message us on WhatsApp, these companies process your data as independent controllers under their own policies.",
        ],
      },
      {
        h: "7. Transfers outside the European Union",
        p: [
          "Some providers (Vercel, Meta/WhatsApp, Google) may process data in the United States. Such transfers rely on the EU-U.S. Data Privacy Framework adequacy decision or on the Standard Contractual Clauses approved by the European Commission.",
        ],
      },
      {
        h: "8. Map and external content",
        p: [
          "The Google Maps map on the “Surroundings” and “Contact” pages only loads if you activate it with a click. From that moment Google may collect data such as your IP address and use cookies. See the Cookie policy for details.",
        ],
      },
      {
        h: "9. Your rights",
        p: [
          `At any time you can request access to your data, rectification, erasure, restriction of processing, data portability, or object to processing (Arts. 15–22 GDPR) by writing to ${email}. We will reply within 30 days.`,
          "If you believe your data is being processed unlawfully, you can lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali, www.garanteprivacy.it) or with the authority of your country of residence.",
        ],
      },
      {
        h: "10. Is providing data mandatory?",
        p: [
          "Providing data for a quote or booking is optional, but without it we cannot reply or host you. Identity-document details are required by law in order to stay at the property.",
        ],
      },
      {
        h: "11. Changes",
        p: ["We may update this policy. The date of the last update is shown at the bottom of the page."],
      },
    ],
  },

  de: {
    metaTitle: "Datenschutzerklärung",
    metaDescription: "Wie Orbis in Sabina die personenbezogenen Daten von Website-Besuchern, Gästen und Anfragenden verarbeitet.",
    eyebrow: "Datenschutz",
    title: "Datenschutzerklärung",
    lead: "Wie wir Ihre Daten verarbeiten, wenn Sie die Website besuchen, uns kontaktieren oder bei uns übernachten. Gemäß Art. 13 der Verordnung (EU) 2016/679 (DSGVO).",
    updated: "Zuletzt aktualisiert",
    blocks: [
      {
        h: "1. Verantwortlicher",
        p: [
          `Verantwortlicher ist ${owner}, Betreiber der Ferienunterkunft „Orbis in Sabina“, Montopoli di Sabina (RI), Italien — CIN ${contacts.cin}, CIR ${contacts.cir}.`,
          `Bei Fragen zum Datenschutz schreiben Sie an ${email} oder rufen Sie ${phone} an.`,
        ],
      },
      {
        h: "2. Welche Daten wir verarbeiten",
        ul: [
          "Nutzungsdaten: IP-Adresse, Browser- und Gerätetyp, besuchte Seiten, Datum und Uhrzeit. Sie werden automatisch von den Servern erfasst, auf denen die Website gehostet wird, für deren Betrieb und Sicherheit.",
          "Daten, die Sie uns senden: Vor- und Nachname, Telefon, E-Mail, Reisedaten, Anzahl der Gäste und Ihre Nachricht, wenn Sie das Formular „Angebot anfragen“ ausfüllen oder uns per WhatsApp, E-Mail oder Telefon kontaktieren.",
          "Aufenthaltsdaten: bei einer Buchung die dafür nötigen Daten sowie die gesetzlich bei der Ankunft vorgeschriebenen Ausweisdaten der Gäste.",
        ],
      },
      {
        h: "3. Das Formular „Angebot anfragen“",
        p: [
          "Das Formular speichert keine Daten auf der Website: Es erstellt die Nachricht auf Ihrem Gerät und öffnet sie in WhatsApp (oder Ihrem E-Mail-Programm). Wir erhalten die Daten erst, wenn Sie in der App auf „Senden“ tippen. Ab dann werden sie auch von WhatsApp (Meta) bzw. Ihrem E-Mail-Anbieter nach deren Datenschutzbestimmungen verarbeitet.",
        ],
      },
      {
        h: "4. Zwecke und Rechtsgrundlagen",
        ul: [
          "Beantwortung Ihrer Anfragen und Erstellung eines Angebots — vorvertragliche Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO).",
          "Abwicklung von Buchung und Aufenthalt — Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).",
          "Erfüllung gesetzlicher Pflichten: Meldung der Gästedaten an die Polizei über das Portal Alloggiati Web (Art. 109 TULPS), regionale/ISTAT-Tourismusstatistik, ggf. Kurtaxe, steuerliche und buchhalterische Pflichten (Art. 6 Abs. 1 lit. c DSGVO).",
          "Betrieb und Sicherheit der Website — berechtigtes Interesse des Verantwortlichen (Art. 6 Abs. 1 lit. f DSGVO).",
        ],
        p: ["Wir nutzen Ihre Daten nicht für Werbung oder Profiling und verkaufen sie nicht."],
      },
      {
        h: "5. Speicherdauer",
        ul: [
          "Anfragen und Angebote ohne Buchung: so lange wie zur Beantwortung nötig, höchstens 12 Monate.",
          "Buchungsdaten und Steuerunterlagen: 10 Jahre, wie steuerrechtlich vorgeschrieben.",
          "An Alloggiati Web übermittelte Daten: keine Kopien über das gesetzlich Erforderliche hinaus.",
          "Nutzungsdaten: für den technischen Zeitraum des Hosting-Anbieters (in der Regel einige Tage oder Wochen).",
        ],
      },
      {
        h: "6. Empfänger",
        ul: [
          "Vercel Inc. (Hosting-Anbieter der Website) als Auftragsverarbeiter für die Nutzungsdaten.",
          "Behörden, soweit gesetzlich vorgeschrieben (Polizei, Region/ISTAT, Gemeinde, Finanzamt).",
          "Steuerberater und Berater für steuerliche Pflichten.",
          "Von Ihnen gewählte Plattformen: Wenn Sie über Booking.com oder Airbnb buchen oder uns per WhatsApp schreiben, verarbeiten diese Unternehmen Ihre Daten als eigenständige Verantwortliche nach ihren eigenen Bestimmungen.",
        ],
      },
      {
        h: "7. Übermittlung in Drittländer",
        p: [
          "Einige Anbieter (Vercel, Meta/WhatsApp, Google) können Daten in den USA verarbeiten. Grundlage ist der Angemessenheitsbeschluss zum EU-U.S. Data Privacy Framework oder die von der EU-Kommission genehmigten Standardvertragsklauseln.",
        ],
      },
      {
        h: "8. Karte und externe Inhalte",
        p: [
          "Die Google-Maps-Karte auf den Seiten „Umgebung“ und „Kontakt“ wird erst geladen, wenn Sie sie per Klick aktivieren. Ab dann kann Google Daten wie Ihre IP-Adresse erfassen und Cookies setzen. Details finden Sie in der Cookie-Richtlinie.",
        ],
      },
      {
        h: "9. Ihre Rechte",
        p: [
          `Sie können jederzeit Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit verlangen oder der Verarbeitung widersprechen (Art. 15–22 DSGVO) — per E-Mail an ${email}. Wir antworten innerhalb von 30 Tagen.`,
          "Sie haben das Recht, sich bei der italienischen Datenschutzbehörde (Garante per la protezione dei dati personali, www.garanteprivacy.it) oder bei der Aufsichtsbehörde Ihres Wohnsitzlandes zu beschweren.",
        ],
      },
      {
        h: "10. Pflicht zur Bereitstellung",
        p: [
          "Die Angabe von Daten für ein Angebot oder eine Buchung ist freiwillig; ohne sie können wir Ihnen jedoch nicht antworten bzw. Sie nicht beherbergen. Die Ausweisdaten sind für den Aufenthalt gesetzlich vorgeschrieben.",
        ],
      },
      {
        h: "11. Änderungen",
        p: ["Wir können diese Erklärung aktualisieren. Das Datum der letzten Aktualisierung steht unten auf der Seite."],
      },
    ],
  },

  fr: {
    metaTitle: "Politique de confidentialité",
    metaDescription: "Comment Orbis in Sabina traite les données personnelles des visiteurs du site, des hôtes et des demandes de devis.",
    eyebrow: "Confidentialité",
    title: "Politique de confidentialité",
    lead: "Comment nous traitons vos données lorsque vous visitez le site, nous contactez ou séjournez chez nous. Conformément à l'art. 13 du Règlement UE 2016/679 (RGPD).",
    updated: "Dernière mise à jour",
    blocks: [
      {
        h: "1. Responsable du traitement",
        p: [
          `Le responsable du traitement est ${owner}, exploitant du logement touristique « Orbis in Sabina », Montopoli di Sabina (RI), Italie — CIN ${contacts.cin}, CIR ${contacts.cir}.`,
          `Pour toute question relative à la confidentialité, écrivez à ${email} ou appelez le ${phone}.`,
        ],
      },
      {
        h: "2. Données traitées",
        ul: [
          "Données de navigation : adresse IP, type de navigateur et d'appareil, pages consultées, date et heure. Elles sont collectées automatiquement par les serveurs qui hébergent le site, pour son fonctionnement et sa sécurité.",
          "Données que vous nous envoyez : nom, prénom, téléphone, e-mail, dates du séjour, nombre de personnes et votre message, lorsque vous remplissez le formulaire « Demander un devis » ou nous contactez par WhatsApp, e-mail ou téléphone.",
          "Données du séjour : en cas de réservation, les données nécessaires à celle-ci et les données des pièces d'identité des hôtes exigées par la loi à l'arrivée.",
        ],
      },
      {
        h: "3. Le formulaire « Demander un devis »",
        p: [
          "Le formulaire n'enregistre aucune donnée sur le site : il prépare le message sur votre appareil et l'ouvre dans WhatsApp (ou votre messagerie). Nous ne recevons les données que lorsque vous appuyez sur « envoyer » dans l'application. Elles sont alors aussi traitées par WhatsApp (Meta) ou votre fournisseur e-mail selon leurs propres politiques.",
        ],
      },
      {
        h: "4. Finalités et bases juridiques",
        ul: [
          "Répondre à vos demandes et établir un devis — mesures précontractuelles prises à votre demande (art. 6.1.b RGPD).",
          "Gérer la réservation et le séjour — exécution du contrat (art. 6.1.b RGPD).",
          "Respecter les obligations légales : déclaration des hôtes à la police via le portail Alloggiati Web (art. 109 TULPS), statistiques touristiques régionales/ISTAT, taxe de séjour le cas échéant, obligations fiscales et comptables (art. 6.1.c RGPD).",
          "Assurer le fonctionnement et la sécurité du site — intérêt légitime du responsable (art. 6.1.f RGPD).",
        ],
        p: ["Nous n'utilisons pas vos données à des fins publicitaires ou de profilage et nous ne les vendons pas."],
      },
      {
        h: "5. Durée de conservation",
        ul: [
          "Demandes et devis sans réservation : le temps nécessaire pour répondre, et au maximum 12 mois.",
          "Données de réservation et pièces fiscales : 10 ans, comme l'exige la loi fiscale.",
          "Données transmises à Alloggiati Web : aucune copie au-delà de ce que la loi impose.",
          "Données de navigation : pendant la durée technique prévue par l'hébergeur (généralement quelques jours ou semaines).",
        ],
      },
      {
        h: "6. Destinataires",
        ul: [
          "Vercel Inc. (hébergeur du site), en tant que sous-traitant pour les données de navigation.",
          "Les autorités publiques lorsque la loi l'exige (police, Région/ISTAT, Commune, administration fiscale).",
          "Notre expert-comptable et nos conseillers, pour les obligations fiscales.",
          "Les plateformes que vous choisissez : si vous réservez via Booking.com ou Airbnb, ou nous écrivez sur WhatsApp, ces sociétés traitent vos données en tant que responsables indépendants selon leurs propres politiques.",
        ],
      },
      {
        h: "7. Transferts hors de l'Union européenne",
        p: [
          "Certains prestataires (Vercel, Meta/WhatsApp, Google) peuvent traiter des données aux États-Unis. Ces transferts reposent sur la décision d'adéquation EU-U.S. Data Privacy Framework ou sur les clauses contractuelles types approuvées par la Commission européenne.",
        ],
      },
      {
        h: "8. Carte et contenus externes",
        p: [
          "La carte Google Maps des pages « Alentours » et « Contact » ne se charge que si vous l'activez d'un clic. Google peut alors collecter des données comme votre adresse IP et utiliser des cookies. Les détails figurent dans la Politique cookies.",
        ],
      },
      {
        h: "9. Vos droits",
        p: [
          `Vous pouvez à tout moment demander l'accès à vos données, leur rectification, leur effacement, la limitation du traitement, la portabilité, ou vous opposer au traitement (art. 15–22 RGPD), en écrivant à ${email}. Nous répondrons sous 30 jours.`,
          "Vous pouvez introduire une réclamation auprès de l'autorité italienne de protection des données (Garante per la protezione dei dati personali, www.garanteprivacy.it) ou de l'autorité de votre pays de résidence (en France, la CNIL).",
        ],
      },
      {
        h: "10. Caractère obligatoire",
        p: [
          "La communication de vos données pour un devis ou une réservation est facultative, mais sans elles nous ne pouvons ni vous répondre ni vous accueillir. Les données des pièces d'identité sont obligatoires selon la loi pour séjourner dans la maison.",
        ],
      },
      {
        h: "11. Modifications",
        p: ["Nous pouvons mettre à jour cette politique. La date de la dernière mise à jour figure en bas de la page."],
      },
    ],
  },
};

const cookies: Record<Lang, LegalDoc> = {
  it: {
    metaTitle: "Cookie policy",
    metaDescription: "Quali cookie usa il sito di Orbis in Sabina: nessun cookie di profilazione o statistico, mappa Google solo su consenso.",
    eyebrow: "Cookie",
    title: "Cookie policy",
    lead: "In breve: questo sito non usa cookie di profilazione né statistiche. L'unico servizio esterno che può usare cookie è la mappa di Google, che si carica solo se la attivi tu.",
    updated: "Ultimo aggiornamento",
    blocks: [
      {
        h: "1. Cosa sono i cookie",
        p: [
          "I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo. Tecnologie simili (come il «local storage» del browser) funzionano allo stesso modo e sono trattate qui insieme ai cookie.",
        ],
      },
      {
        h: "2. Cookie tecnici",
        p: [
          "Il sito non installa cookie propri. Salva solo, nel local storage del tuo browser, le tue scelte sui cookie fatte nel banner (chiave «orbis-cookie-consent»), così non te le chiediamo a ogni pagina. È uno strumento tecnico che non richiede consenso; dopo 6 mesi il banner ti viene riproposto.",
          "I caratteri tipografici sono ospitati sul nostro stesso server: non vengono scaricati da Google Fonts.",
        ],
      },
      {
        h: "3. Cookie analitici e di profilazione",
        p: ["Non usiamo Google Analytics, Meta Pixel né altri strumenti di statistica, pubblicità o profilazione."],
      },
      {
        h: "4. Cookie di terze parti: Google Maps",
        p: [
          "Nelle pagine «Territorio» e «Contatti» c'è una mappa di Google Maps (Google Ireland Ltd.). Non viene caricata finché non premi «Mostra la mappa»: con quel clic dai il consenso. Da quel momento Google può installare i propri cookie (ad es. NID) e raccogliere dati come l'indirizzo IP, anche per finalità proprie.",
          "Informativa di Google: policies.google.com/privacy — Cookie di Google: policies.google.com/technologies/cookies",
        ],
      },
      {
        h: "5. Link esterni",
        p: [
          "I pulsanti verso WhatsApp, Booking.com, Airbnb, Instagram e Facebook sono semplici link: non caricano nulla finché non li apri. Una volta sul loro sito valgono le rispettive cookie policy.",
        ],
      },
      {
        h: "6. Come gestire le tue scelte",
        p: [
          "Alla prima visita un banner ti chiede il consenso: puoi accettare tutti i cookie, sceglierli per categoria («Personalizza») o usare solo quelli necessari. Puoi cambiare idea in qualsiasi momento con il link «Preferenze cookie» in fondo a ogni pagina o con il pulsante qui sotto. Puoi anche cancellare o bloccare i cookie dalle impostazioni del browser (Chrome, Safari, Firefox, Edge); bloccando tutti i cookie alcune funzioni di siti esterni potrebbero non funzionare.",
          "Per il resto del trattamento dei dati personali consulta l'Informativa privacy.",
        ],
      },
    ],
  },

  en: {
    metaTitle: "Cookie policy",
    metaDescription: "Which cookies the Orbis in Sabina website uses: no profiling or analytics cookies, Google map only with consent.",
    eyebrow: "Cookies",
    title: "Cookie policy",
    lead: "In short: this website uses no profiling or analytics cookies. The only external service that may use cookies is the Google map, which only loads if you activate it.",
    updated: "Last updated",
    blocks: [
      {
        h: "1. What cookies are",
        p: [
          "Cookies are small text files that websites store on your device. Similar technologies (such as the browser's “local storage”) work the same way and are covered here together with cookies.",
        ],
      },
      {
        h: "2. Technical cookies",
        p: [
          "The website sets no cookies of its own. It only stores the cookie choices you make in the banner in your browser's local storage (key “orbis-cookie-consent”), so we don't ask you on every page. This is a technical tool that needs no consent; after 6 months the banner is shown again.",
          "Fonts are hosted on our own server: they are not downloaded from Google Fonts.",
        ],
      },
      {
        h: "3. Analytics and profiling cookies",
        p: ["We do not use Google Analytics, Meta Pixel or any other statistics, advertising or profiling tools."],
      },
      {
        h: "4. Third-party cookies: Google Maps",
        p: [
          "The “Surroundings” and “Contact” pages contain a Google Maps map (Google Ireland Ltd.). It does not load until you press “Show map”: that click is your consent. From then on Google may set its own cookies (e.g. NID) and collect data such as your IP address, also for its own purposes.",
          "Google privacy policy: policies.google.com/privacy — Google cookies: policies.google.com/technologies/cookies",
        ],
      },
      {
        h: "5. External links",
        p: [
          "Buttons to WhatsApp, Booking.com, Airbnb, Instagram and Facebook are plain links: nothing loads until you open them. Once on their websites, their own cookie policies apply.",
        ],
      },
      {
        h: "6. Managing your choices",
        p: [
          "On your first visit a banner asks for your consent: you can accept all cookies, choose by category (“Customise”) or use only the necessary ones. You can change your mind at any time via the “Cookie settings” link at the bottom of every page or the button below. You can also delete or block cookies in your browser settings (Chrome, Safari, Firefox, Edge); blocking all cookies may stop some features of external sites from working.",
          "For all other processing of personal data, see the Privacy policy.",
        ],
      },
    ],
  },

  de: {
    metaTitle: "Cookie-Richtlinie",
    metaDescription: "Welche Cookies die Website von Orbis in Sabina verwendet: keine Tracking- oder Statistik-Cookies, Google-Karte nur mit Einwilligung.",
    eyebrow: "Cookies",
    title: "Cookie-Richtlinie",
    lead: "Kurz gesagt: Diese Website verwendet keine Profiling- oder Statistik-Cookies. Der einzige externe Dienst, der Cookies setzen kann, ist die Google-Karte — und die wird nur geladen, wenn Sie sie aktivieren.",
    updated: "Zuletzt aktualisiert",
    blocks: [
      {
        h: "1. Was sind Cookies?",
        p: [
          "Cookies sind kleine Textdateien, die Websites auf Ihrem Gerät speichern. Ähnliche Technologien (wie der „Local Storage“ des Browsers) funktionieren genauso und werden hier gemeinsam mit Cookies behandelt.",
        ],
      },
      {
        h: "2. Technische Cookies",
        p: [
          "Die Website setzt keine eigenen Cookies. Sie speichert lediglich Ihre im Banner getroffene Cookie-Auswahl im Local Storage Ihres Browsers (Schlüssel „orbis-cookie-consent“), damit wir nicht auf jeder Seite erneut fragen. Dies ist ein technisches Hilfsmittel, das keine Einwilligung erfordert; nach 6 Monaten wird das Banner erneut angezeigt.",
          "Die Schriftarten liegen auf unserem eigenen Server und werden nicht von Google Fonts geladen.",
        ],
      },
      {
        h: "3. Analyse- und Profiling-Cookies",
        p: ["Wir verwenden weder Google Analytics noch Meta Pixel oder andere Statistik-, Werbe- oder Profiling-Tools."],
      },
      {
        h: "4. Cookies von Drittanbietern: Google Maps",
        p: [
          "Auf den Seiten „Umgebung“ und „Kontakt“ befindet sich eine Google-Maps-Karte (Google Ireland Ltd.). Sie wird erst geladen, wenn Sie auf „Karte anzeigen“ klicken — dieser Klick ist Ihre Einwilligung. Ab dann kann Google eigene Cookies (z. B. NID) setzen und Daten wie Ihre IP-Adresse erfassen, auch für eigene Zwecke.",
          "Datenschutzerklärung von Google: policies.google.com/privacy — Google-Cookies: policies.google.com/technologies/cookies",
        ],
      },
      {
        h: "5. Externe Links",
        p: [
          "Die Schaltflächen zu WhatsApp, Booking.com, Airbnb, Instagram und Facebook sind einfache Links: Es wird nichts geladen, bis Sie sie öffnen. Auf deren Websites gelten deren eigene Cookie-Richtlinien.",
        ],
      },
      {
        h: "6. Ihre Einstellungen verwalten",
        p: [
          "Beim ersten Besuch fragt ein Banner nach Ihrer Einwilligung: Sie können alle Cookies akzeptieren, nach Kategorie wählen („Anpassen“) oder nur die notwendigen verwenden. Über den Link „Cookie-Einstellungen“ unten auf jeder Seite oder die Schaltfläche unten können Sie Ihre Wahl jederzeit ändern. Außerdem können Sie Cookies in den Browsereinstellungen (Chrome, Safari, Firefox, Edge) löschen oder blockieren; wenn Sie alle Cookies blockieren, funktionieren manche Funktionen externer Websites möglicherweise nicht.",
          "Alles Weitere zur Verarbeitung personenbezogener Daten finden Sie in der Datenschutzerklärung.",
        ],
      },
    ],
  },

  fr: {
    metaTitle: "Politique cookies",
    metaDescription: "Les cookies utilisés par le site d'Orbis in Sabina : aucun cookie de profilage ou de mesure d'audience, carte Google uniquement avec votre accord.",
    eyebrow: "Cookies",
    title: "Politique cookies",
    lead: "En bref : ce site n'utilise aucun cookie de profilage ni de mesure d'audience. Le seul service externe susceptible d'utiliser des cookies est la carte Google, qui ne se charge que si vous l'activez.",
    updated: "Dernière mise à jour",
    blocks: [
      {
        h: "1. Qu'est-ce qu'un cookie ?",
        p: [
          "Les cookies sont de petits fichiers texte que les sites enregistrent sur votre appareil. Les technologies similaires (comme le « local storage » du navigateur) fonctionnent de la même manière et sont traitées ici avec les cookies.",
        ],
      },
      {
        h: "2. Cookies techniques",
        p: [
          "Le site ne dépose aucun cookie propre. Il enregistre seulement les choix de cookies faits dans le bandeau dans le local storage de votre navigateur (clé « orbis-cookie-consent »), pour ne pas vous les redemander à chaque page. C'est un outil technique qui ne nécessite pas de consentement ; au bout de 6 mois, le bandeau vous est de nouveau proposé.",
          "Les polices de caractères sont hébergées sur notre propre serveur : elles ne sont pas téléchargées depuis Google Fonts.",
        ],
      },
      {
        h: "3. Cookies de mesure d'audience et de profilage",
        p: ["Nous n'utilisons ni Google Analytics, ni Meta Pixel, ni aucun autre outil de statistiques, de publicité ou de profilage."],
      },
      {
        h: "4. Cookies tiers : Google Maps",
        p: [
          "Les pages « Alentours » et « Contact » contiennent une carte Google Maps (Google Ireland Ltd.). Elle ne se charge pas tant que vous n'appuyez pas sur « Afficher la carte » : ce clic vaut consentement. Google peut alors déposer ses propres cookies (par ex. NID) et collecter des données comme votre adresse IP, y compris pour ses propres finalités.",
          "Politique de confidentialité de Google : policies.google.com/privacy — Cookies Google : policies.google.com/technologies/cookies",
        ],
      },
      {
        h: "5. Liens externes",
        p: [
          "Les boutons vers WhatsApp, Booking.com, Airbnb, Instagram et Facebook sont de simples liens : rien ne se charge tant que vous ne les ouvrez pas. Sur leurs sites, leurs propres politiques cookies s'appliquent.",
        ],
      },
      {
        h: "6. Gérer vos choix",
        p: [
          "Lors de votre première visite, un bandeau vous demande votre consentement : vous pouvez accepter tous les cookies, choisir par catégorie (« Personnaliser ») ou n'utiliser que les cookies nécessaires. Vous pouvez changer d'avis à tout moment via le lien « Préférences cookies » en bas de chaque page ou le bouton ci-dessous. Vous pouvez aussi supprimer ou bloquer les cookies dans les réglages de votre navigateur (Chrome, Safari, Firefox, Edge) ; bloquer tous les cookies peut empêcher certaines fonctions de sites externes de fonctionner.",
          "Pour tout autre traitement de données personnelles, consultez la Politique de confidentialité.",
        ],
      },
    ],
  },
};

export const legal = { privacy, cookies };

