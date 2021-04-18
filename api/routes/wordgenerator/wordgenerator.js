var express = require("express");
var router = express.Router();
var scores = require("./json_files/scores.json");
var words = require("./json_files/words.json");
var axios = require("axios");

const mapCharacterToValue = () => {
	let characterValue = {};
	scores.forEach((el) => {
		characterValue[el.letter] = el.value;
	});
	return characterValue;
};

router.get("/topTenWords/:sequence", async (req, res, next) => {
	const sequence = req.params.sequence;
	const possibleCombinations = getAllCombinations(sequence);
	const filteredWords = getFilteredWords(possibleCombinations);
	const wordsWithScores = getScoresForWords(filteredWords);
	const wordsWithDefinitions = await getDefinitionForWords(wordsWithScores);
	res.send(wordsWithDefinitions);
});

const getAllCombinations = (s) => {
	var buff = [];
	var res = [];
	for (i = 0; i < s.length; i++) {
		buff = [s[i]];
		var index = 0;
		while (res[index]) {
			buff.push("" + res[index] + s[i]);
			index++;
		}
		res = res.concat(buff);
	}
	return [...new Set(res)];
};

const getFilteredWords = (possibleCombinations) => {
	const filteredWords = possibleCombinations.filter(
		(word) => words.indexOf(word) !== -1
	);
	return filteredWords;
};

const getScoresForWords = (filteredWords) => {
	const characterValue = mapCharacterToValue();
	let scoresForWords = [];
	for (const word of filteredWords) {
		let score = 0;
		for (const index in word) {
			score += characterValue[word[index].toUpperCase()];
		}
		scoresForWords.push({ word: word, score: score });
	}
	scoresForWords.sort((a, b) =>
		a.score < b.score ? 1 : b.score < a.score ? -1 : 0
	);
	scoresForWords =
		scoresForWords.length >= 10 ? scoresForWords.slice(0, 10) : scoresForWords;
	return scoresForWords;
};

const getDefinitionForWords = async (wordsWithScores) => {
	let wordsWithDefinitions = [];
	const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
	for (const wordWithScore of wordsWithScores) {
		await axios
			.get(url + wordWithScore.word)
			.then((res) => {
				wordWithScore["definition"] =
					res.data[0].meanings[0].definitions[0].definition;
				wordsWithDefinitions.push(wordWithScore);
			})
			.catch((err) => {
				wordWithScore["definition"] = err.response.data.title;
				wordsWithDefinitions.push(wordWithScore);
			});
	}
	return wordsWithDefinitions;
};

module.exports = router;
