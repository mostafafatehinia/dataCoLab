import { useState } from "react";

import { SearchBar } from "./SearchBar";

export const Settings = (): JSX.Element => {
	const [searchText, setSearchText] = useState<string>("");

	return (
		<div className='flex flex-col w-full'>
			<div className='flex justify-end mr-60'>
				<SearchBar onSearch={setSearchText} searchText={searchText} />
			</div>
			<div className='flex justify-center items-center mt-40'>
				{searchText.length <= 0 ? (
					<div className='bg-green-600 flex justify-center items-center w-4/5 p-4 h-[400px] text-white rounded-md'>
						Settings
					</div>
				) : (
					<div className='bg-green-600 flex justify-center items-center w-4/5 p-4 h-[400px] text-white rounded-md'>
						{searchText}
					</div>
				)}
			</div>
		</div>
	);
};
