import {Button, Container, InputGroup} from "react-bootstrap";
import {Categories, useShoppingCart} from "../context/ShoppingCartContext";
import storeIems from "../data/items.json";
import Form from "react-bootstrap/form";

export default function ShopFilter() {
    const {changeCategory, changePriceRange, priceRange} = useShoppingCart();
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
        <Container className="w-25">
            <h2 className="text-white">Categories:</h2>
            <div className="d-flex flex-column justify-content-center pb-3 gap-3">
                {categories.map(category => {
                    return (
                        <div
                            key={category}
                            onClick={e => {
                                changeCategory(category as Categories);
                                console.log(e);
                            }}
                        >
                            <Button style={{width: "300px"}}>{category.toUpperCase()}</Button>
                        </div>
                    );
                })}
            </div>
            <InputGroup className="mt-5" style={{width: "300px"}}>
                <InputGroup.Text className="bg-primary border-0 text-white">
                    Price Range:
                </InputGroup.Text>
                <Form.Control
                    aria-label="min-prices"
                    value={priceRange[0]}
                    onChange={e => handleMinPriceChange(parseInt(e.target.value))}
                />
                <Form.Control
                    aria-label="max-price"
                    value={priceRange[1]}
                    onChange={e => handleMaxPriceChange(parseInt(e.target.value))}
                />
            </InputGroup>
        </Container>
    );
}
