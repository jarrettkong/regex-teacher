const lessons = [
  {
    "id": 1,
    "topic": "General",
    "regex": "//",
    "instructions": "Finds exactly what is between the //",
    "prompt": "Find the word Turing",
    "examples": ["Turing School of Software and Design"],
    "solutions": ["Turing"]
  },
  {
    "id": 2,
    "topic": "Character Classes",
    "regex": "\\d, \\D",
    "instructions": "Finds a single occurance of any digit 0-9 or non-digit, respectively.",
    "prompt": "Find any dates in the following text",
    "examples": ["I was born on 06/22/1995 and my father was born on 06/24/1963"],
    "solutions": ["06/22/1995", "06/24/1963"]
  },
  {
    "id": 3,
    "topic": "Character Classes",
    "regex": "\\w, \\W",
    "instructions": "Finds a single occurance of any work character or non-work character, respectively. A work character is: a letter, digit, or _",
    "prompt": "Find the url in the folling text",
    "examples": ["The cirriculum for the front-end program can be found at  https://frontend.turing.io/"],
    "solutions": ["https://www.turing.io/"]
  },
  {
    "id": 4,
    "topic": "Character Classes",
    "regex": "\\s, \\S",
    "instructions": "Finds a single occurance of any white-space or non-white-space character, respectively. A letter, digit, or _",
    "prompt": "Find all of Max's test scores as one match",
    "examples": ["Max: 85 52 91 67 75"],
    "solutions": ["85 52 91 67 75"]
  },
  {
    "id": 5,
    "topic": "Anchors",
    "regex": "^",
    "instructions": "Used at the start of a regular expression to denote that the string starts with that expression",
    "prompt": "Find all two digit numbers that start with 2",
    "examples": ["10", "12", "27", "14", "16", "18", "20", "22", "11", "13", "15"],
    "solutions": ["27", "20", "22"]
  },
  {
    "id": 6,
    "topic": "Anchors",
    "regex": "$",
    "instructions": "Used at the start of a regular expression to denote that the string starts with that expression",
    "prompt": "Find all words that end with -ing",
    "examples": ["Turing", "eating", "movie", "software", "joking", "computer"],
    "solutions": ["Turing", " "]
  },
  {
    "id": 7,
    "topic": "Character Sets",
    "regex": "[]",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 8,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 9,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 10,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 11,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 12,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 13,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 14,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 15,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 16,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 17,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 18,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 19,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 20,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 21,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 22,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 23,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 24,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 25,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 26,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 27,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 28,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 29,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  },
  {
    "id": 30,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "examples": [],
    "solutions": []
  }
]

export default lessons;