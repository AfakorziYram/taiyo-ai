import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { openModal, setExtraObject } from '../../app/appSlice';
import TitleCard from '../../components/TitleCard';
import { remove, selectContactData } from './contactSlice';

const Contact = () => {
	const dispatch = useAppDispatch();
	const contacts = useAppSelector(selectContactData);

	return (
		<>
			<TitleCard
				title={'Contacts'}
				topMargin={'mt-1'}
				TopSideButtons={
					<div className='inline-block float-right'>
						<button
							className='btn px-6 btn-sm normal-case btn-primary'
							onClick={() => dispatch(openModal())}
						>
							{' '}
							Create Contact
						</button>
					</div>
				}
			>
				<div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
					{contacts.length <= 0 && (
						<p className='col-span-6 font-semibold'>
							No contact found <br /> Please add contact from Create Contact button
						</p>
					)}
					{contacts.length > 0 &&
						contacts.map((c) => (
							<div
								className='col-span-3'
								key={c.id as string}
							>
								<div className='card bg-base-100 shadow-xl image-full'>
									<figure>
										<img
											src={c.image as string}
											alt='bg img'
										/>
									</figure>
									<div className='card-body'>
										<h2 className='card-title'>
											{c.ln} {c.fn}
										</h2>
										<p>
											{c.contact} - <span className={c.status ? 'text-success' : 'text-error'}>{c.status ? 'Active User' : 'Inactive User'}</span>
										</p>
										<div className='card-actions justify-end'>
											<button
												className='btn btn-primary'
												onClick={() => {
													dispatch(setExtraObject(c));
													dispatch(openModal());
												}}
											>
												Edit
											</button>
											<button
												className='btn btn-error'
												onClick={() => {
													dispatch(remove(c.id));
												}}
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</TitleCard>
		</>
	);
};

export default Contact;
