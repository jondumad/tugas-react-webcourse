import HeroImage from "../assets/img/hero.png";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { kelasTerbaru, dataSwiper } from "../data";
import { faq } from "../data/index";
import FaqComponent from "../components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className="homepage">
			<header className="w-100 min-vh-100 d-flex align-items-center">
				<Container>
					<Row className="header-box d-flex align-items-center pt-lg-5">
						<Col lg="6">
							<h1 className="mb-4">
								Temukan <br /> <span>Bakat Kreatifmu</span> Bersama Kami!
							</h1>
							<p className="mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Veritatis expedita doloribus est porro consequuntur impedit.
							</p>
							<button
								className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2"
								onClick={() => navigate("/kelas")}
							>
								Lihat Kelas
							</button>
							<button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">
								Lihat Promo
							</button>
						</Col>
						<Col lg="6" className="pt-lg-0 pt-5">
							<img src={HeroImage} alt="hero-img" className="img-fluid" />
						</Col>
					</Row>
				</Container>
			</header>

			<div className="kelas w-100 min-vh-100 py-5">
				<Container>
					<Row>
						<Col>
							<h1 className="text-center fw-bold">Kelas Terbaru</h1>
							<p className="text-center">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row className="row">
						{kelasTerbaru.map((kelas) => (
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
					<Row>
						<Col className="text-center mt-4">
							<button
								className="btn btn-success rounded-5 btn-lg"
								onClick={() => navigate("/kelas")}
							>
								Lihat Semua Kelas{" "}
								<FontAwesomeIcon icon={faChevronRight} className="ms-1" />
							</button>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="testimonial py-5">
				<Container>
					<Row>
						<Col>
							<h1 className="text-center fw-bold my-5">Testimonial</h1>
						</Col>
					</Row>
					<Row>
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							pagination={{
								clickable: true,
							}}
							breakpoints={{
								640: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
								992: {
									slidesPerView: 2,
									spaceBetween: 50,
								},
								1200: {
									slidesPerView: 3,
									spaceBetween: 30,
								},
							}}
							modules={[Pagination]}
							className="mySwiper"
						>
							{dataSwiper.map((data) => {
								return (
									<SwiperSlide key={data.id} className="shadow-sm">
										<p className="desc">{data.desc}</p>
										<div className="people">
											<img src={data.image} alt="" />
											<div>
												<h5 className="mb-1">{data.name}</h5>
												<p className="m-0 fw-bold">{data.skill}</p>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</Row>
				</Container>
			</div>
			<div className="faq py-5">
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

export default HomePage;
