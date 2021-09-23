import React, { useEffect, useState } from 'react';
import "./Toggle.css"

function Toggle(props) {

	const [checked, setChecked] = useState(true);
	const liteIcon = "bi bi-brightness-high-fill"
	const darkIcon = "bi bi-moon-stars"

	const lightBtn = "btn btn-outline-light btn-lg"
	const darkBtn = "btn btn-outline-dark btn-lg"
	useEffect(() => {
		const theme = document.querySelector(".theme")
		if (checked) {
			theme.setAttribute("id", "lite-mode")
		} else {
			theme.setAttribute("id", "dark-mode")
		}
	}, [checked])

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