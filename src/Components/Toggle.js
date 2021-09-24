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

	const lightBtn = "btn btn-outline-light btn-lg"
	const darkBtn = "btn btn-outline-dark btn-lg"

	return (
		<div className="align">
			<div className="toggle">
				<button type="button"
					class={checked ? darkBtn : lightBtn}
					onClick={() => setChecked(!checked)}>
					<i className={checked ? darkIcon : liteIcon} ></i>
					{checked ? "Dark" : "Light"}
				</button>
			</div>
		</div>

	);
}

export default Toggle;