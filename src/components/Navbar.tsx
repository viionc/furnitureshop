import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext";

export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart();
    return (
        <NavbarBs sticky="top" className="bg-primary shadow-lg mb-3">
            <Container>
                <Nav className="me-auto ">
                    <Nav.Link to="/furnitureshop" as={NavLink} className="text-white fs-5">
                        Home
                    </Nav.Link>
                    <Nav.Link to="/furnitureshop/store" as={NavLink} className="text-white fs-5">
                        Store
                    </Nav.Link>
                    <Nav.Link to="/furnitureshop/about" as={NavLink} className="text-white fs-5">
                        About
                    </Nav.Link>
                </Nav>
                <Button
                    onClick={openCart}
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    className="rounded-circle bg-success"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="#ffffff"
                    >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    {cartQuantity > 0 && (
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center alight-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                            }}
                        >
                            {cartQuantity}
                        </div>
                    )}
                </Button>
            </Container>
        </NavbarBs>
    );
}
