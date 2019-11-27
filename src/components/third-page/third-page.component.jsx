import React from 'react';

import { ReactComponent as HTMLIcon } from '../../assets/icons/html.svg'
import { ReactComponent as CSSIcon } from '../../assets/icons/css.svg'
import { ReactComponent as JSIcon } from '../../assets/icons/javascript.svg'

import './third-page.styles.scss';

import LanguageCard from '../language-card/language-card.component';

const ThirdPage = () => {
	const languages = [
		{
			heading: "I'm in love with HTML",
			text: "Hypertext Markup Language (HTML) is the standart markup language for creating web pages and web applications.",
			icon: <HTMLIcon />
		},
		{
			heading: "CSS is my best friend",
			text: "Hypertext Markup Language (HTML) is the standart markup language for creating web pages and web applications.",
			icon: <CSSIcon />
		},
		{
			heading: "JavaScript is my passion",
			text: "Hypertext Markup Language (HTML) is the standart markup language for creating web pages and web applications.",
			icon: <JSIcon />
		}
	];
	return (
		<div className='container'>
			<h1>About my relationships with web-development</h1>
			{
				languages.map((language, i) => <LanguageCard key={i} {...language} />)
			}
		</div>
	);
};

export default ThirdPage;