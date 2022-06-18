export interface NavigationProps {
	searchText: string;
	onSearch: (word: string) => void;
	setCategory: (category: "drive" | "hubSpot" | "pipDrive") => void;
	currentCategory: "drive" | "hubSpot" | "pipDrive";
}
