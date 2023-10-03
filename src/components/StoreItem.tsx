import {formatCurrency} from "../utilities/formatCurrency";
import {Categories, useShoppingCart} from "../context/ShoppingCartContext";
import {useNavigate} from "react-router-dom";

export type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: Categories;
    promoPrice?: number;
};

export function StoreItem({id, name, price, imageUrl, promoPrice}: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();

    const navigate = useNavigate();
    const quantity = getItemQuantity(id);
    return (
        <div
            className="text-black flex flex-col content-center shadow-lg overflow-hidden w-[300px] h-[350px] bg-gray-200 rounded-lg"
            style={{
                flex: "1, 1, 0px",
                overflow: "hidden",
            }}
        >
            <img
                src={`/products/${imageUrl}`}
                className="h-[200px] w-[300px] object-contain cursor-pointer overflow-hidden hover:scale-125 transition-all"
                onClick={() => navigate(`/furnitureshop/store/product/${id}`)}
            ></img>
            <div className="flex flex-col w-full z-10 px-4 justify-between h-[150px] pb-4 bg-gray-200">
                <div className="w-full flex justify-between items-baseline pt-2">
                    <span className="text-lg text-black">{name}</span>
                    {!promoPrice ? (
                        <span className="text-black">{formatCurrency(price)}</span>
                    ) : (
                        <div className="flex flex-col">
                            <span className="text-black line-through">{formatCurrency(price)}</span>
                            <span className="text-lime-600">{formatCurrency(promoPrice)}</span>
                        </div>
                    )}
                </div>
                <div className="flex justify-center">
                    {quantity === 0 ? (
                        <button
                            className=" bg-zinc-700 text-white rounded-xl flex justify-center items-center p-2 hover:bg-opacity-25 active:scale-105"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex items-center gap-[0.5rem]">
                            <div className="flex items-center content-center gap-[0.5rem]">
                                <button
                                    className="h-[2rem] w-[2rem] flex items-center justify-center bg-slate-600 text-white text-2xl hover:bg-opacity-25 rounded-lg"
                                    onClick={() => decreaseCartQuantity(id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </button>
                                <div>
                                    <span className="text-lg">{quantity}</span> in cart
                                </div>
                                <button
                                    className="h-[2rem] w-[2rem] flex items-center justify-center bg-slate-600 text-white text-2xl hover:bg-opacity-25 rounded-lg"
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                            <button
                                className=" bg-red-400 text-white rounded-xl flex justify-center items-center h-[2rem] px-2 hover:bg-opacity-25 active:scale-105"
                                onClick={() => removeFromCart(id)}
                            >
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
