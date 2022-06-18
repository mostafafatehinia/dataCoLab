import { Button } from "./Button";
import { SideBarProps } from "./globalTypes";
import { CategoryIcon } from "./Icons/CategoryIcon";
import { SettingsIcon } from "./Icons/SettingsIcon";

export const SideBar = ({ active, setActive }: SideBarProps): JSX.Element => {
	return (
		<div className='flex md:min-h-screen w-1/6 border-r-4 border-gray-200'>
			<div className='flex flex-col w-full md:w-64 text-gray-700 bg-white'>
				<nav className='ml-10 mt-20'>
					<Button
						text='Categories'
						active={active}
						activeBgColor='bg-[#6864CF]'
						activeColor='text-white'
						onClick={() => setActive(true)}
						icon={<CategoryIcon />}
					/>
					<Button
						text='Settings'
						active={!active}
						activeBgColor='bg-[#6864CF]'
						activeColor='text-white'
						onClick={() => setActive(false)}
						icon={<SettingsIcon />}
					/>
				</nav>
			</div>
		</div>
	);
};
