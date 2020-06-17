/* eslint-disable jsx-a11y/alt-text */
/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone (+65) 8305 8687
*
* Created: 2020-06-17 00:29:25
*------------------------------------------------------- */
import React from 'react';
import Back1 from 'src/assets/images/img.jpg';
import styles from './styles.less';

const HomePage = () => {
	return (
		<div className={styles.root}>
			<img src={Back1} />
			<h1>Home 12</h1>
		</div>
	);
};

export default HomePage;
