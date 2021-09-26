import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"

const links = ["https://www.linkedin.com/in/durai-shanmugaraj-r-050313192/",
	"https://github.com/duraishanmugaraj",
	"https://www.instagram.com/__durairaj__/?hl=en"]

const Footer = () => {
	return <div className="footer">
		<div className="icon">
			{links.map((link) => <div className="icons"> <SocialIcon url={link} fgColor="#fff" /> </div>)}
		</div>
		<hr />
		<p className="copyright" >© 2021 - developed by Durai shanmugaraj</p>
	</div>
}
export default Footer