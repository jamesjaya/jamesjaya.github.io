import React, { Component, CSSProperties, ReactNode } from "react";
import "../stylesheet/SocialIcon.css";
import { SocialPlatform } from "../util/SocialPlatform";

interface ISocialIconProps {
	platform: SocialPlatform;
}

interface IconSpecs {
	iconName: string;
	url: string;
}

class SocialIcon extends Component<ISocialIconProps> {
	public render(): ReactNode {
		const specs = this.specs();

		return (
			<a
				href={specs.url}
				className={"icon " + this.props.platform}
				target="_blank">
				<i
					className={"fa " + specs.iconName}
					aria-hidden="true">
				</i>
			</a>
		);
	}

	private specs(): IconSpecs {
		switch (this.props.platform) {
			case SocialPlatform.Linkedin:
				return {
					iconName: "fa-linkedin-square",
					url: "https://www.linkedin.com/in/jamesjaya",
				};
			case SocialPlatform.Instagram:
				return {
					iconName: "fa-instagram",
					url: "https://www.instagram.com/jamesjaya",
				};
			case SocialPlatform.Facebook:
				return {
					iconName: "fa-facebook-square",
					url: "https://www.facebook.com/james.jaya",
				};
			case SocialPlatform.Email:
				return {
					iconName: "fa-envelope",
					url: "mailto:me@jamesjaya.com",
				};
			case SocialPlatform.Resume:
				return {
					iconName: "fa-file-text-o",
					url: "file/james.pdf",
				};
			default:
				return {
					iconName: "fa-linkedin-square",
					url: "https://www.linkedin.com/in/jamesjaya",
				};
		}
	}
}

export default SocialIcon;
