import React from "react";
import { Accordion, Col } from "react-bootstrap";

import { faq } from "../data/index";

const FaqComponent = () => {
	return faq.map((data, index) => (
		<Col lg={6} key={data.id} className="mb-3">
			<Accordion className="shadow-sm">
				<Accordion.Item eventKey={data.eventKey}>
					<Accordion.Header>{data.title}</Accordion.Header>
					<Accordion.Body>{data.desc}</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Col>
	));
};

export default FaqComponent;
