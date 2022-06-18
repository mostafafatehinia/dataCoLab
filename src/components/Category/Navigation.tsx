import { Button } from "../Button";
import { HubIcon } from "../Icons/HubIcon";
import { DriveIcon } from "../Icons/DriveIcon";
import { PipIcon } from "../Icons/PipIcon";
import { SearchBar } from "../SearchBar";
import { NavigationProps } from "./types";

export const Navigation = ({ onSearch, searchText, setCategory, currentCategory }: NavigationProps): JSX.Element => {
	return (
		<div className='flex justify-center h-fit w-full'>
			<Button
				text='Google Drive'
				onClick={() => setCategory("drive")}
				icon={<DriveIcon />}
				active={currentCategory === "drive"}
				activeBgColor='bg-[#D0D0D0]'
				shadow
			/>
			<Button
				text='Hubspot'
				onClick={() => setCategory("hubSpot")}
				icon={<HubIcon />}
				active={currentCategory === "hubSpot"}
				activeBgColor='bg-[#D0D0D0]'
				shadow
			/>
			<Button
				text='Pipedrive'
				onClick={() => setCategory("pipDrive")}
				icon={<PipIcon />}
				active={currentCategory === "pipDrive"}
				activeBgColor='bg-[#D0D0D0]'
				shadow
			/>
			<SearchBar onSearch={onSearch} searchText={searchText} />
		</div>
	);
};
