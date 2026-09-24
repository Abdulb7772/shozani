export type PlacementQuestion = {
  q: string;
  options: string[];
  answer: number;
  weight: number;
};

export type PlacementTestId = "german" | "ielts" | "pte";

export type PlacementTestConfig = {
  id: PlacementTestId;
  kind: "cefr" | "band" | "pte";
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  resultLabel: string;
  questions: PlacementQuestion[];
};

const germanWeights = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];

export const germanPlacement: PlacementTestConfig = {
  id: "german",
  kind: "cefr",
  eyebrow: "Free Placement Test",
  title: "Where Does Your",
  highlight: "German Stand?",
  intro:
    "12 quick grammar and vocabulary questions — pure German, nothing personal. Your score places you on the CEFR scale from A1 to B2 in 3 minutes.",
  resultLabel: "Your estimated level",
  questions: [
    { q: "Der Kaffee ______ gut.", options: ["ist", "sind", "bin", "seid"], answer: 0, weight: germanWeights[0] },
    { q: "______ kommst du heute?", options: ["Wo", "Wann", "Wer", "Was"], answer: 0, weight: germanWeights[1] },
    { q: "Das ist ______ deutsches Buch.", options: ["eine", "ein", "einen", "einem"], answer: 1, weight: germanWeights[2] },
    { q: "Wir ______ morgen früh nach Berlin.", options: ["fliegt", "fliegen", "fliege", "geflogen"], answer: 1, weight: germanWeights[3] },
    { q: "Ich habe gestern einen Film ______.", options: ["sah", "gesehen", "sehen", "geseht"], answer: 1, weight: germanWeights[4] },
    { q: "Meine Schwester ist älter ______ ich.", options: ["wie", "dann", "als", "so"], answer: 2, weight: germanWeights[5] },
    { q: "Wenn ich Zeit ______, würde ich mehr reisen.", options: ["habe", "hätte", "hatte", "haben"], answer: 1, weight: germanWeights[6] },
    { q: "Er fragte, ob ich ihn nächstes Wochenende ______ kann.", options: ["besuchen", "besucht", "besuche", "besuchtet"], answer: 0, weight: germanWeights[7] },
    { q: "Das Buch, ______ auf dem Tisch liegt, gehört mir.", options: ["die", "das", "der", "dem"], answer: 1, weight: germanWeights[8] },
    { q: "Kaum ______ er die Tür geschlossen, klingelte das Telefon.", options: ["hat", "hatte", "habe", "hätte"], answer: 1, weight: germanWeights[9] },
    { q: "Seiner Meinung ______ ist das Angebot zu teuer.", options: ["von", "nach", "mit", "zu"], answer: 1, weight: germanWeights[10] },
    { q: "Trotz des Regens ______ wir den ganzen Tag spazieren.", options: ["gehen", "gegangen", "gingen", "geht"], answer: 2, weight: germanWeights[11] },
  ],
};

const ieltsWeights = [4.5, 4.5, 4.5, 5.0, 5.0, 5.5, 5.5, 6.0, 6.0, 6.5, 6.5, 7.0];

export const ieltsPlacement: PlacementTestConfig = {
  id: "ielts",
  kind: "band",
  eyebrow: "Free Placement Test",
  title: "Estimate Your",
  highlight: "IELTS Band",
  intro:
    "12 pure English grammar and vocabulary questions — no personal details. Get a realistic starting band (4.0–7.5) before you book the real exam.",
  resultLabel: "Your estimated band",
  questions: [
    { q: "She ______ a doctor.", options: ["are", "is", "am", "be"], answer: 1, weight: ieltsWeights[0] },
    { q: "They ______ to school by bus.", options: ["goes", "going", "went", "go"], answer: 3, weight: ieltsWeights[1] },
    { q: "______ you like tea?", options: ["Does", "Do", "Is", "Are"], answer: 1, weight: ieltsWeights[2] },
    { q: "I have lived here ______ 2015.", options: ["for", "since", "from", "at"], answer: 1, weight: ieltsWeights[3] },
    { q: "She has been working ______ three hours.", options: ["for", "since", "during", "before"], answer: 0, weight: ieltsWeights[4] },
    { q: "He ______ when I saw him.", options: ["was leaving", "leaves", "left", "has left"], answer: 0, weight: ieltsWeights[5] },
    { q: "If it ______ tomorrow, we will cancel the trip.", options: ["will rain", "rained", "rains", "rain"], answer: 2, weight: ieltsWeights[6] },
    { q: "Neither of the answers ______ correct.", options: ["is", "are", "were", "be"], answer: 0, weight: ieltsWeights[7] },
    { q: "The report needs ______ before Friday.", options: ["to submit", "to be submitted", "submitting", "submits"], answer: 1, weight: ieltsWeights[8] },
    { q: "She is the candidate ______ application impressed the panel.", options: ["whom", "which", "whose", "who"], answer: 2, weight: ieltsWeights[9] },
    { q: "Scarcely had he arrived ______ it began to rain.", options: ["when", "than", "that", "then"], answer: 0, weight: ieltsWeights[10] },
    { q: "Not only ______ the cost rise, but quality fell too.", options: ["is", "did", "was", "had"], answer: 1, weight: ieltsWeights[11] },
  ],
};

const pteWeights = [45, 45, 50, 55, 55, 55, 60, 60, 65, 65, 70, 75];

export const ptePlacement: PlacementTestConfig = {
  id: "pte",
  kind: "pte",
  eyebrow: "Free Placement Test",
  title: "Check Your",
  highlight: "PTE Readiness",
  intro:
    "12 pure English grammar and vocabulary questions — no personal details. Get an estimated PTE score range before you pay for the real test.",
  resultLabel: "Your estimated score",
  questions: [
    { q: "______ is a beautiful city.", options: ["This", "These", "Those", "They"], answer: 0, weight: pteWeights[0] },
    { q: "He works ______ a hospital.", options: ["at", "on", "in", "from"], answer: 2, weight: pteWeights[1] },
    { q: "We ______ watching the news now.", options: ["is", "are", "am", "be"], answer: 1, weight: pteWeights[2] },
    { q: "She has ______ to London twice.", options: ["gone", "been", "went", "go"], answer: 1, weight: pteWeights[3] },
    { q: "I look forward to ______ from you.", options: ["hear", "hearing", "heard", "hears"], answer: 1, weight: pteWeights[4] },
    { q: "The exam was ______ difficult than I expected.", options: ["more", "most", "much", "very"], answer: 0, weight: pteWeights[5] },
    { q: "Unless you study, you ______ pass.", options: ["won't", "wouldn't", "don't", "didn't"], answer: 0, weight: pteWeights[6] },
    { q: "Each of the students ______ a laptop.", options: ["have", "has", "are", "having"], answer: 1, weight: pteWeights[7] },
    { q: "______ the bad weather, the match continued.", options: ["Although", "Despite", "Because", "However"], answer: 1, weight: pteWeights[8] },
    { q: "The report must ______ by Friday.", options: ["submit", "be submitted", "submitting", "submits"], answer: 1, weight: pteWeights[9] },
    { q: "The company's profits, ______ have been falling, worry investors.", options: ["whose", "who", "which", "that"], answer: 2, weight: pteWeights[10] },
    { q: "By 2030, the population ______ doubled.", options: ["will have", "has", "is", "was"], answer: 0, weight: pteWeights[11] },
  ],
};

export const placementTests: Record<PlacementTestId, PlacementTestConfig> = {
  german: germanPlacement,
  ielts: ieltsPlacement,
  pte: ptePlacement,
};