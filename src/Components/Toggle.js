import React, { useEffect, useState } from 'react';
import "./Toggle.css"

function Toggle() {

	const [checked, setChecked] = useState(true);

	useEffect(() => {
		const lite_dark = checked ? "lite-mode" : "dark-mode"
		const theme = document.querySelector(".theme")
		theme.setAttribute("id", lite_dark)
	}, [checked])

	const liteIcon = "bi bi-brightness-high-fill"
	const darkIcon = "bi bi-moon-stars"
	return (
		<div className="align">
			<div className="toggle">
				<i onClick={() => setChecked(!checked)}
					className={checked ? darkIcon : liteIcon} ></i>
			</div>
		</div>

	);
}

export default Toggle;