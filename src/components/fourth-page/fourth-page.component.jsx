import React from 'react';

import { ReactComponent as Image } from '../../assets/icons/man-laptop-v1.svg';

import './fourth-page.styles.scss';

const FourthPage = () => (
	<div className='fourth-page container' >
		<h1>General requirements for the test task</h1>
		<Image />
		<p>
			Users want to find answers to their questions quickly and
			data shows that people really care about how quiclky their pages load.
			The search team announced speed would be a ranking signak for desktop searches in 2010
			and as of this month (July 2018),
			page speed will be a ranking factor for mobile searches too
		</p>
		<p>
			If you're a developer working on a site,
			now is a good time to evaluate your perfomance using our speed tools.
			Think about how perfomance affects the user experience of your pages
			and consider measuring a variety of real-world user-centric perfomance metrics.
		</p>
		<p>
			Are your shipping too much JavaScript?
			Too many images? Images and Javascript are the most significant contributions
			to the page weight that affect page load time based on data from HTTP Archive
			and the Chrome User Experience Report - our public dataset
			for key UX metrics as experienced by Chrome users under real-world conditions.
		</p>
	</div>
);

export default FourthPage;