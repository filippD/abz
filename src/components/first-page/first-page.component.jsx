import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './first-page.styles.scss';

const FirstPage = () => (
	<div className='first-page'>
		<h1 className='main-text'>Test assignment for Frontend Developer position</h1>
		<p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repositiory</p>
		<div className='button-div'>
			<CustomButton />
		</div>
	</div>
);

export default FirstPage;