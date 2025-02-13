import React from "react";
import FaqComponent from "../components/FaqComponent";
import { Container, Row, Col } from "react-bootstrap";

const FaqPage = () => {
	return (
		<div className="faq pt-5">
			<Container>
				<Row>
					<Col>
						<h2 className="text-center fw-bold my-5">FAQ</h2>
					</Col>
				</Row>
				<Row className="row-cols-lg-2 g-2 pt-5">
					<FaqComponent />
				</Row>
			</Container>
		</div>
	);
};

export default FaqPage;
