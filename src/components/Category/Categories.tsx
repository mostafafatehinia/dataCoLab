import { useState } from "react";

import { Navigation } from "./Navigation";

export const Categories = (): JSX.Element => {
	const [searchText, setSearchText] = useState<string>("");
	const [category, setCategory] = useState<"drive" | "hubSpot" | "pipDrive">("drive");

	return (
		<div className='w-5/6'>
			<Navigation
				onSearch={setSearchText}
				searchText={searchText}
				currentCategory={category}
				setCategory={setCategory}
			/>
			<div className='flex justify-center items-center h-4/5'>
				{searchText.length <= 0 ? (
					<div
						className={`
					${category === "drive" && "bg-red-600"}
					${category === "hubSpot" && "bg-orange-500"}
					${category === "pipDrive" && "bg-gray-400"}
					 flex justify-center items-center p-4 w-2/3 h-[400px] text-white rounded-md`}
					>
						{(category === "drive" && "Google Drive") ||
							(category === "hubSpot" && "Hubspot") ||
							(category === "pipDrive" && "Pipdrive")}
					</div>
				) : (
					<div className='bg-green-600 flex justify-center items-center p-4 w-2/3 h-[400px] text-white rounded-md'>
						{searchText}
					</div>
				)}
			</div>
		</div>
	);
};
