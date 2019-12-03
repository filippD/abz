import React from 'react';

import './second-page.styles.scss';

import { ReactComponent as Image } from '../../assets/icons/man-mobile.svg';

const SecondPage = () => (
	<div className='second-page container'>
		<h1 className='heading'>Let's get acquainted</h1>
		<div className='content-div'>
			<Image className='image'/>
			<div className='text-div'>
				<h2>I am cool frontend developer</h2>
				<p className='grey'>
					When real uers have a slow experience on mobile,
					they're much less likely to find what they are looking for or purchase from
					you in the future.
					For many sites this equates to a huge missed opportunity,
					especially when more than half of visits are abandoned if a mobile page takes over
					3 seconds to load.
				 </p>
				<p className='grey'>
					Last week, Google Search and Ads teams announces two new speed initiative to
				 	help improve user-experience on the web.
				</p>
				<h2 className='sign-up-text'>Sign Up</h2>
			</div>
		</div>
	</div>
);

export default SecondPage;