import {useParams} from "react-router-dom";
import storeItems from "../data/items.json";
import {formatCurrency} from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext";

function Product() {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const params = useParams();
    const item = storeItems.filter(item => item.id === parseInt(params.id as string))[0];
    if (!item) return <h1 className="text-center py-5">Couldn't find an item with that ID.</h1>;
    const quantity = getItemQuantity(item.id);

    return (
        <section className="text-black py-5 flex w-3/4">
            <div className="w-1/2 h-full flex justify-center ">
                <img src={`/products/${item.imageUrl}`} alt={`image_${item.name}`} className="object-cover shadow-2xl"></img>
            </div>
            <div className="flex flex-col w-1/2 ps-5 gap-3">
                <div>
                    <p className="text-2xl border-b">{item.name}</p>
                    <p className="text-gray-500 pb-3 border-b text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eos ut illum fugit voluptate autem. Perspiciatis hic nam
                        veniam laudantium, deleniti cupiditate officia debitis omnis?
                    </p>
                </div>
                <div className="border-b">
                    <p className="text-end">Details:</p>
                    <div className="text-gray-500 text-lg">
                        <p className="text-end">
                            Dimensions: {item.details.height}cm x {item.details.width}cm x {item.details.depth}cm
                        </p>
                        <p className="text-end">Weight: {item.details.weight}kg</p>
                        <p className="text-end">Color: {item.details.color}</p>
                        <p className="capitalize text-end">Type: {item.category}</p>
                    </div>
                </div>
                {item.promoPrice ? (
                    <div className="text-lg">
                        <p className="text-end line-through m-0">{formatCurrency(item.price)}</p>
                        <p className="text-end text-lime-600 font-bold">{formatCurrency(item.promoPrice)}</p>
                    </div>
                ) : (
                    <p className="text-end text-lg">{formatCurrency(item.price)}</p>
                )}
                <div className="flex justify-end">
                    {quantity === 0 ? (
                        <button
                            className=" bg-zinc-700 text-white rounded-xl flex justify-center items-center p-2 hover:bg-opacity-25 active:scale-105"
                            onClick={() => increaseCartQuantity(item.id)}
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex items-center gap-[0.5rem]">
                            <div className="flex items-center content-center gap-[0.5rem]">
                                <button
                                    className="h-[2rem] w-[2rem] flex items-center justify-center bg-slate-600 text-white text-2xl hover:bg-opacity-25 rounded-lg"
                                    onClick={() => decreaseCartQuantity(item.id)}
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
                                    onClick={() => increaseCartQuantity(item.id)}
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
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Product;
