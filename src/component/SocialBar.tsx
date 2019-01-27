import React, { Component, ReactNode } from "react";
import "../stylesheet/SocialBar.css";
import { SocialPlatform } from "../util/SocialPlatform";
import SocialIcon from "./SocialIcon";

class SocialBar extends Component {
	public render(): ReactNode {
		return (
			<div className="social-bar">
				<SocialIcon platform={SocialPlatform.Linkedin} />
				<SocialIcon platform={SocialPlatform.Instagram} />
				<SocialIcon platform={SocialPlatform.Facebook} />
				<SocialIcon platform={SocialPlatform.Email} />
				<SocialIcon platform={SocialPlatform.Resume} />
			</div>
		);
	}
}

export default SocialBar;
