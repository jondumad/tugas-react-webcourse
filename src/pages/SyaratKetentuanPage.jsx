import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratKetentuanPage = () => {
	return (
		<div className="syarat-ketentuan-page">
			<div className="syarat-ketentuan">
				<Container>
					<Row>
						<Col>
							<h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
							<p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
						</Col>
					</Row>
					<Row className="pt-5">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Accusamus perspiciatis aut placeat ratione repellendus quibusdam
							molestias earum corporis laborum? Impedit pariatur quae esse
							consectetur nemo repudiandae provident unde soluta, modi
							dignissimos eos quasi suscipit illo temporibus non perspiciatis
							molestiae explicabo laborum. Magni, nam alias. Debitis, incidunt,
							voluptas dolore illum accusamus, unde architecto molestiae
							voluptatum quibusdam facere deleniti distinctio nemo. Eligendi.
						</p>
					</Row>
					<Row className="py-3">
						<Col>
							<h4 className="fw-bold">1. Lorem</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos eveniet laudantium et error eum dolore totam
								doloremque itaque molestias ab non voluptatem fuga sunt quia
								omnis nulla, tempora sed temporibus accusamus, harum quisquam,
								earum autem. Nemo autem voluptas, officiis rerum consectetur
								blanditiis modi deserunt a doloremque aperiam! Ex maiores
								necessitatibus beatae sed nam perferendis repellat minima
								facere, rem vel maxime?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos eveniet laudantium et error eum dolore totam
								doloremque itaque molestias ab non voluptatem fuga sunt quia
								omnis nulla, tempora sed temporibus accusamus, harum quisquam,
								earum autem. Nemo autem voluptas, officiis rerum consectetur
								blanditiis modi deserunt a doloremque aperiam! Ex maiores
								necessitatibus beatae sed nam perferendis repellat minima
								facere, rem vel maxime?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos eveniet laudantium et error eum dolore totam
								doloremque itaque molestias ab non voluptatem fuga sunt quia
								omnis nulla, tempora sed temporibus accusamus, harum quisquam,
								earum autem. Nemo autem voluptas, officiis rerum consectetur
								blanditiis modi deserunt a doloremque aperiam! Ex maiores
								necessitatibus beatae sed nam perferendis repellat minima
								facere, rem vel maxime?
							</p>
						</Col>
					</Row>
					<Row className="py-3">
						<Col>
							<h4 className="fw-bold">2. Ipsum</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos eveniet laudantium et error eum dolore totam
								doloremque itaque molestias ab non voluptatem fuga sunt quia
								omnis nulla, tempora sed temporibus accusamus, harum quisquam,
								earum autem. Nemo autem voluptas, officiis rerum consectetur
								blanditiis modi deserunt a doloremque aperiam! Ex maiores
								necessitatibus beatae sed nam perferendis repellat minima
								facere, rem vel maxime?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos eveniet laudantium et error eum dolore totam
								doloremque itaque molestias ab non voluptatem fuga sunt quia
								omnis nulla, tempora sed temporibus accusamus, harum quisquam,
								earum autem. Nemo autem voluptas, officiis rerum consectetur
								blanditiis modi deserunt a doloremque aperiam! Ex maiores
								necessitatibus beatae sed nam perferendis repellat minima
								facere, rem vel maxime?
							</p>
						</Col>
					</Row>
					<Row className="py-3">
						<Col>
							<h4 className="fw-bold">2. Dolor</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos eveniet laudantium et error eum dolore totam
								doloremque itaque molestias ab non voluptatem fuga sunt quia
								omnis nulla, tempora sed temporibus accusamus, harum quisquam,
								earum autem. Nemo autem voluptas, officiis rerum consectetur
								blanditiis modi deserunt a doloremque aperiam! Ex maiores
								necessitatibus beatae sed nam perferendis repellat minima
								facere, rem vel maxime?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos eveniet laudantium et error eum dolore totam
								doloremque itaque molestias ab non voluptatem fuga sunt quia
								omnis nulla, tempora sed temporibus accusamus, harum quisquam,
								earum autem. Nemo autem voluptas, officiis rerum consectetur
								blanditiis modi deserunt a doloremque aperiam! Ex maiores
								necessitatibus beatae sed nam perferendis repellat minima
								facere, rem vel maxime?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dignissimos eveniet laudantium et error eum dolore totam
								doloremque itaque molestias ab non voluptatem fuga sunt quia
								omnis nulla, tempora sed temporibus accusamus, harum quisquam,
								earum autem. Nemo autem voluptas, officiis rerum consectetur
								blanditiis modi deserunt a doloremque aperiam! Ex maiores
								necessitatibus beatae sed nam perferendis repellat minima
								facere, rem vel maxime?
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="faq">
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
		</div>
	);
};

export default SyaratKetentuanPage;
