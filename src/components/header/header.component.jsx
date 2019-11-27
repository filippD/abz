import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Menu } from '../../assets/line-menu.svg';

import './header.styles.scss';

const Header = () => (
	<div className='header'>
		<Logo className='logo' />
		<Menu className='menu-icon'/>
	</div>
);

export default Header;