import React from "react";
import "./WordsTable.css";
import { withStyles } from "@material-ui/core/styles";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#3f51b5",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const WordsTable = (props) => {
	return (
		<Paper className="wordsTable" elevation={3}>
			<Typography variant="h5" gutterBottom>
				Top 10 scoring words
			</Typography>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>Word</StyledTableCell>
							<StyledTableCell>Score</StyledTableCell>
							<StyledTableCell>Description</StyledTableCell>
							<StyledTableCell>Word Length</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.tableData.length
							? props.tableData.map((row, i) => (
									<TableRow key={row.word}>
										<TableCell component="th" scope="row">
											{row.word}
										</TableCell>
										<TableCell>{row.score}</TableCell>
										<TableCell>{row.definition}</TableCell>
										<TableCell>{row.word.length}</TableCell>
									</TableRow>
							  ))
							: null}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default WordsTable;
