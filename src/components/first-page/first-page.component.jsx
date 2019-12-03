import React from 'react';

import './first-page.styles.scss';

const FirstPage = () => (
	<div className='first-page container'>
		<div className='first-page-content'>
			<h1 className='main-text'>Test assignment for Frontend Developer position</h1>
			<span className='secondary-text'>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repositiory. </span>
			<span className='secondary-text no-mobile'>
				Please be patient, we consider and respond to evert applicant that meets minimum requirements.
				We look forward to your submission. Good luck!
			</span>
			<button className='button' >Sign Up</button>
		</div>
	</div>
);

export default FirstPage;