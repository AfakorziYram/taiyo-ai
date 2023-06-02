import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markShadowPng from 'leaflet/dist/images/marker-shadow.png';

import TitleCard from './TitleCard';
import { CountryReducedData } from '../features/charts_and_maps/ChartsAndMaps';

const position: [number, number] = [8, -5];

interface MapsProps {
	data: CountryReducedData[];
}

const Maps: React.FC<MapsProps> = (props): JSX.Element => {
	return (
		<>
			<TitleCard
				title={'Line graph showing the cases fluctuations'}
				topMargin={'mt-1'}
			>
				<MapContainer
					center={position}
					zoom={3}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					{props.data.map((country) => (
						<Marker
							key={country.country}
							position={[country.lat, country.long]}
							icon={
								new Icon({
									iconUrl: markerIconPng,
									shadowUrl: markShadowPng,
								})
							}
						>
							<Popup minWidth={150}>
								<div className='grid grid-cols-1 md:grid-cols-4 mt-4 gap-6'>
									<div className='col-span-4'>
										<img
											src={country.flag}
											alt={country.country}
										/>
									</div>
									<div className='col-span-2'>Name: </div>
									<div className='col-span-2'>{country.country}</div>
									<div className='col-span-2'>Active Cases: </div>
									<div className='col-span-2'>{country.active}</div>
									<div className='col-span-2'>Recovered: </div>
									<div className='col-span-2'>{country.recovered}</div>
									<div className='col-span-2'>Deaths: </div>
									<div className='col-span-2'>{country.deaths}</div>
								</div>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</TitleCard>
		</>
	);
};

export default Maps;
