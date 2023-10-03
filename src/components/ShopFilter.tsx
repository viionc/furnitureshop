import {Categories, useShoppingCart} from "../context/ShoppingCartContext";
import storeIems from "../data/items.json";

export default function ShopFilter() {
    const {changeCategory, changePriceRange, priceRange, changeHasPromoActive, nameFilter, changeNameFilter, currentCategory, hasPromoActive} =
        useShoppingCart();
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
        <div className="flex flex-col gap-5 pe-8">
            <div className="border-b pb-3">
                <p className="text-black text-lg ">Name:</p>
                <input aria-label="name" className="w-[200px] border" value={nameFilter} onChange={e => changeNameFilter(e.target.value)} />
            </div>
            <div className="border-b pb-3">
                <p className="text-black text-lg mb-2">Categories:</p>
                <div className="flex flex-col items-start">
                    {categories.map(category => {
                        return (
                            <div
                                className={`w-full py-1 hover:bg-white ${currentCategory === category ? "active" : ""}`}
                                key={category}
                                onClick={() => changeCategory(category as Categories)}
                                style={{cursor: "pointer"}}
                            >
                                {category.toUpperCase()}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="border-b pb-3">
                <p className="text-black text-lg mb-2">Price Range:</p>
                <div className="flex gap-2">
                    <input
                        aria-label="min-prices"
                        className="w-[80px]"
                        type="number"
                        inputMode="numeric"
                        value={priceRange[0]}
                        onChange={e => handleMinPriceChange(parseInt(e.target.value))}
                    />
                    {"-"}
                    <input
                        aria-label="max-price"
                        className="w-[80px]"
                        inputMode="numeric"
                        type="number"
                        value={priceRange[1]}
                        onChange={e => handleMaxPriceChange(parseInt(e.target.value))}
                    />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-black text-lg">Discounted?:</p>
                <input type="checkbox" checked={hasPromoActive} id="custom-switch" style={{transform: "scale(1)"}} onChange={changeHasPromoActive} />
            </div>
        </div>
    );
}
