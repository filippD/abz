import React from 'react';

const LanguageCard = ({heading, text, icon}) => (
	<div>
		{icon}
		<h2>{heading}</h2>
		<p>{text}</p>
	</div>
);

export default LanguageCard;