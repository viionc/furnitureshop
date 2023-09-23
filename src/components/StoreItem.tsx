import {Button, Card} from "react-bootstrap";
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
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} =
        useShoppingCart();

    const navigate = useNavigate();
    const quantity = getItemQuantity(id);
    return (
        <Card
            className="text-black align-content-center shadow"
            style={{
                flex: "1, 1, 0px",
                minWidth: "300px",
                maxWidth: "300px",
                overflow: "hidden",
            }}
        >
            <Card.Img
                variant="top"
                src={imageUrl}
                height="200px"
                style={{objectFit: "contain", cursor: "pointer", overflow: "hidden"}}
                className="card-img"
                onClick={() => navigate(`/furnitureshop/store/${id}`)}
            ></Card.Img>
            <Card.Body className="d-flex flex-column" style={{zIndex: 2}}>
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-4 text-black">{name}</span>
                    {!promoPrice ? (
                        <span className="text-black">{formatCurrency(price)}</span>
                    ) : (
                        <div className="d-flex flex-column">
                            <span className="text-black text-decoration-line-through">
                                {formatCurrency(price)}
                            </span>
                            <span className="text-success">{formatCurrency(promoPrice)}</span>
                        </div>
                    )}
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                            Add to Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{gap: ".5rem"}}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{gap: ".5rem"}}
                            >
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
