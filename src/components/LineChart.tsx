import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from './TitleCard';
import { Data } from '../features/charts_and_maps/ChartsAndMaps';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

interface LineChartProps {
	data: Data;
}

const LineChart: React.FC<LineChartProps> = (props): JSX.Element => {
	const options: any = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
		},
	};

	const data = {
		datasets: [
			{
				fill: true,
				label: 'Cases fluctuations',
				data: props.data,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return (
		<>
			<TitleCard
				title={'Line graph showing the cases fluctuations'}
				topMargin={'mt-1'}
			>
				<Line
					data={data}
					options={options}
				/>
			</TitleCard>
		</>
	);
};

export default LineChart;
