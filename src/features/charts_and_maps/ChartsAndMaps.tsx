import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import LineChart from '../../components/LineChart';
import Maps from '../../components/Maps';

export interface Data {
	[key: string]: any;
}

export interface CountryData {
	updated: number;
	country: string;
	countryInfo: {
		_id: number;
		iso2: string;
		iso3: string;
		lat: number;
		long: number;
		flag: string;
	};
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	todayRecovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	population: number;
	continent: string;
	oneCasePerPeople: number;
	oneDeathPerPeople: number;
	oneTestPerPeople: number;
	activePerOneMillion: number;
	recoveredPerOneMillion: number;
	criticalPerOneMillion: number;
}
export interface CountryReducedData {
	country: string;
	lat: number;
	long: number;
	flag: string;
	active: number;
	recovered: number;
	deaths: number;
}

const ChartsAndMaps = () => {
	const getLineChartData = (data: Data) => {
		// Modifies the data so it looks like: {Jan 2021: 200000, Feb 2021: 300000 and so on ... }
		return Object.keys(data).reduce(function (result: Data, key) {
			const date = new Date(key);
			const month = date.getMonth();
			const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			const year = date.getFullYear();
			const label = '' + monthNames[month] + ' ' + year;
			if (!result[label]) {
				result[label] = 0;
			}
			result[label] += data[key];
			return result;
		}, {} as Data);
	};

	const getContriesInfo = (data: CountryData[]) => {
		// 	Modifies the data so it looks like:
		// 	{
		// 		country: string;
		// 		lat: number;
		// 		long: number;
		// 		flag: string;
		// 		active: number;
		// 		recovered: number;
		// 		deaths: number;
		// 	}
		return data.map((el) => {
			return {
				country: el.country,
				lat: el.countryInfo.lat,
				long: el.countryInfo.long,
				flag: el.countryInfo.flag,
				active: el.active,
				recovered: el.recovered,
				deaths: el.deaths,
			} as CountryReducedData;
		});
	};

	const countrySpecificDataOfCasesQuery = useQuery({
		queryKey: ['countrySpecificDataOfCases'],
		queryFn: async () => {
			const response = await axios.get('https://disease.sh/v3/covid-19/countries');
			const data = await response.data;
			return data;
		},
	});

	const graphDataForCasesWithDateQuery = useQuery({
		queryKey: ['graphDataForCasesWithDate'],
		queryFn: async () => {
			const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
			const data = await response.data;
			return data;
		},
	});

	if (countrySpecificDataOfCasesQuery.isLoading || graphDataForCasesWithDateQuery.isLoading)
		return (
			<div className='h-full flex items-center justify-center text-gray-300 dark:text-gray-200 bg-base-100'>
				<progress className='progress progress-accent w-56'></progress>
			</div>
		);

	if (countrySpecificDataOfCasesQuery.isError || graphDataForCasesWithDateQuery.isError) return <h1>Error loading data :(</h1>;

	return (
		<>
			<div className='grid grid-cols-1 mt-4 gap-6'>
				<LineChart data={getLineChartData(graphDataForCasesWithDateQuery.data!.cases)} />
				<Maps data={getContriesInfo(countrySpecificDataOfCasesQuery.data)} />
			</div>
		</>
	);
};

export default ChartsAndMaps;
