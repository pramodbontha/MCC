# MCC

# Scrabble solver

## Task description

- The goal is to write a digital assistant for you next game of [Scrabble](https://en.wikipedia.org/wiki/Scrabble)
- The user provides a series of letters and the app generates valid words using a subset of those letters
- Create an API that generates possible words from those letters and calculates their score. It also includes their definition from https://dictionaryapi.dev
- In the frontend, display the top 10 scoring words sorted by total points and word length and the description for the top 5 scoring words
- On screens above 800px, display the attached header image on top of the page
- Have **fun** and make it beautiful!

## Resources

- https://dictionaryapi.dev
- Headerimage for desktop: _header.png_
- Word list: provided as _words.json_
- Score list for each letter: provided as _scores.json_


## Frontend - client
The frontend is implemented using ReactJs. 
To start the application, run the following commands:
```
cd client
npm i
npm start
```

## Backend - api-gateway

It is implemented using Nodejs and Expressjs. 
To start the server, run the following commands:
```
cd api
npm i
npm start
```
