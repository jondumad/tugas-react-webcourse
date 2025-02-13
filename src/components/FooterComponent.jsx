import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
	return (
		<div className="footer py-5">
			<Container>
				<Row>
					<Col>
						<h3 className="fw-bold">Ngoding.</h3>
						<p className="desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
							quam, quae, quos, nemo voluptas voluptatem quia dolores asperiores
							quod dolorum quibusdam.
						</p>

						<div className="contact-item">
							<Link className="text-decoration-none">
								<i className="icon fa-brands fa-whatsapp"></i>
								<span>+62 123-4567-8912</span>
							</Link>
						</div>

						<div className="contact-item">
							<Link className="text-decoration-none">
								<i className="icon fa-solid fa-envelope"></i>
								<a
									className="text-decoration-none"
									href="mailto:2Lb4u@example.com"
								>
									2Lb4u@example.com
								</a>
							</Link>
						</div>
					</Col>
					<Col className="footer-nav d-flex flex-column col-lg-4 col">
						<h5 className="fw-bold">Menu</h5>
						<Link className="footer-link" to="">
							Home
						</Link>
						<Link className="footer-link" to="kelas">
							Kelas
						</Link>
						<Link className="footer-link" to="testimonial">
							Testimonials
						</Link>
						<Link className="footer-link" to="faq">
							{" "}
							FAQ
						</Link>
						<Link className="footer-link" to="syaratketentuan">
							Syarat & Ketentuan
						</Link>
					</Col>
					<Col className="subcribe-container">
						<h5>Subscribe Untuk Info Menarik</h5>
						<div className="subscribe">
							<input type="text" placeholder="Subscribe" />
							<button className="btn btn-danger">Subscribe</button>
						</div>
						<div className="socials">
							<i className="fa-brands fa-facebook"></i>
							<i className="fa-brands fa-twitter"></i>
							<i className="fa-brands fa-linkedin"></i>
							<i className="fa-brands fa-instagram"></i>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear} by <span className="fw-bold">Anfer</span>, All Right Reserved</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FooterComponent;
