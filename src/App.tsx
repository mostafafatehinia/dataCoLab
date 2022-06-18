import { useState } from "react";

import { Categories, Settings, SideBar } from "./components";

function App() {
	const [active, setActive] = useState<boolean>(true);
	const [darkMode, setDarkMode] = useState<boolean>(false);

	return (
		<div className={`${darkMode && "dark"} w-screen flex`}>
			<SideBar active={active} setActive={setActive} darkMode={darkMode} setDarkMode={setDarkMode} />
			{active ? <Categories /> : <Settings />}
		</div>
	);
}

export default App;
