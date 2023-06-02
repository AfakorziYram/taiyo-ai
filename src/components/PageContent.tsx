import { Route, Routes } from 'react-router-dom';
import routes from '../routes';
import { Suspense } from 'react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';

const PageContent = () => {
	return (
		<div className='drawer-content flex flex-col '>
			<div className='navbar  flex justify-between bg-base-100  z-10 shadow-md '>
				<div className=''>
					<label
						htmlFor='left-sidebar-drawer'
						className='btn btn-primary drawer-button lg:hidden'
					>
						<Bars3Icon className='h-5 inline-block w-5' />
					</label>
				</div>
			</div>

			<main className='flex-1 overflow-y-auto pt-8 px-6  bg-base-200'>
				<Suspense
					fallback={
						<div className='h-full flex items-center justify-center text-gray-300 dark:text-gray-200 bg-base-100'>
							<progress className='progress progress-accent w-56'></progress>
						</div>
					}
				>
					<Routes>
						{routes.map((route, key) => {
							return (
								<Route
									key={key}
									path={`${route.path}`}
									element={<route.component />}
								/>
							);
						})}

						{/* Redirecting unknown url to not found page */}
						<Route
							path='*'
							element={<>Page not found</>}
						/>
					</Routes>
				</Suspense>
				<div className='h-16'></div>
			</main>
		</div>
	);
};

export default PageContent;
