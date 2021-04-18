import React from "react";
import "./UserInput.css";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";

const UserInput = (props) => {
	return (
		<Paper className="userInput" elevation={3}>
			<Typography variant="h5" gutterBottom>
				User Input
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={7}>
					<TextField
						id="sequence-input"
						label="Sequence"
						variant="outlined"
						placeholder="Enter sequence here.."
						className="sequenceInput"
						onChange={props.handleSequenceChange}
					/>
				</Grid>
				<Grid item xs={5}>
					<Button
						variant="contained"
						color="primary"
						size="large"
						onClick={(e) => props.handleGetTopWords()}
					>
						Get Top words
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default UserInput;
