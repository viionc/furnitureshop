import {useShoppingCart} from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import {formatCurrency} from "../utilities/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if (item == null) return null;
    const itemPrice = item.promoPrice ? item.promoPrice : item.price;
    return (
        <div className="flex items-center">
            <img src={`/products/${item.imageUrl}`} className="w-[100px] h-[50px] object-contain" />
            <div className="me-auto flex flex-col">
                <div>
                    {item.name} {quantity > 1 && <span className="text-gray-500 text-sm">x{quantity}</span>}
                </div>
                {!item.promoPrice ? (
                    <div className="text-gray-500 text-sm">{formatCurrency(itemPrice)}</div>
                ) : (
                    <div className="flex gap-2">
                        <div className="text-gray-500 text-sm line-through">{formatCurrency(itemPrice)}</div>
                        <div className="text-lime-600 text-sm">{formatCurrency(item.promoPrice)}</div>
                    </div>
                )}
            </div>
            <div>{formatCurrency(itemPrice * quantity)}</div>
            <button className="hover:opacity-25 flex items-center justify-center rounded-xl" onClick={() => removeFromCart(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
            </button>
        </div>
    );
}
