interface RoutesInterface {
	path: String;
	icon: String;
	name: String;
}

const routes: RoutesInterface[] = [
	{
		path: '/',
		name: 'Contacts',
		icon: 'Squares2X2Icon',
	},
	{
		path: '/app/charts-and-maps',
		icon: 'InboxArrowDownIcon',
		name: 'Charts And Maps',
	},
];

export default routes;
