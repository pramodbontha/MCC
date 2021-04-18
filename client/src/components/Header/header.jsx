import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
// import logo from "../../assets/header.png";

const Header = () => {
	return (
		<div>
			<AppBar>
				<Toolbar>
					<Typography variant="h6">Scrabble solver</Typography>
					{/* <img src={logo} width="100px" height="50px" /> */}
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
};

export default Header;
