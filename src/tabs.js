import React from 'react';
import { Tab } from 'semantic-ui-react';
import Crew from './crew';

export const panes = [
	{
		menuItem: 'Czar',
		render: () => (
			<Tab.Pane>
				Czar was built in 1879 and is red
				<Crew />
			</Tab.Pane>
		)
	},
	{
		menuItem: 'Men-A-Vaur',
		render: () => <Tab.Pane>Men-A-Vaur is blue and white</Tab.Pane>
	},
	{
		menuItem: 'Emperor',
		render: () => <Tab.Pane>Purple & Gold.</Tab.Pane>
	},
	{
		menuItem: 'Alfie Jenkins',
		render: () => <Tab.Pane>The AJ is the newest and best</Tab.Pane>
	},
	{
		menuItem: 'Tryher',
		render: () => <Tab.Pane>Practise practise practise...</Tab.Pane>
	}
];

const Tabs = () => <Tab menu={{ widths: 5, stackable: true }} panes={panes} />;

export default Tabs;
