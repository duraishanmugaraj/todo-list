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
		<form className="form-control" onSubmit={handleSubmit}>
			<input onChange={e => setName(e.target.value)}
				type="text"
				className="grocery"
				placeholder="eg. learn react"
				value={name} />
			<button type="submit" className="submit-btn">submit</button>
		</form>
	);
}

export default Input;