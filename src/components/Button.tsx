import { ButtonProps } from "./globalTypes";

export const Button = ({
	text,
	active,
	onClick,
	icon,
	shadow,
	activeBgColor,
	activeColor,
}: ButtonProps): JSX.Element => {
	return (
		<button
			onClick={onClick}
			className={`
			${active && activeBgColor + " " + activeColor}
			 ${
					shadow && " shadow-lg drop-shadow-lg border border-gray-100"
				} flex justify-between items-center px-4 w-40 py-2 mt-2 mr-2 text-sm font-semibold rounded-lg hover:bg-[#6864CF]`}
		>
			{icon}
			{text}
		</button>
	);
};
