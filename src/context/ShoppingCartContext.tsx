import {ReactNode, createContext, useContext, useState} from "react";
import {ShoppingCart} from "../components/ShoppingCart";
import {useLocalStorage} from "../hooks/useLocalStorage";

type ShoppingCartContext = {
    cartQuantity: number;
    cartItems: CartItem[];
    currentCategory: Categories;
    priceRange: number[];
    hasPromoActive: boolean;
    nameFilter: string;
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    changeCategory: (category: Categories) => void;
    changePriceRange: (prices: number[]) => void;
    changeHasPromoActive: () => void;
    changeNameFilter: (name: string) => void;
};

export type Categories = "all" | "chair" | "table" | "bed" | "wardrobe";

type CartItem = {
    id: number;
    quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps = {
    children: ReactNode;
};

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", []);
    const [isOpen, setIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<Categories>("all");
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [hasPromoActive, setHasPromoActive] = useState(false);
    const [nameFilter, setNameFilter] = useState("");

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    const changeCategory = (category: Categories) => setCurrentCategory(category);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}];
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        });
    }
    function changePriceRange(prices: number[]) {
        setPriceRange(prices);
    }
    function changeHasPromoActive() {
        setHasPromoActive(!hasPromoActive);
    }
    function changeNameFilter(name: string) {
        setNameFilter(name);
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                cartQuantity,
                currentCategory,
                priceRange,
                hasPromoActive,
                nameFilter,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                changeCategory,
                changePriceRange,
                changeHasPromoActive,
                changeNameFilter,
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}
