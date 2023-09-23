import storeItems from "../data/items.json";
import {StoreItem, StoreItemProps} from "../components/StoreItem";
import {useShoppingCart} from "../context/ShoppingCartContext";
import ShopFilter from "../components/ShopFilter";
import {Col, Container, Row} from "react-bootstrap";

export function Store() {
    const {currentCategory, priceRange, hasPromoActive, nameFilter} = useShoppingCart();

    function checkFilter(item: StoreItemProps): boolean {
        if (!(currentCategory === "all" || currentCategory === item.category)) return false;
        if (!item.name.toLowerCase().includes(nameFilter.toLowerCase())) return false;
        if (hasPromoActive) {
            if (!item.promoPrice) return false;
        }
        if (item.promoPrice) {
            if (!(item.promoPrice > priceRange[0] && item.promoPrice < priceRange[1])) {
                return false;
            }
        } else if (!(item.price > priceRange[0] && item.price < priceRange[1])) {
            return false;
        }
        return true;
    }
    return (
        <>
            <Container id="store" className="d-flex w-100 p-5">
                <Row className="w-100">
                    <ShopFilter></ShopFilter>
                    <Col className="d-flex flex-wrap align-content-center gap-3 w-100 pb-5">
                        {storeItems
                            .filter(item => {
                                if (checkFilter(item as StoreItemProps)) return item;
                            })
                            .map(item => {
                                const fixItem = item as StoreItemProps;
                                return <StoreItem key={item.id} {...fixItem}></StoreItem>;
                            })}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
