import {Container, Form, InputGroup} from "react-bootstrap";
import {Categories, useShoppingCart} from "../context/ShoppingCartContext";
import storeIems from "../data/items.json";
import {Link, useNavigate} from "react-router-dom";
import {FormEvent} from "react";
import logo from "../assets/logo.png";

function Heading() {
    const {nameFilter, changeNameFilter, changeCategory, currentCategory} = useShoppingCart();
    const categories = ["all", ...new Set(storeIems.map(item => item.category))];
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate("/furnitureshop/store");
    };

    const handleLink = (category: Categories) => {
        changeCategory(category);
    };
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center">
                <img src={logo}></img>
                <Form onSubmit={e => handleSubmit(e)} style={{minWidth: 400}}>
                    <InputGroup>
                        <Form.Control
                            aria-label="min-prices"
                            value={nameFilter}
                            onChange={e => changeNameFilter(e.target.value)}
                            placeholder="Search items"
                        />
                    </InputGroup>
                </Form>
            </Container>
            <Container className="d-flex w-100 justify-content-center border-bottom">
                {categories.map(category => {
                    return (
                        <Link
                            key={category}
                            to="/furnitureshop/store"
                            className={`top-categories text-black text-decoration-none ${
                                currentCategory === category ? "active" : ""
                            }`}
                            onClick={() => handleLink(category as Categories)}
                        >
                            <span className=" text-capitalize fs-4 px-5">{category}</span>
                        </Link>
                    );
                })}
            </Container>
        </>
    );
}

export default Heading;
