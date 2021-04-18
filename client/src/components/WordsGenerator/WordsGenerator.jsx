import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import UserInput from "./UserInput/UserInput";
import WordsTable from "./WordsTable/WordsTable";
import { getTopTenWordsService } from "../../services/services";

const WordsGenerator = () => {
	const [sequence, setSequence] = useState("");
	const [tableData, setTableData] = useState([]);

	const handleSequenceChange = (event) => {
		setSequence(event.target.value);
	};

	const handleGetTopWords = async () => {
		const topTenWords = await getTopTenWordsService(sequence);
		setTableData(topTenWords);
	};

	return (
		<Container>
			<UserInput
				handleSequenceChange={handleSequenceChange}
				handleGetTopWords={handleGetTopWords}
			/>
			<WordsTable tableData={tableData} />
		</Container>
	);
};

export default WordsGenerator;
