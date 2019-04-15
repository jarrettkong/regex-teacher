const lessons = [
  {
    "id": 1,
    "topic": "General",
    "syntax": "//",
    "instructions": "A regular expression is a set of characters that define a search pattern. At first they may look like nonsense, but after this course you'll be able to read them and know exactly what they're searching for.\n\nThe inspiration for this course comes from practicing string manipulation, where I've found myself in situations recognizing that a regular expression (or syntax) would be extremely useful, but I didn't have the knowledge to write my own.\n\nRegular expressions work across programming languages, so you will not need to relearn them when transitioning to another language. Imagine trying to find every occurance of an email address in a document, but an email address can have any number of characters, some symbols, and domain names. This is where regular expressions become very powerful, since they are extremely dynamic.\n\nA regular expression is defined by two //, with the desired sequence in between and is made of two parts, the body and the flags, which are optional and come after the ending /. So, the regular expression /example/ will find exactly the word \"example\", but not \"Example\", just like the find feature you might see in your web browser.",
    "problem": "Find the word Turing",
    "cases": ["Turing"],
    "solutions": [true]
  },
  {
    "id": 2,
    "topic": "Character Classes",
    "syntax": "\\d, \\D",
    "instructions": "Finds a single occurance of any digit 0-9 or non-digit, respectively.",
    "problem": "Find any dates of the format dd/dd/dddd, where d can be any digit between zero and nine",
    "cases": ["06/22/1995", "06/24/1963", "8/9/1996", "April 14, 2019", "1995/06/22"],
    "solutions": [true, true, false, false, false]
  },
  {
    "id": 3,
    "topic": "Character Classes",
    "syntax": "\\w, \\W",
    "instructions": "Finds a single occurance of any work character or non-work character, respectively. A work character is: a letter, digit, or _.",
    "problem": "Find both https://frontend.turing.io/ and https://backend.turing.io",
    "cases": ["https://frontend.turing.io/", "https://backend.turing.io/"],
    "solutions": [true, true]
  },
  {
    "id": 4,
    "topic": "Character Classes",
    "syntax": "\\s, \\S",
    "instructions": "Finds a single occurance of any white-space or non-white-space character, respectively. A white-space character is: space, new line.",
    "problem": "Find a set of 5 two-digit numbers separated by a space",
    "cases": ["85 52 91 67 75", "1 2 3 4 5", "8552 91 67 75", "1234567890", "11 12 13 14 15"],
    "solutions": [true, false, false, false, true]
  },
  {
    "id": 5,
    "topic": "Anchors",
    "syntax": "^",
    "instructions": "Used at the start of a regular expression to denote that the string starts with that expression.",
    "problem": "Find any three-digit number that start with 1",
    "cases": ["100", "111", "200", "300", "157", "187", "110", "22", "101", "199", "999"],
    "solutions": [true, true, false, false, true, true, true, false, true, true, false]
  },
  {
    "id": 6,
    "topic": "Anchors",
    "syntax": "$, \\Z",
    "instructions": "Used at the end of a regular expression to denote that the string ends with that expression.",
    "problem": "Find any six-letter word that end with -ing",
    "cases": ["Turing", "eating", "movie", "software", "joking", "computer"],
    "solutions": [true, true, false, false, true, false]
  },
  {
    "id": 7,
    "topic": "Anchors",
    "syntax": "^, $",
    "instructions": "Used to denote the start and end of a string.",
    "problem": "Find all 10s between and including 200 and 300 (ie. 210, 220, etc).",
    "cases": [200, 201, 210, 212, 220, 223, 230, 234, 240, 245, 250, 256, 260, 267, 270, 278, 280, 289, 290, 299, 300],
    "solutions": [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, false]
  },
  {
    "id": 8,
    "topic": "Character Sets",
    "syntax": "[]",
    "instructions": "Used to denote any specific set of characters in the search. For example, [abcdef] would match any letter a, b, c, d, e, or f. Characters that normally need to be escaped with \\ do not need to inside a set.",
    "problem": "Check to see if character is a vowel ",
    "cases": ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    "solutions": [true, false, false, false, true, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false]
  },
  {
    "id": 9,
    "topic": "Quantifiers",
    "syntax": "{n}",
    "instructions": "Checks if the previous character or group repeats n amount of times. For example, /\\d{10}/ checks for a string of 10 digits.",
    "problem": "Find any numbers that are 5 digits long, start with 1, and end with 9.",
    "cases": [10009, 20159, 80203, 93001, 51908, 17929, 17399, 10000],
    "solutions": [true, false, false, false, false, true, true, false]
  },
  {
    "id": 10,
    "topic": "Quantifiers",
    "syntax": "{n,}, +, *",
    "instructions": "Checks if the previous character or group repeats at least n amount of times. It's important to note that {,m} does not mean at most m times, however. The quanitifier + is equivalent to {1,} and * is equivalent to {0,}",
    "problem": "Check if a number is at least 6 digits long.",
    "cases": [1000000, 111111, 123, 88, 17523523, 6482, 48539852, 58352, 643852923954830523],
    "solutions": [true, true, false, false, true, false, true, false, true]
  },
  {
    "id": 11,
    "topic": "Quantifiers",
    "syntax": "{n,m}",
    "instructions": "Checks if the previous character or group repeats at least n amount of times.",
    "problem": "Check if a number is at least 6 digits long and less than 7 digits.",
    "cases": [1000000, 111111, 123, 88, 17523523, 6482, 48539852, 58352, 643852923954830523],
    "solutions": [true, true, false, false, false, false, false, false, false]
  },
  {
    "id": 12,
    "topic": "Anchors",
    "syntax": "\\b, \\B",
    "instructions": "Finds a single occurance of any word boundary or non-word boundary, respectively. A work boundary is rather vague, but here are some rules. A word boundary can be 1. Before the start of a string, if the first character is a word character (\\w), after the ending character of the string, if the last character is a word character, or between two characters in the string, where one is a word character and the other is not.",
    "problem": "Find all standalone occurances of the word Turing (ie. it comes either at the start/end of the string or is surrounded by spaces).",
    "cases": ["Turing", "TuringSchool", "I go to Turing", "turing", "-00Turing00-"],
    "solutions": [true, false, true, false, false]
  },
  {
    "id": 13,
    "topic": "Ranges",
    "syntax": "[a-z]",
    "instructions": "When used inside a chracter set, the - symbolizes a range. For example, [a-z] would mean either a, z, or any letter in between, whereas [a-q] means only letters between and including a and q. This also works for numbers.",
    "problem": "The number 4 is bad luck in China. Check to see if a number has any 4's. These numbers can be up to 4 digits long",
    "cases": [4, 44, 444, 4444, 5464, 23, 1, 4293, 2234, 1832, 22, 123, 4325],
    "solutions": [false, false, false, false, false, true, true, false, false, true, true, true, false]
  },
  {
    "id": 14,
    "topic": "Groups",
    "syntax": "()",
    "instructions": "Groups allow you to specify clusters of characters to then test by. For example, if you're proofreading a paper, you might use the expression /(the\\s){2,}\\b/, which would check if the word 'the' is accidentally typed more than once.",
    "problem": "If you've done the Codewars problem Dubstep, this problem will look familiar. Write a regular expression that checks if a string has at least once occurance of the word WUB. These can be sequential occurances or separated. They can also be at the beginning or end of a word. The test case cannot just include instances of the letters W, U, and B.",
    "cases": ["AWUWBC", "AWUBBWUBC", "AWUBWUBWUBBWUBWUBWUBC", "WUBAWUBBWUBCWUB", "dsafkjsdfasd;lfsadj"],
    "solutions": [false, true, true, true, false]
  },
  {
    "id": 15,
    "topic": "Assertions",
    "syntax": "?=",
    "instructions": "This is a positive lookahead assertion, part of an expression category called lookarounds. This functions by being placed inside a group, then whatever follows the ?= is what's being looked for. For example, A(?=B) looks for A followed by B",
    "problem": "Given the string 'foobarbarfoo', find the first 'bar' using a positive lookahead",
    "cases": ["foobarbarfoo", "barbar"],
    "solutions": [true, false]
  },
  {
    "id": 16,
    "topic": "Assertions",
    "syntax": "?!",
    "instructions": "This is a negative lookahead assertion, part of an expression category called lookarounds. This functions by being placed inside a group, then whatever follows the ?! is what's being looked for. For example, A(?!B) looks for A not followed by B",
    "problem": "Given the string 'foobarbarfoo', find the second 'bar' using a negative lookahead",
    "cases": ["foobarbarfoo", "barfoo"],
    "solutions": [true, false]
  },
  {
    "id": 17,
    "topic": "Assertions",
    "syntax": "?<!",
    "instructions": "This is a negative lookbehind assertion, part of an expression category called lookarounds. This functions by being placed inside a group, then whatever follows the ?<! is what's being looked for. For example, A(?<!B) looks for A not preceeded by B",
    "problem": "Given the string 'foobarbarfoo', find the second 'bar' using a negative lookbehind",
    "cases": ["foobarbarfoo", "foobar"],
    "solutions": [true, false]
  },
  {
    "id": 18,
    "topic": "Assertions",
    "syntax": "?<=",
    "instructions": "This is a positive lookbehind assertion, part of an expression category called lookarounds. This functions by being placed inside a group, then whatever follows the ?<= is what's being looked for. For example, A(?<=B) looks for A preceeded by B",
    "problem": "Given the string 'foobarbarfoo', find the first 'bar' using a positive lookbehind",
    "cases": ["foobarbarfoo", "barbar"],
    "solutions": [true, false]
  },
  {
    "id": 19,
    "topic": "Flags",
    "syntax": "i",
    "instructions": "Flags go at the end of a regular expression after the ending /. They specify special cases for the pattern. The i flag ignores case. So [a-z] is the same as [A-Z], for instance.",
    "problem": "Check if a letter is a vowel, regardless of case.",
    "cases": ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u", "r", "s", "T", ],
    "solutions": [true, true, true, true, true, true, true, true, true, true, false, false, false]
  },
  {
    "id": 20,
    "topic": "Validation: Email Address",
    "syntax": "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    "instructions": "Email addresses can be long and complicated. For example, the syntax that the W3C uses for it's <input type=\"email\" /> elements is the one listed in this lesson. This includes every possible ASCII charcter that is techincally allowed in an email address, but most email providers limit the special characters that they allow.",
    "problem": "Write a regular expression that can find any email of the following format: The email starts with a letter and can contain _ and -. It will have a domain name that can include - and will end in either .io, .org, or .com.",
    "cases": ["turing_123@turing.io", "thatpamiam@gmail.com", "hello-world@computer-science.org", "failure@test.co.uk"],
    "solutions": [true, true, true, false]
  },
  {
    "id": 21,
    "topic": "Validation: Password",
    "syntax": "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
    "instructions": "Passwords are some of the most difficult things to validate, and only partially because of the sheer amount of different characters that are involved. Unlike emails, passwords do not have a predictable format and the amount of accepted characters is greatly increased. Rather, there are usually restrictions on the number of characters, and the inclusion or exclusion of certain types of characters. The syntax given in this lesson is for a password of minimum 8 characters that includes at least one uppercase letter, one lowercase letter, and one number, and one special character.",
    "problem": "Write a regular expression that checks if a password has one uppercase letter, one lowercase letter, one number, and at least 10 characters",
    "cases": ["Turing123!", "password", "ThisWorks99"],
    "solutions": [true, false, true]
  },
]

export default lessons;