import {useShoppingCart} from "../context/ShoppingCartContext";
import {CartItem} from "./CartItem";
import {formatCurrency} from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
    isOpen: boolean;
};
export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {closeCart, cartItems} = useShoppingCart();
    return (
        <>
            <div
                className="fixed w-0 sm:w-full h-0 sm:h-full bg-gray-500 bg-opacity-25"
                onClick={closeCart}
                style={{display: isOpen ? "flex" : "none"}}
            ></div>
            <div className={`fixed bg-white top-0 right-0 h-full z-30 transition-all ${isOpen ? "w-full sm:w-[26rem]" : "w-[0rem]"}`} style={{}}>
                <div className="p-10 relative w-full">
                    <button
                        onClick={closeCart}
                        type="button"
                        className="absolute top-[5px] right-[5px] bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <span className="sr-only">Close menu</span>
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col">
                        {cartItems.map(item => {
                            return <CartItem key={item.id} {...item}></CartItem>;
                        })}
                        <div className="ms-auto font-bold font-2xl text-end mt-10">
                            Total:{" "}
                            {formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const item = storeItems.find(i => i.id === cartItem.id);
                                    const price = item?.promoPrice ? item?.promoPrice : item?.price;
                                    return total + (price || 0) * cartItem.quantity;
                                }, 0)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
