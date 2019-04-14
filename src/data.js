const lessons = [
  {
    "id": 1,
    "topic": "General",
    "regex": "//",
    "instructions": "A regular expression is a set of characters that define a search pattern. At first they may look like nonsense, but after this course you'll be able to read them and know exactly what they're searching for.\n\nThe inspiration for this course comes from practicing string manipulation, where I've found myself in a situation where I've recognized that a regular expression (or regex) would be extremely useful, but I didn't have the knowledge to write my own.\n\nRegular expressions work across programming languages, so you will not need to relearn them when transitioning to another language. Imagine trying to find every occurance of an email address in a document, but an email address can have any number of characters, some symbols, and domain names. This is where regular expressions become very powerful, since they are extremely dynamic.\n\nA regular expression is defined by two //, with the desired sequence in between and is made of two parts, the body and the flags, which are optional and come after the second /. So, the regular expression /example/ will find exactly the word \"example\", but not \"Example\", just like the find feature you might see in your web browser. This is where we will start",
    "prompt": "Find the word Turing",
    "cases": ["Turing"],
    "solutions": [true]
  },
  {
    "id": 2,
    "topic": "Character Classes",
    "regex": "\\d, \\D",
    "instructions": "Finds a single occurance of any digit 0-9 or non-digit, respectively.",
    "prompt": "Find any dates of the format dd/dd/dddd, where d can be any digit between zero and nine",
    "cases": ["06/22/1995", "06/24/1963", "8/9/1996", "April 14, 2019", "1995/06/22"],
    "solutions": [true, true, false, false, false]
  },
  {
    "id": 3,
    "topic": "Character Classes",
    "regex": "\\w, \\W",
    "instructions": "Finds a single occurance of any work character or non-work character, respectively. A work character is: a letter, digit, or _",
    "prompt": "Find the url https://www.turing.io",
    "cases": ["https://www.turing.io/", "https://google.com"],
    "solutions": [true, false]
  },
  {
    "id": 4,
    "topic": "Character Classes",
    "regex": "\\s, \\S",
    "instructions": "Finds a single occurance of any white-space or non-white-space character, respectively. A letter, digit, or _",
    "prompt": "Find a set of 5 two-digit numbers separated by a space",
    "cases": ["85 52 91 67 75", "1 2 3 4 5", "8552 91 67 75", "1234567890", "11 12 13 14 15"],
    "solutions": [true, false, false, false, true]
  },
  {
    "id": 5,
    "topic": "Anchors",
    "regex": "^",
    "instructions": "Used at the start of a regular expression to denote that the string starts with that expression",
    "prompt": "Find any three-digit number that start with 1",
    "cases": ["100", "111", "200", "300", "157", "187", "110", "22", "101", "199", "999"],
    "solutions": [true, true, false, false, true, true, true, false, true, true, false]
  },
  {
    "id": 6,
    "topic": "Anchors",
    "regex": "$",
    "instructions": "Used at the end of a regular expression to denote that the string ends with that expression",
    "prompt": "Find any six-letter word that end with -ing",
    "cases": ["Turing", "eating", "movie", "software", "joking", "computer"],
    "solutions": [true, true, false, false, true, false]
  },
  {
    "id": 7,
    "topic": "Character Sets",
    "regex": "[]",
    "instructions": "Used to denote any specific set of characters in the search. For example, [abcdef] would match any letter a, b, c, d, e, or f",
    "prompt": "Check to see if the ",
    "cases": [],
    "solutions": []
  },
  {
    "id": 8,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 9,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 10,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 11,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 12,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 13,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 14,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 15,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 16,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 17,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 18,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 19,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 20,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 21,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 22,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 23,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 24,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 25,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 26,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 27,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 28,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 29,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  },
  {
    "id": 30,
    "topic": "",
    "regex": "",
    "instructions": "",
    "prompt": "",
    "cases": [],
    "solutions": []
  }
]

export default lessons;