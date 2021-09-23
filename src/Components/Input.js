import React, { useState } from 'react';
import "./Input.css"


function Input(props) {
	const [name, setName] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault()
		if (name !== "") {
			props.add(name)
			setName("")
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" value={name}
					onChange={e => setName(e.target.value)}
					className="css-input" />
				<button type="submit" class="btn btn-primary btn-sm btn-arrow">
					<i class="bi-arrow-return-left bi-arrow"></i>
				</button>
			</form>
		</div>
	);
}

export default Input;