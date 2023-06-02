import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { UUID } from 'uuidjs';

import { closeModal, selectStatus, selectExtraObject, emptyExtraObject } from '../app/appSlice';
import { useAppSelector } from '../app/hooks';
import { ContactInterface, add, edit } from '../features/contact/contactSlice';

const ModalLayout = () => {
	const isOpen = useAppSelector(selectStatus);
	const extraObject = useAppSelector(selectExtraObject);

	const dispatch = useDispatch();

	const close = (e: any) => {
		dispatch(closeModal(e));
	};

	const [isAdding, setIsAdding] = useState(true);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState(extraObject?.ln || '');
	const [contact, setContact] = useState(extraObject?.contact || '');
	const [isActive, setIsActive] = useState(extraObject?.status || false);
	const [imageCount, setImageCount] = useState(1);

	const onSubmit = (e: any) => {
		if (firstName.length <= 0 || lastName.length <= 0) return;
		const values: ContactInterface = {
			id: extraObject?.id || UUID.generate(),
			fn: firstName,
			ln: lastName,
			contact: contact,
			status: isActive,
			image: extraObject?.image || 'https://source.unsplash.com/random/400x200?beach&' + imageCount,
		};
		if (!extraObject) {
			dispatch(add(values));
			setImageCount((oldVal) => oldVal + 1);
		} else {
			dispatch(edit(values));
			dispatch(emptyExtraObject());
		}
		setFirstName('');
		setLastName('');
		setContact('');
		setIsActive(false);
		close(e);
	};

	useEffect(() => {
		if (!!extraObject) {
			setFirstName(extraObject?.fn as string);
			setLastName(extraObject?.ln as string);
			setContact(extraObject?.contact as string);
			setIsActive(extraObject?.status as boolean);
			setIsAdding(false);
		}
	}, [extraObject]);

	return (
		<>
			<div className={`modal ${isOpen ? 'modal-open' : ''}`}>
				<div className={`modal-box max-w-5xl`}>
					<button
						className='btn btn-sm btn-circle absolute right-2 top-2'
						onClick={(e) => close(e)}
					>
						✕
					</button>
					<h3 className='font-semibold text-2xl pb-6 text-center'>Add a new contact</h3>
					<>
						<div className='grid grid-cols-1 md:grid-cols-6 gap-x-4 gap-y-1'>
							<div className='col-span-3'>
								<div className={`form-control w-full mt-1`}>
									<label className='label'>
										<span className={'label-text text-base-content '}>First Name</span>
									</label>
									<input
										type='text'
										onChange={(e) => setFirstName(e.target.value)}
										value={(firstName || '') as string}
										className={'input input-bordered w-full'}
									/>
								</div>
							</div>
							<div className='col-span-3'>
								<div className={`form-control w-full mt-1`}>
									<label className='label'>
										<span className={'label-text text-base-content '}>Last Name</span>
									</label>
									<input
										type='text'
										onChange={(e) => setLastName(e.target.value)}
										value={(lastName || '') as string}
										className={'input input-bordered w-full'}
									/>
								</div>
							</div>
							<div className='col-span-3'>
								<div className={`form-control w-full mt-1`}>
									<label className='label'>
										<span className={'label-text text-base-content '}>Contact</span>
									</label>
									<input
										type='text'
										onChange={(e) => setContact(e.target.value)}
										value={(contact || '') as string}
										className={'input input-bordered w-full'}
									/>
								</div>
							</div>
							<div className='col-span-3'>
								<div className='grid grid-rows-2'>
									<div className='row-start-2 row-span-2'>
										<div className='form-control'>
											<label className='cursor-pointer label'>
												<span className='label-text'>Status</span>
												<input
													type='checkbox'
													className='toggle toggle-primary'
													onChange={() => setIsActive((oldValue) => !oldValue)}
													checked={(isActive || false) as boolean}
												/>
											</label>
										</div>
									</div>
								</div>
							</div>

							<div className='md:col-span-6 mt-4 mx-auto'>
								<button
									className='btn btn-outline btn-primary'
									onClick={onSubmit}
								>
									{isAdding ? 'Add Contact' : 'Edit Contact'}
								</button>
							</div>
						</div>
					</>
				</div>
			</div>
		</>
	);
};

export default ModalLayout;
