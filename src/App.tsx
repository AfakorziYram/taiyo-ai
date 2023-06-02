import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LeftSidebar from './components/LeftSidebar';
import './App.css';
import PageContent from './components/PageContent';
import ModalLayout from './components/ModalLayout';

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* Place new routes over this */}
					<Route
						path='/*'
						element={
							<>
								<div className='drawer drawer-mobile'>
									<input
										id='left-sidebar-drawer'
										type='checkbox'
										className='drawer-toggle'
									/>
									<PageContent />
									<LeftSidebar />

									{/* Modal layout container */}
									<ModalLayout />
								</div>
							</>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
