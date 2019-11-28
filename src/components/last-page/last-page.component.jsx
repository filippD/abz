import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './last-page.styles.scss';

const LastPage = () => (
	<div className='last-page container'>
		<Logo />
		<p className='menu-item'>About me</p>
		<p className='menu-item'>Relationships</p>
		<p className='menu-item'>Requirements</p>
		<p className='menu-item'>Users</p>
		<p className='menu-item'>Sign Up</p>
	</div>
);

export default LastPage;