import { ChangeEvent, useCallback } from "react";

import { SearchBarProps } from "./globalTypes";

export const SearchBar = ({ onSearch, searchText }: SearchBarProps): JSX.Element => {
	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			onSearch(e.currentTarget.value);
		},
		[onSearch]
	);

	return (
		<div className='relative top-4 -right-20'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6 absolute z-10 top-2 ml-2'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}
			>
				<path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
			</svg>
			<input
				type='text'
				onChange={handleChange}
				value={searchText}
				className='shadow-lg border border-gray-100 drop-shadow-md px-10 py-2 rounded-md focus:outline-none'
				placeholder='Search'
			/>
		</div>
	);
};
