import { ReactNode } from "react";

export interface ButtonProps {
	text: string;
	active?: boolean;
	activeBgColor: "bg-[#6864CF]" | "bg-[#D0D0D0]";
	activeColor?: "text-white";
	onClick: () => void;
	icon: ReactNode;
	shadow?: boolean;
}

export interface SearchBarProps {
	searchText: string;
	onSearch: (word: string) => void;
}

export interface SideBarProps {
	active: boolean;
	setActive: (value: boolean) => void;
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
}

export interface ToggleIconProps {
	onClick: () => void;
}
