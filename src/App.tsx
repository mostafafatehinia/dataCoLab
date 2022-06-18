import { useState } from "react";

import { Categories, Settings, SideBar } from "./components";

function App() {
	const [active, setActive] = useState<boolean>(true);

	return (
		<div className='w-screen flex'>
			<SideBar active={active} setActive={setActive} />
			{active ? <Categories /> : <Settings />}
		</div>
	);
}

export default App;
