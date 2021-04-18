import axios from "axios";

export const getTopTenWordsService = (sequence) => {
	return axios
		.get("http://localhost:5000/wordgenerator/topTenWords/" + sequence)
		.then((res) => res.data);
};
