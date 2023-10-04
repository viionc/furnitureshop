import storeItems from "../data/items.json";
import {StoreItem, StoreItemProps} from "../components/StoreItem";
import {useShoppingCart} from "../context/ShoppingCartContext";
import ShopFilter from "../components/ShopFilter";

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
        <section id="store" className="flex justify-center flex-wrap md:flex-nowrap w-full sm:w-3/4 p-5">
            <ShopFilter></ShopFilter>
            <div className="flex flex-wrap items-center gap-3 w-full pb-5 justify-center">
                {storeItems
                    .filter(item => {
                        if (checkFilter(item as StoreItemProps)) return item;
                    })
                    .map(item => {
                        const fixItem = item as StoreItemProps;
                        return <StoreItem key={item.id} {...fixItem}></StoreItem>;
                    })}
            </div>
        </section>
    );
}
