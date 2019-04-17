# Learn Regex

A site for users to learn regular expressions and test their own against a custom input.

## About

This project was inspired by limited resources on regular expressions online, and my own personal experience of noticing situations where regular expressions would have been useful but I lacked the knowledge to implement them myself. Moreover, they are a subject that is not often taught at software schools, and it's something I've become very interested in. The app has two main sections, a Learn part and a Sandbox mode. The Learn part is a complete lesson on regular expressions, starting from the basics and ending with validation. Sandbox mode is an area where users can add their own text, and use a regular expression against that text to test that it is working as intended. The project was to practice React and using the fetch API with Sass. It has an implementation of React Router as well to implement distinct area.

![](https://i.imgur.com/LP6hdA6.png)
![](https://i.imgur.com/zl8GZIy.png)
![](https://i.imgur.com/sXppJro.png)

## APIs

A custom lesson plan JSON dataset that I made and is hosted on the Turing School servers.

## Installation

Clone the project at https://github.com/jarrettkong/regex-teacher/, and run `npm install` in the directory to install all necessary dependencies. From there, use `npm start` to start the program. Navigate to `localhost:3000` and you can start using.

## Next Features

- Update CSS styles for the Sandbox
- Fix minor typos in the lesson plan
- Add support for regex groups in Sandbox mode, instead of just full matches.