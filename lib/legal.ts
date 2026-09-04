export type LegalSection = {
  heading: string;
  deHeading: string;
  paragraphs: string[];
  deParagraphs: string[];
};

export type LegalDoc = {
  slug: "terms" | "privacy" | "cookies" | "refund-policy";
  title: string;
  deTitle: string;
  updated: string;
  deUpdated: string;
  sections: LegalSection[];
};

export const legalDocs: Record<LegalDoc["slug"], LegalDoc> = {
  terms: {
    slug: "terms",
    title: "Terms & Conditions",
    deTitle: "Allgemeine Geschäftsbedingungen",
    updated: "Last updated: August 1, 2026",
    deUpdated: "Zuletzt aktualisiert: 1. August 2026",
    sections: [
      {
        heading: "1. Agreement to terms",
        deHeading: "1. Geltungsbereich",
        paragraphs: [
          "By using the Shozani website and services you agree to these Terms and Conditions. If you use our services on behalf of an employer or institution, you confirm that you are authorised to bind that organisation to these terms.",
          "We may update these terms from time to time; the latest version always applies and is published on this page.",
        ],
        deParagraphs: [
          "Mit der Nutzung der Shozani-Website und -Dienstleistungen stimmen Sie diesen Allgemeinen Geschäftsbedingungen zu. Wenn Sie unsere Dienste im Namen eines Arbeitgebers oder einer Institution nutzen, bestätigen Sie, dass Sie berechtigt sind, diese Organisation an diese Bedingungen zu binden.",
          "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren; es gilt stets die neueste Version, die auf dieser Seite veröffentlicht wird.",
        ],
      },
      {
        heading: "2. Our services",
        deHeading: "2. Unsere Leistungen",
        paragraphs: [
          "Shozani provides study abroad counselling, visa application support, language training, job placement assistance and related consultancy services. The specific scope of each engagement is defined in your signed service agreement.",
          "We are a consultancy, not a government authority. All visa decisions are made solely by the relevant embassies or immigration departments, and we cannot guarantee an outcome.",
        ],
        deParagraphs: [
          "Shozani bietet Studienberatung, Unterstützung bei Visumanträgen, Sprachkurse, Vermittlungshilfe und weitere Beratungsleistungen an. Der konkrete Umfang ergibt sich aus Ihrem unterzeichneten Servicevertrag.",
          "Wir sind ein Beratungsunternehmen, keine Behörde. Alle Visumentscheidungen treffen ausschließlich die zuständigen Botschaften oder Einwanderungsbehörden; wir können keinen bestimmten Ausgang garantieren.",
        ],
      },
      {
        heading: "3. Client responsibilities",
        deHeading: "3. Pflichten des Kunden",
        paragraphs: [
          "You agree to provide complete, accurate and truthful information and documents for every application. Submitting false documents is fraud under Pakistani and international law and will result in termination of services with no refund.",
          "You are responsible for meeting deadlines we set, attending appointments, and paying government and third-party fees on time.",
        ],
        deParagraphs: [
          "Sie verpflichten sich, für jeden Antrag vollständige, richtige und wahrheitsgemäße Angaben und Unterlagen zu machen. Die Einreichung falscher Dokumente ist Betrug nach pakistanischem und internationalem Recht und führt zur Beendigung der Leistungen ohne Erstattung.",
          "Sie sind verantwortlich für die Einhaltung gesetzter Fristen, die Wahrnehmung von Terminen und die pünktliche Zahlung von Behörden- und Drittgebühren.",
        ],
      },
      {
        heading: "4. Fees and payments",
        deHeading: "4. Gebühren und Zahlungen",
        paragraphs: [
          "Service fees are agreed in advance and documented in your agreement. Government fees (visa, recognition, medicals, tests) are paid separately by you, directly or through our facilitated channels.",
          "Payments are non-refundable once the agreed work stage has started, except as described in our Refund Policy.",
        ],
        deParagraphs: [
          "Servicegebühren werden im Voraus vereinbart und in Ihrem Vertrag dokumentiert. Behördengebühren (Visum, Anerkennung, medizinische Untersuchungen, Tests) zahlen Sie separat — direkt oder über unsere Vermittlung.",
          "Zahlungen sind nach Beginn der vereinbarten Leistungsstufe nicht erstattungsfähig, außer wie in unserer Erstattungsrichtlinie beschrieben.",
        ],
      },
      {
        heading: "5. Intellectual property",
        deHeading: "5. Geistiges Eigentum",
        paragraphs: [
          "All content on this website — text, graphics, logos, course materials and tools — is the property of Shozani and protected by copyright law. You may not reproduce, resell or redistribute it without written permission.",
        ],
        deParagraphs: [
          "Alle Inhalte dieser Website — Texte, Grafiken, Logos, Kursmaterialien und Werkzeuge — sind Eigentum von Shozani und urheberrechtlich geschützt. Eine Vervielfältigung, der Weiterverkauf oder die Weiterverbreitung ohne schriftliche Genehmigung ist nicht gestattet.",
        ],
      },
      {
        heading: "6. Liability",
        deHeading: "6. Haftung",
        paragraphs: [
          "We take reasonable care in our advice and documentation, but we are not liable for decisions made by third parties such as embassies, universities or employers. Our total liability is limited to the fees you paid us for the affected service.",
          "Nothing in these terms excludes liability that cannot be excluded by law.",
        ],
        deParagraphs: [
          "Wir arbeiten bei Beratung und Unterlagen mit angemessener Sorgfalt, haften jedoch nicht für Entscheidungen Dritter wie Botschaften, Universitäten oder Arbeitgebern. Unsere Gesamthaftung ist auf die von Ihnen gezahlten Gebühren für die betroffene Leistung begrenzt.",
          "Diese Bedingungen schließen keine Haftung aus, die gesetzlich nicht ausgeschlossen werden kann.",
        ],
      },
      {
        heading: "7. Governing law",
        deHeading: "7. Anwendbares Recht",
        paragraphs: [
          "These terms are governed by the laws of Pakistan. Any disputes are subject to the exclusive jurisdiction of the courts of Islamabad.",
        ],
        deParagraphs: [
          "Diese Bedingungen unterliegen dem Recht Pakistans. Für Streitigkeiten ist die ausschließliche Zuständigkeit der Gerichte von Islamabad vereinbart.",
        ],
      },
    ],
  },
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    deTitle: "Datenschutzerklärung",
    updated: "Last updated: August 1, 2026",
    deUpdated: "Zuletzt aktualisiert: 1. August 2026",
    sections: [
      {
        heading: "1. What we collect",
        deHeading: "1. Welche Daten wir erheben",
        paragraphs: [
          "We collect information you provide directly: name, contact details, education and work history, nationality, IELTS and language results, and the documents you upload for your application file.",
          "We also collect basic technical data automatically — device type, browser, pages visited and general location — to maintain and improve the website.",
        ],
        deParagraphs: [
          "Wir erheben Informationen, die Sie direkt angeben: Name, Kontaktdaten, Ausbildungs- und Berufshistorie, Staatsangehörigkeit, IELTS- und Sprachergebnisse sowie Dokumente, die Sie für Ihre Akte hochladen.",
          "Darüber hinaus erheben wir automatisch grundlegende technische Daten — Gerätetyp, Browser, besuchte Seiten und allgemeine Region — zur Pflege und Verbesserung der Website.",
        ],
      },
      {
        heading: "2. How we use it",
        deHeading: "2. Wie wir sie verwenden",
        paragraphs: [
          "Your data is used exclusively to deliver the services you request: counselling, application preparation, communication with embassies, universities or employers, and invoicing.",
          "We may send you relevant updates about your application or services. Marketing messages are only sent with your consent and can be withdrawn at any time.",
        ],
        deParagraphs: [
          "Ihre Daten werden ausschließlich zur Erbringung der von Ihnen angefragten Leistungen verwendet: Beratung, Antragsvorbereitung, Kommunikation mit Botschaften, Universitäten oder Arbeitgebern sowie Rechnungsstellung.",
          "Wir können Ihnen relevante Updates zu Ihrer Bewerbung oder zu unseren Leistungen senden. Werbemitteilungen erfolgen nur mit Ihrer Einwilligung und können jederzeit widerrufen werden.",
        ],
      },
      {
        heading: "3. Sharing",
        deHeading: "3. Weitergabe",
        paragraphs: [
          "We share your data only with parties necessary for your application: the destination embassy or immigration authority, your chosen university or employer, recognised translator or attestation bodies, and our trusted banking and courier partners.",
          "We never sell personal data. Data is shared with partners under confidentiality and only to the extent required for the task.",
        ],
        deParagraphs: [
          "Wir geben Ihre Daten nur an Stellen weiter, die für Ihre Bewerbung notwendig sind: die zuständige Botschaft oder Einwanderungsbehörde, Ihre gewählte Universität oder Ihren Arbeitgeber, anerkannte Übersetzer oder Beglaubigungsstellen sowie vertrauenswürdige Bank- und Kurierpartner.",
          "Wir verkaufen niemals personenbezogene Daten. Die Weitergabe erfolgt vertraulich und nur im erforderlichen Umfang.",
        ],
      },
      {
        heading: "4. Storage and security",
        deHeading: "4. Speicherung und Sicherheit",
        paragraphs: [
          "Your files are stored on encrypted servers with access limited to the team working on your case. Documents older than six months after project completion are archived and later deleted, unless the law requires longer retention.",
          "You may request a copy, correction or deletion of your data at any time by contacting us.",
        ],
        deParagraphs: [
          "Ihre Akten werden auf verschlüsselten Servern gespeichert; Zugriff haben nur die für Ihren Fall zuständigen Teammitglieder. Dokumente werden sechs Monate nach Projektabschluss archiviert und später gelöscht, sofern das Gesetz keine längere Aufbewahrung verlangt.",
          "Sie können jederzeit eine Kopie, Korrektur oder Löschung Ihrer Daten verlangen, indem Sie uns kontaktieren.",
        ],
      },
      {
        heading: "5. Your rights",
        deHeading: "5. Ihre Rechte",
        paragraphs: [
          "You have the right to access your data, correct inaccuracies, withdraw consent for marketing, and request deletion where legally possible. To exercise any of these rights, write to shozani.group@gmail.com with your full name and reference number.",
          "We respond to verified requests within 30 days.",
        ],
        deParagraphs: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Widerruf der Einwilligung für Werbung und — soweit rechtlich möglich — Löschung. Zur Ausübung dieser Rechte schreiben Sie an shozani.group@gmail.com mit vollständigem Namen und Referenznummer.",
          "Wir beantworten verifizierte Anfragen innerhalb von 30 Tagen.",
        ],
      },
      {
        heading: "6. Cookies",
        deHeading: "6. Cookies",
        paragraphs: [
          "We use cookies to keep you logged in, remember your language preference and understand how the site is used. Details and settings are described in our Cookie Policy.",
          "You can disable cookies in your browser at any time; the site will still function, with some convenience features disabled.",
        ],
        deParagraphs: [
          "Wir verwenden Cookies, um Sie angemeldet zu halten, Ihre Sprachpräferenz zu merken und die Nutzung der Website zu verstehen. Details und Einstellungen finden Sie in unserer Cookie-Richtlinie.",
          "Sie können Cookies jederzeit in Ihrem Browser deaktivieren; die Website funktioniert weiterhin, nur einige Komfortfunktionen entfallen.",
        ],
      },
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Cookie Policy",
    deTitle: "Cookie-Richtlinie",
    updated: "Last updated: August 1, 2026",
    deUpdated: "Zuletzt aktualisiert: 1. August 2026",
    sections: [
      {
        heading: "1. What cookies we use",
        deHeading: "1. Welche Cookies wir verwenden",
        paragraphs: [
          "Our website uses a small number of cookies: essential ones (session and language preference), analytics cookies (anonymous usage statistics) and functional ones (chat and form state).",
          "We do not use advertising or profiling cookies on this site.",
        ],
        deParagraphs: [
          "Unsere Website verwendet wenige Cookies: notwendige (Sitzung und Sprachpräferenz), Analyse-Cookies (anonyme Nutzungsstatistiken) und funktionale (Chat- und Formularzustand).",
          "Wir verwenden auf dieser Website keine Werbe- oder Profiling-Cookies.",
        ],
      },
      {
        heading: "2. Essential cookies",
        deHeading: "2. Notwendige Cookies",
        paragraphs: [
          "The language preference cookie remembers whether you chose English or German, so you do not select it on every visit. The session cookie keeps your chat and form progress while you browse.",
        ],
        deParagraphs: [
          "Der Sprachpräferenz-Cookie merkt sich, ob Sie Englisch oder Deutsch gewählt haben, damit Sie es nicht bei jedem Besuch erneut auswählen. Der Sitzungs-Cookie erhält Ihren Chat- und Formularfortschritt.",
        ],
      },
      {
        heading: "3. Analytics cookies",
        deHeading: "3. Analyse-Cookies",
        paragraphs: [
          "Anonymous statistics — page views, approximate country and referral source — help us understand which guides and tools are useful. These reports contain no personal identifiers.",
        ],
        deParagraphs: [
          "Anonyme Statistiken — Seitenaufrufe, ungefähres Land und Verweisquelle — helfen uns zu verstehen, welche Ratgeber und Tools nützlich sind. Diese Berichte enthalten keine personenbezogenen Kennungen.",
        ],
      },
      {
        heading: "4. Managing cookies",
        deHeading: "4. Cookies verwalten",
        paragraphs: [
          "You can delete or block cookies in your browser settings at any time. Blocking essential cookies may disable the language switcher persistence and chat continuity, but core pages remain fully usable.",
        ],
        deParagraphs: [
          "Sie können Cookies jederzeit in den Browsereinstellungen löschen oder blockieren. Das Blockieren notwendiger Cookies kann die Sprachmerkung und die Chat-Kontinuität deaktivieren; die Kernseiten bleiben voll nutzbar.",
        ],
      },
    ],
  },
  "refund-policy": {
    slug: "refund-policy",
    title: "Refund Policy",
    deTitle: "Erstattungsrichtlinie",
    updated: "Last updated: August 1, 2026",
    deUpdated: "Zuletzt aktualisiert: 1. August 2026",
    sections: [
      {
        heading: "1. When a refund applies",
        deHeading: "1. Wann eine Erstattung gilt",
        paragraphs: [
          "You are entitled to a full refund if we cancel a service we agreed to deliver before work starts, or if we cannot begin the agreed work within 60 days for reasons on our side.",
          "No refund is due once the agreed work stage has started, because your documents, consultations and government fees have already been invested.",
        ],
        deParagraphs: [
          "Sie haben Anspruch auf volle Erstattung, wenn wir eine vereinbarte Leistung vor Arbeitsbeginn stornieren oder wenn wir die vereinbarte Arbeit aus Gründen auf unserer Seite nicht innerhalb von 60 Tagen beginnen können.",
          "Keine Erstattung ist geschuldet, sobald die vereinbarte Leistungsstufe begonnen hat, da Ihre Unterlagen, Beratungen und Behördengebühren bereits investiert wurden.",
        ],
      },
      {
        heading: "2. What is never refundable",
        deHeading: "2. Was niemals erstattet wird",
        paragraphs: [
          "Government fees (visa, recognition, medicals, police certificates), third-party fees (university or test fees) and courier or translation costs are never refundable — they are paid to third parties.",
          "Fees for completed milestones (profile evaluation, document compilation, application lodgement) are earned and not refundable.",
        ],
        deParagraphs: [
          "Behördengebühren (Visum, Anerkennung, medizinische Untersuchungen, Führungszeugnis), Gebühren Dritter (Universität oder Tests) sowie Kurier- und Übersetzungskosten sind niemals erstattungsfähig — sie werden an Dritte gezahlt.",
          "Gebühren für abgeschlossene Meilensteine (Profilbewertung, Unterlagenzusammenstellung, Antragseinreichung) sind verdient und nicht erstattungsfähig.",
        ],
      },
      {
        heading: "3. Refund amount calculation",
        deHeading: "3. Berechnung des Erstattungsbetrags",
        paragraphs: [
          "When a refund applies, we calculate the portion based on completed milestones, deducting non-refundable third-party costs. You receive the remaining balance within 30 days, by the same payment method used.",
        ],
        deParagraphs: [
          "Bei einer berechtigten Erstattung berechnen wir den Anteil anhand abgeschlossener Meilensteine und ziehen nicht erstattungsfähige Drittkosten ab. Der Restbetrag wird innerhalb von 30 Tagen über dieselbe Zahlungsmethode ausgezahlt.",
        ],
      },
      {
        heading: "4. How to request a refund",
        deHeading: "4. So beantragen Sie eine Erstattung",
        paragraphs: [
          "Write to shozani.group@gmail.com with your client reference, the service ordered and the reason for the request. Our finance team confirms eligibility within 10 working days and processes approved refunds within the 30-day window.",
        ],
        deParagraphs: [
          "Schreiben Sie an shozani.group@gmail.com mit Ihrer Kundennummer, der beauftragten Leistung und dem Grund der Anfrage. Unser Finanzteam bestätigt die Berechtigung innerhalb von 10 Werktagen und bearbeitet genehmigte Erstattungen innerhalb von 30 Tagen.",
        ],
      },
    ],
  },
};