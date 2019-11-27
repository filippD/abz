import React from 'react';

import './user-card.styles.scss';

const UserCard = ({photo, name, position, email, phone}) => (
	<div className='user-card'>
		<img className='user-photo' src={photo} alt='user'/>
		<h2>{name}</h2>
		<p>{position}</p>
		<p>{email}</p>
		<p>{phone}</p>
 	</div>
);

export default UserCard;