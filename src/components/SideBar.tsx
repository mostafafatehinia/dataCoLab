import { Button } from "./Button";
import { SideBarProps } from "./globalTypes";
import { CategoryIcon } from "./Icons/CategoryIcon";
import { MoonIcon } from "./Icons/MoonIcon";
import { SettingsIcon } from "./Icons/SettingsIcon";
import { SunIcon } from "./Icons/SunIcon";

export const SideBar = ({ active, setActive, darkMode, setDarkMode }: SideBarProps): JSX.Element => {
	return (
		<div className={`flex relative md:min-h-screen w-1/6 border-r-4 border-gray-200 dark:bg-gray-800`}>
			<div className='absolute right-2 top-2 h-10'>
				{darkMode ? (
					<SunIcon onClick={() => setDarkMode(!darkMode)} />
				) : (
					<MoonIcon onClick={() => setDarkMode(!darkMode)} />
				)}
			</div>
			<div className={`flex flex-col w-full md:w-64 text-gray-700 bg-white dark:bg-gray-800`}>
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
