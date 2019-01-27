import React, { Component } from "react";
import "../stylesheet/App.css";
import Identity from "./Identity";
import SocialBar from "./SocialBar";

class App extends Component {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="overlay">
						<Identity />
						<SocialBar />
					</div>
				</header>
			</div>
		);
	}
}

export default App;
