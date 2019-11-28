import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './first-page.styles.scss';

const FirstPage = () => (
	<div className='first-page container'>
		<h1 className='main-text'>Test assignment for Frontend Developer position</h1>
		<span>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repositiory. </span>
		<span className='no-mobile'>
			Please be patient, we consider and respond to evert applicant that meets minimum requirements.
			We look forward to your submission. Good luck!
		</span>
		<div className='button-div'>
			<CustomButton />
		</div>
	</div>
);

export default FirstPage;