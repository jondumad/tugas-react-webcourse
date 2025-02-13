import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const NavbarComponent = () => {
	const [changeColor, setChangeColor] = useState(false);

	const changeBackgroundColor = () => {
		if (window.scrollY > 10) {
			setChangeColor(true);
		} else {
			setChangeColor(false);
		}
	};

	useEffect(() => {
		changeBackgroundColor();
		window.addEventListener("scroll", changeBackgroundColor);

		return () => {
			window.removeEventListener("scroll", changeBackgroundColor);
		};
	}, []);

	return (
		<div>
			<Navbar
				expand="lg"
				className={changeColor ? "color-active" : ""}
				style={{
					backgroundColor: changeColor ? "var(--navbar-color)" : "transparent", // Use CSS variable
					transition: "background-color 0.3s ease",
				}}
			>
				<Container>
					<Navbar.Brand className="fs-3 fw-bold" href="#home">
						React-Bootstrap
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mx-auto text-center">
							{navLinks.map((link) => (
								<div className="navlink" key={link.id}>
									<NavLink
										to={link.path}
										className={({ isActive }) => (isActive ? "active" : "")}
										style={({ isActive }) => ({
											color: isActive
												? "var(--primary-color)"
												: "var(--color-text)", // Use CSS variables
											backgroundColor: isActive
												? "var(--secondary-color)"
												: "transparent", // Use CSS variables
											padding: "5px 10px", // Apply padding here for consistency
										})}
										end
									>
										{link.text}
									</NavLink>
								</div>
							))}
						</Nav>
						<div className="text-center">
							<Button variant="outline-danger" className="rounded-1">
								Join With Us
							</Button>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
