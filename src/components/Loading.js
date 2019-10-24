import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
	return (
		<div className="loading">
			<div className="spinner">
				<Spinner animation="border" variant="light" />
			</div>
		</div>
	);
}

export default Loading;