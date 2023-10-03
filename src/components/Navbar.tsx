import {Link} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext";

export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart();
    return (
        <header className="w-full h-[4rem] bg-[#FFCCB7] flex items-center justify-center">
            <nav className="w-full md:w-3/4 h-full flex relative items-center">
                <ul className="flex text-2xl h-full items-center ps-2 md:ps-[10rem]">
                    <li className="h-full">
                        <Link
                            to="/furnitureshop/"
                            className="w-[5rem] md:w-[7rem] lg:w-[10rem] h-full flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="h-full">
                        <Link
                            to="/furnitureshop/store"
                            className="w-[5rem] md:w-[7rem] lg:w-[10rem] h-full flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25"
                        >
                            Store
                        </Link>
                    </li>
                    <li className="h-full">
                        <Link
                            to="/furnitureshop/about"
                            className="w-[5rem] md:w-[7rem] lg:w-[10rem] h-full flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25"
                        >
                            About
                        </Link>
                    </li>
                </ul>
                <button
                    className="ms-auto me-10 rounded-2xl bg-gray-200 h-[3rem] w-[3rem] relative flex items-center justify-center hover:bg-opacity-[80%]"
                    onClick={openCart}
                >
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#000000">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    {cartQuantity > 0 && (
                        <div className="rounded-full bg-red-900 flex justify-center items-center text-white w-[1.5rem] h-[1.5rem] absolute right-[5px] bottom-0 translate-x-[25%] translate-y-[25%]">
                            {cartQuantity}
                        </div>
                    )}
                </button>
            </nav>
        </header>
    );
}