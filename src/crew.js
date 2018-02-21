import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';

const crew = [
	{
		name: 'Michelle Oyler',
		bio:
			'Michele has been rowing since her teenage years and has won the champs before',
		icon: 'female'
	},
	{
		name: 'Emma Bagnall-Oakley',
		bio:
			'Emma has been inseparable from the water ever since she arrived 8 years ago.',
		icon: 'female'
	},
	{
		name: 'Heather Meyrick',
		bio:
			'Although the newest to the crew, Heather is keen and excited for this years Champs',
		icon: 'female'
	},
	{
		name: 'Emma Lainchbury',
		bio: 'Emma ... ',
		icon: 'female'
	},
	{
		name: 'Fran McNeil',
		bio: 'Fran ...',
		icon: 'female'
	},
	{
		name: 'Jo Hulands',
		bio: 'Jo... ',
		icon: 'female'
	},
	{
		name: 'Jon Taylor',
		bio: 'Jon is the cox',
		icon: 'male'
	}
];

const Crew = () => (
	<div className="crew">
		{crew.map(user => (
			<Popup
				key={user.name}
        trigger={<Icon circular size="large" name={user.icon} />}
				header={user.name}
				content={user.bio}
			/>
		))}
	</div>
);

export default Crew