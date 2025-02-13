import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const KelasPage = () => {
	return (
		<div className="kelas-page">
			<div className="kelas min-vh-199 ">
				<Container>
					<Row>
						<Col>
							<h1 className="fw-bold text-center">Semua Kelas</h1>
							<p className="text-center">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</Col>
					</Row>
					<Row>
						{semuaKelas.map((kelas) => (
							<Col
								key={kelas.id}
								lg={4}
								md={6}
								sm={12}
								className="mb-4 shadow rounded"
							>
								<img
									src={kelas.image}
									alt={kelas.title}
									className="w-100 mb-3 rounded-top img-fluid img-kelas"
								/>
								<div className="star mb-2">
									{[...Array(5)].map((_, i) => (
										<FontAwesomeIcon
											key={i}
											icon={faStar}
											className={kelas.star1 > i ? "active" : ""}
										/>
									))}
								</div>
								<h5 className="mb-3">{kelas.title}</h5>
								<div className="ket d-flex justify-content-between align-items-center">
									<p className="m-0 text-primary fw-bold">{kelas.price}</p>
									<button className="btn btn-danger rounded-1">
										{kelas.buy}
									</button>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default KelasPage;
