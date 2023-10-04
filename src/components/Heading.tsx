import {Categories, useShoppingCart} from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import {Link, useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";

function Heading() {
    const {nameFilter, changeNameFilter, changeCategory, currentCategory} = useShoppingCart();
    const categories = ["all", ...new Set(storeItems.map(item => item.category))];
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate("/store");
    };

    const handleLink = (category: Categories) => {
        changeCategory(category);
    };

    return (
        <section className="w-full sm:w-3/4 flex flex-col justify-center items-center py-10">
            <div className="flex w-full items-center justify-center flex-wrap h-[12rem] ">
                <img src="/logo.png" alt="logo" className="object-scale-down"></img>
                <form onSubmit={e => handleSubmit(e)} className="relative">
                    <input
                        aria-label="name"
                        value={nameFilter}
                        className="h-[2.2rem] rounded-lg"
                        onFocus={() => setShow(true)}
                        onBlur={() => {
                            setTimeout(() => {
                                setShow(false);
                            }, 100);
                        }}
                        onChange={e => {
                            changeNameFilter(e.target.value);
                        }}
                        placeholder="Search items"
                    />
                    <div className="absolute top-10 left-0 bg-white rounded-lg ">
                        {show &&
                            nameFilter.length > 1 &&
                            storeItems
                                .filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase()))
                                .map(item => (
                                    <div
                                        onClick={() => {
                                            navigate(`/store/product/${item.id}`);
                                        }}
                                        key={item.id}
                                        className="flex p-1 items-center cursor-pointer z-50 gap-2"
                                    >
                                        <img src={`/products/${item.imageUrl}`} className="h-[50px] w-[60px]"></img>
                                        {item.name}
                                    </div>
                                ))}
                    </div>
                </form>
            </div>
            <div className="flex w-1/2 justify-center border-b flex-wrap">
                {categories.map(category => {
                    return (
                        <Link
                            key={category}
                            to="/store"
                            className={`top-categories text-black decoration-none cursor-pointer hover:bg-opacity-60 hover:bg-[antiquewhite] ${
                                currentCategory === category ? "active" : ""
                            }`}
                            onClick={() => handleLink(category as Categories)}
                        >
                            <span className="capitalize text-xl px-5">{category}</span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default Heading;
