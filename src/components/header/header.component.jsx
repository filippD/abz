import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/line-menu.svg';
import { ReactComponent as SignOutIcon } from '../../assets/icons/sign-out.svg';

import CurrentUser from '../current-user/current-user.component';

import './header.styles.scss';

const Header = () => (
	<div className='header'>
		<Logo className='logo' />
		<div className="no-mobile no-tablet links">
			<span>About Me</span>
			<span>Relationships</span>
			<span>Requirements</span>
			<span>Users</span>
			<span>Sign Up</span>
		</div>
		<MenuIcon className='menu-icon no-desktop'/>
		<div className='user-div'>
			<CurrentUser className="no-mobile no-tablet"/>
			<SignOutIcon className="sign-out-icon no-mobile no-tablet"/>
		</div>
	</div>
);

export default Header;