import {Col, InputGroup} from "react-bootstrap";
import {Categories, useShoppingCart} from "../context/ShoppingCartContext";
import storeIems from "../data/items.json";
import Form from "react-bootstrap/form";

export default function ShopFilter() {
    const {
        changeCategory,
        changePriceRange,
        priceRange,
        changeHasPromoActive,
        nameFilter,
        changeNameFilter,
        currentCategory,
    } = useShoppingCart();
    const categories = ["all", ...new Set(storeIems.map(item => item.category))];

    const handleMinPriceChange = (price: number) => {
        if (Number.isNaN(price) || price < 0) return changePriceRange([0, priceRange[1]]);
        changePriceRange([price, priceRange[1]]);
    };

    const handleMaxPriceChange = (price: number) => {
        if (Number.isNaN(price) || price < 0) return changePriceRange([priceRange[0], 0]);
        changePriceRange([priceRange[0], price]);
    };

    return (
        <Col lg={2}>
            <p className="text-black fs-5 p-0 m-0 py-2">Name:</p>
            <InputGroup className="border-bottom pb-3">
                <Form.Control
                    aria-label="min-prices"
                    style={{maxWidth: 200}}
                    value={nameFilter}
                    onChange={e => changeNameFilter(e.target.value)}
                />
            </InputGroup>
            <p className="text-black fs-5 p-0 m-0 py-2">Categories:</p>
            <div className="d-flex flex-column justify-content-center gap-3 border-bottom pb-3">
                {categories.map(category => {
                    return (
                        <div
                            className={`filter-category ${
                                currentCategory === category ? "active" : ""
                            }`}
                            key={category}
                            onClick={() => changeCategory(category as Categories)}
                            style={{cursor: "pointer"}}
                        >
                            {category.toUpperCase()}
                        </div>
                    );
                })}
            </div>
            <p className="text-black fs-5 p-0 m-0 py-2">Price Range:</p>
            <InputGroup className="border-bottom pb-3">
                <Form.Control
                    aria-label="min-prices"
                    style={{maxWidth: 100}}
                    value={priceRange[0]}
                    onChange={e => handleMinPriceChange(parseInt(e.target.value))}
                />
                <Form.Control
                    aria-label="max-price"
                    style={{maxWidth: 100}}
                    value={priceRange[1]}
                    onChange={e => handleMaxPriceChange(parseInt(e.target.value))}
                />
            </InputGroup>

            <InputGroup className="d-flex align-items-center gap-2">
                <p className="text-black fs-5 p-0 m-0 py-2">Discounted?:</p>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    style={{transform: "scale(1)"}}
                    onChange={changeHasPromoActive}
                />
            </InputGroup>
        </Col>
    );
}
