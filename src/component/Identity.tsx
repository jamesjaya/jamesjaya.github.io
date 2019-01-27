import React, { Component, ReactNode } from "react";
import photo from "../img/photo.jpg";
import "../stylesheet/Identity.css";

class Identity extends Component {
	public render(): ReactNode {
		return (
			<div className="identity">
				<img src={photo} />
				<h1>James Jaya</h1>
				<h2>Software Developer</h2>
			</div>
		);
	}
}

export default Identity;
