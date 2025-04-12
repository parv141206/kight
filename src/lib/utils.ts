const commonMistakes = [
  { correct: "ie", wrong: "ei" },
  { correct: "ei", wrong: "ie" },
  { correct: "ance", wrong: "ence" },
  { correct: "ence", wrong: "ance" },
  { correct: "able", wrong: "ible" },
  { correct: "ible", wrong: "able" },
  { correct: "cc", wrong: "c" },
  { correct: "mm", wrong: "m" },
  { correct: "tt", wrong: "t" },
  { correct: "ss", wrong: "s" },
];

function subtlyCorrupt(word: string): string {
  for (const { correct, wrong } of commonMistakes) {
    if (word.includes(correct)) {
      return word.replace(correct, wrong);
    }
  }

  const swapIndex = Math.floor(Math.random() * (word.length - 1));
  const arr = word.split("");
  [arr[swapIndex], arr[swapIndex + 1]] = [arr[swapIndex + 1], arr[swapIndex]];
  return arr.join("");
}

export function generateOptions(correct: string): string[] {
  const mistakes = new Set<string>();
  let attempts = 0;
  const maxAttempts = 100;

  while (mistakes.size < 3 && attempts < maxAttempts) {
    const wrong = subtlyCorrupt(correct);
    if (wrong !== correct && wrong.length > 2) {
      mistakes.add(wrong);
    }
    attempts++;
  }

  if (mistakes.size < 3) {
    for (let i = mistakes.size; i < 3; i++) {
      const fallback = correct
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
      if (fallback !== correct) {
        mistakes.add(fallback);
      } else {
        mistakes.add(correct + "x");
      }
    }
  }

  return [...mistakes, correct].sort(() => Math.random() - 0.5);
}

export const words = [
  "separate",
  "difference",
  "definitely",
  "receive",
  "achieve",
  "believe",
  "ceiling",
  "conceive",
  "perceive",
  "siege",
  "accommodate",
  "occurrence",
  "recommend",
  "commission",
  "committee",
  "possession",
  "profession",
  "address",
  "embarrass",
  "harass",
  "immediately",
  "necessary",
  "occasion",
  "vacuum",
  "rhythm",
  "experience",
  "reference",
  "preference",
  "existence",
  "absence",
  "confidence",
  "independence",
  "intelligence",
  "excellence",
  "silence",
  "dependable",
  "comfortable",
  "visible",
  "terrible",
  "possible",
  "responsible",
  "incredible",
  "noticeable",
  "knowledgeable",
  "changeable",
  "argument",
  "maintenance",
  "occurrence",
  "indispensable",
  "pronunciation",
  "government",
  "environment",
  "conscience",
  "conscious",
  "guarantee",
  "liaison",
  "category",
  "privilege",
  "millennium",
  "transferred",
  "acceptable",
  "accessible",
  "accidentally",
  "acknowledgment",
  "calendar",
  "committed",
  "deductible",
  "discipline",
  "equipment",
  "existence",
  "foreign",
  "grateful",
  "height",
  "humorous",
  "independent",
  "innocence",
  "irresistible",
  "jewellery",
  "judgment",
  "leisure",
  "library",
  "lightning",
  "maintenance",
  "miniature",
  "mischievous",
  "noticeable",
  "occasionally",
  "optimism",
  "parliament",
  "perseverance",
  "possession",
  "preferred",
  "questionnaire",
  "repetition",
  "schedule",
  "seize",
  "threshold",
  "tomorrow",
  "twelfth",
  "unforeseen",
  "argumentative",
  "bizarre",
  "broccoli",
  "category",
  "cemetery",
  "colleague",
  "commercial",
  "committee",
  "convenience",
  "courteous",
  "deceive",
  "desperate",
  "dilemma",
  "disappear",
  "efficient",
  "emphasize",
  "endeavour",
  "entrepreneur",
  "familiar",
  "fascinate",
  "forfeit",
  "forty",
  "hindrance",
  "hypocrisy",
  "idiosyncrasy",
  "imminent",
  "indictment",
  "inoculate",
  "irritable",
  "jealousy",
  "legible",
  "likelihood",
  "maintenance",
  "manageable",
  "neighbour",
  "noticeably",
  "occasioned",
  "pastime",
  "persistent",
  "playwright",
  "possessive",
  "prejudiced",
  "pronunciation",
  "pseudonym",
  "reliable",
  "resistance",
  "restaurant",
  "rhythmically",
  "sergeant",
  "threshold",
  "acquaintance",
  "aggressive",
  "allegiance",
  "amateur",
  "anxiety",
  "apology",
  "applicable",
  "apprehension",
  "arbitrary",
  "asthma",
  "auxiliary",
  "balloon",
  "benefited",
  "camouflage",
  "cancellation",
  "carriage",
  "chandelier",
  "collapsible",
  "colonel",
  "compassionate",
  "complement",
  "compliment",
  "convenient",
  "crystallize",
  "cylindrical",
  "deceitful",
  "deficiency",
  "difficulties",
  "discourage",
  "efficiency",
  "eliminate",
  "enthusiastic",
  "equipped",
  "exaggerate",
  "exhilarate",
  "fictitious",
  "flexible",
  "fluorescent",
  "formidable",
  "frivolous",
  "gauge",
  "generosity",
  "hygiene",
  "illegible",
  "imagination",
  "inevitable",
  "innumerable",
  "interrupt",
  "irregular",
  "justice",
  "Assistance",
  "Pollution",
  "Illustration",
  "Maintain",
  "Disease",
  "Statement",
  "Opportunities",
  "Mechanism",
  "Circumstances",
  "exception",
  "astonished",
  "Jealous",
  "Tourist",
  "Quarrel",
  "Fiery",
  "Continue",
  "Impatient",
  "Appeal",
  "Recommend",
  "Struggle",
  "Banish",
  "Daughter",
  "Ambitious",
  "Engage",
  "Fertile",
  "Cunning",
  "Between",
  "Favourite",
  "Seige",
  "Thinner",
  "Radiant",
  "Grateful",
  "Appreciation",
  "Bureaucracy",
  "Colleague",
  "Emergency",
  "Museum",
  "Misspell",
  "Necessary",
  "Symmetry",
  "Vocabulary",
  "Temporary",
  "Consciousness",
  "Foreign",
  "Courageous",
  "Feathers",
  "Herbivorous",
  "Interfere",
  "Fluorescent",
  "Enthusiastic",
  "Government", // 51
  "Haemorrhage", // 52
  "Lieutenant", // 53
  "Jewellery", // 54
  "Committee", // 55
  "Immediately", // 56
  "Architecture", // 57
  "Occasionally", // 58
  "Assassinate", // 59
  "Embezzle", // 60
  "Exaggerate", // 61
  "Maintenance", // 62
  "Psychology", // 63
  "Resemblance", // 64
  "Questionnaire", // 65
  "Secretary", // 66
  "Vacuum", // 67
  "Deceive", // 68
  "Severely", // 69
  "Dialogue", // 70
  "Temporarily", // 71
  "Twelfth", // 72
  "Auditorium", // 73
  "Genuine", // 74
  "Professor", // 75
  "Neighbouring", // 76
  "Address", // 77
  "Already", // 78
  "Allergy", // 79
  "Committee", // 80
  "Temporary", // 81
  "Grammar", // 82 ❌ (actually **"Grammar"** is correct)
  "tomorrow", // 83
  "program", // 84
  "color", // 85
  "forty", // 86
  "paedophile", // 87
];
