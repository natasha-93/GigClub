import React from 'react';
import { render } from 'react-dom';
import Tabs from './tabs';
import { ProgressExampleProgress, ModalDonate } from './modal';
// import TransitionCzar from './animation';
import { Divider } from 'semantic-ui-react';
import './index.css';

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center'
};

const App = () => (
	<div style={styles}>
		<div className="container">
			<header>
				<h1>Tresco & Bryher Gig Club</h1>
				<div>
					<img
						alt=''
						className="gig2"
						src="https://react.semantic-ui.com/assets/images/wireframe/square-image.png"
					/>
				</div>
			</header>
			<Divider />
			<div className="gigMenu">
				<Tabs />
				<Divider />
				<ProgressExampleProgress />
				<ModalDonate />
			</div>
		</div>
	</div>
);

render(<App />, document.getElementById('root'));

// Information & Context
//    - about crew members?
//    - gig history and news
//    - 'like' <3 button on each gig? like clapping on medium
//    - results?
//    - social media links or blog? comments?
//    - pay portal to donate
//
// Layout & Design
//    - minimalism?
//    - fonts
//    - photos & media
//    - vimeo video?
//    - animation? vector svg gigs?
//
