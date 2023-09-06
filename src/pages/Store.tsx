import {Row, Col, Button} from "react-bootstrap";
import storeItems from "../data/items.json";
import {StoreItem, StoreItemProps} from "../components/StoreItem";
import {Categories, useShoppingCart} from "../context/ShoppingCartContext";

export const categories = [
    {id: "all", label: "wszystko"},
    {id: "chair", label: "krzesła"},
    {id: "table", label: "stoły"},
    {id: "bed", label: "łóżka"},
    {id: "wardrobe", label: "szafy"},
];

export function Store() {
    const {changeCategory, currentCategory} = useShoppingCart();
    return (
        <>
            <Row className="justify-content-center pb-3">
                {categories.map(category => {
                    return (
                        <Col
                            key={category.id}
                            style={{flex: "0 0 0%"}}
                            onClick={() => changeCategory(category.id as Categories)}
                        >
                            <Button>{category.label.toUpperCase()}</Button>
                        </Col>
                    );
                })}
            </Row>
            <Row md={2} xs={1} lg="3" className="g-3">
                {storeItems.map(item => {
                    const fixItem = item as StoreItemProps;
                    return (
                        <>
                            {(currentCategory == "all" || currentCategory == item.category) && (
                                <Col key={item.id}>
                                    <StoreItem {...fixItem}></StoreItem>
                                </Col>
                            )}
                        </>
                    );
                })}
            </Row>
        </>
    );
}
