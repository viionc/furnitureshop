import storeItems from "../data/items.json";
import {StoreItem, StoreItemProps} from "../components/StoreItem";
import {useShoppingCart} from "../context/ShoppingCartContext";
import ShopFilter from "../components/ShopFilter";

export function Store() {
    const {currentCategory, priceRange} = useShoppingCart();
    return (
        <>
            <div className="d-flex w-100 p-5">
                <ShopFilter></ShopFilter>
                <div className="d-flex flex-wrap align-content-center gap-3 w-100">
                    {storeItems
                        .filter(item => {
                            if (
                                (currentCategory === "all" || currentCategory === item.category) &&
                                item.price < priceRange[1] &&
                                item.price > priceRange[0]
                            ) {
                                return item;
                            }
                        })
                        .map(item => {
                            const fixItem = item as StoreItemProps;
                            return (
                                <>
                                    {(currentCategory == "all" ||
                                        currentCategory == item.category) && (
                                        <StoreItem key={item.id} {...fixItem}></StoreItem>
                                    )}
                                </>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
