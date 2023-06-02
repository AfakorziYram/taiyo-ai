// All components mapping with path for internal routes
import Contact from '../features/contact/Contact';
import ChartsAndMaps from '../features/charts_and_maps/ChartsAndMaps';

const routes = [
	{
		path: '/', // the url
		component: Contact, // view rendered
	},
	{
		path: '/charts-and-maps', // the url
		component: ChartsAndMaps, // view rendered
	},
];

export default routes;
