import React from 'react';

import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Likedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/pinterest.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';


import './footer.styles.scss';

const Footer = () => (
	<div className='footer container'>
		<div>
			<p>work.of.future@gmail.com</p>
			<p>+38 (050) 789 24 98</p>
			<p>+38 (095) 556 08 45</p>
		</div>
		<div className='icons'>
			<Facebook />
			<Instagram />
			<Likedin />
			<Twitter />
			<Pinterest />
		</div>
		<p>abz.agency specially for the test task</p>
	</div>
);

export default Footer;