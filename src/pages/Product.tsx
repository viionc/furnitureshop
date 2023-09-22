import {useParams} from "react-router-dom";
import storeItems from "../data/items.json";
import {Button, Card, Container} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext";

function Product() {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} =
        useShoppingCart();
    const params = useParams();
    const item = storeItems.filter(item => item.id === parseInt(params.id as string))[0];
    if (!item) return <h1 className="text-center py-5">Couldn't find an item with that ID.</h1>;
    const quantity = getItemQuantity(item.id);

    return (
        <Container className="text-black py-5 d-flex">
            <Card className="w-50 h-100 shadow">
                <img
                    src={item.imageUrl}
                    alt={`image_${item.name}`}
                    style={{objectFit: "cover"}}
                ></img>
            </Card>
            <div className="d-flex flex-column w-50 ps-5 gap-3">
                <div>
                    <p className="fs-3 border-bottom">{item.name}</p>
                    <p className="text-muted pb-3 border-bottom">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eos ut
                        illum fugit voluptate autem. Perspiciatis hic nam veniam laudantium,
                        deleniti cupiditate officia debitis omnis?
                    </p>
                </div>
                <div className="border-bottom">
                    <p className="text-end">Details:</p>
                    <div className="text-muted">
                        <p className="text-end">
                            Dimensions: {item.details.height}cm x {item.details.width}cm x{" "}
                            {item.details.depth}cm
                        </p>
                        <p className="text-end">Weight: {item.details.weight}kg</p>
                        <p className="text-end">Color: {item.details.color}</p>
                        <p className="text-capitalize text-end">Type: {item.category}</p>
                    </div>
                </div>
                {item.promoPrice ? (
                    <div className="fs-3">
                        <p className="text-end text-decoration-line-through m-0">
                            {formatCurrency(item.price)}
                        </p>
                        <p className="text-end text-success fw-bold">
                            {formatCurrency(item.promoPrice)}
                        </p>
                    </div>
                ) : (
                    <p className="text-end fs-3">{formatCurrency(item.price)}</p>
                )}
                <div className="">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(item.id)}>
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
                                <Button onClick={() => decreaseCartQuantity(item.id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(item.id)}>+</Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default Product;
