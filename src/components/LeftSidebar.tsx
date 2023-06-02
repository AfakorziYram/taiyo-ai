import { NavLink, Link, useLocation, To } from 'react-router-dom';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon';
import QueueListIcon from '@heroicons/react/24/outline/QueueListIcon';

const iconClasses = `h-6 w-6`;

const LeftSidebar = () => {
	const location = useLocation();

	const close = () => {
		document.getElementById('left-sidebar-drawer')!.click();
	};

	return (
		<>
			<div className='drawer-side '>
				<label
					htmlFor='left-sidebar-drawer'
					className='drawer-overlay'
				></label>
				<ul className='menu  pt-2 w-80 bg-base-100 text-base-content'>
					<button
						className='btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden'
						onClick={() => close()}
					>
						<XMarkIcon className='h-5 inline-block w-5' />
					</button>
					<li className='mb-2 font-semibold text-xl'>
						<Link to={'/app/contacts'}>
							<img
								className='mask mask-squircle w-10'
								src='/logo192.png'
								alt='Redux Logo'
							/>
							Taiyo.AI
						</Link>{' '}
					</li>

					<li className=''>
						<NavLink
							end
							to={'/app/contacts' as To}
							className={({ isActive }) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`}
						>
							<QueueListIcon className={iconClasses} /> {'Contacts'}
							{location.pathname === '/app/dashboard' ? (
								<span
									className='absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary '
									aria-hidden='true'
								></span>
							) : null}
						</NavLink>
					</li>
					<li className=''>
						<NavLink
							end
							to={'/app/charts-and-maps' as To}
							className={({ isActive }) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`}
						>
							<MapPinIcon className={iconClasses} /> {'Charts and Maps'}
							{location.pathname === '/app/charts-and-maps' ? (
								<span
									className='absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary '
									aria-hidden='true'
								></span>
							) : null}
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default LeftSidebar;
