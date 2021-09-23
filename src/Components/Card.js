import React, { useState } from 'react';
import "./Card.css"
const Card = (props) => {

	const [isDash, setIsDash] = useState(false)
	const handdleDelete = () => {
		props.delete(props.id)
	}

	return (
		<div onClick={() => setIsDash(!isDash)}>
			<div className="text-center d-flex align-items-center justify-content-center">
				<div className="card shadow bg-body">
					<div className={isDash ? "card-body dash" : "card-body"}>
						{props.data}
					</div>
				</div>
				<button onClick={handdleDelete} type="button" className="btn btn-danger btn-sm btn-del">
					<i className="bi-trash-fill trash"></i>
				</button>
			</div>
		</div>
	);
};

export default Card;