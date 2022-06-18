import { ToggleIconProps } from "../globalTypes";

export const MoonIcon = ({ onClick }: ToggleIconProps): JSX.Element => {
	return (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5 hover:cursor-pointer'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
		</svg>
	);
};
