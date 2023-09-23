import {Container} from "react-bootstrap";
import kitchenImage from "../assets/kitchen.jpg";
import officeImage from "../assets/office.jpg";
import livingroomImage from "../assets/livingroom.jpg";
import storeItems from "../data/items.json";
import {useNavigate} from "react-router-dom";

export function Home() {
    const promoItems = storeItems.filter(item => item.promoPrice);
    const navigate = useNavigate();

    return (
        <Container className="pt-5 d-flex align-items-center flex-column flex-wrap">
            <Container className="d-flex flex-row gap-3 justify-content-center flex-wrap">
                <img
                    src={kitchenImage}
                    alt="kitchen"
                    height={400}
                    width={400}
                    style={{objectFit: "cover"}}
                ></img>
                <img
                    src={livingroomImage}
                    alt="livingroom"
                    height={400}
                    width={400}
                    style={{objectFit: "cover"}}
                ></img>
                <img
                    src={officeImage}
                    alt="office"
                    height={400}
                    width={400}
                    style={{objectFit: "cover"}}
                ></img>
            </Container>
            <span className="text-black fs-3 pt-4 border-bottom">
                With our furniture life is <strong>easier</strong>.
            </span>
            <p className="fs-4 mt-5">Current Promotions</p>
            <Container className="w-100 d-flex overflow-scroll overflow-y-hidden">
                {promoItems.map(item => {
                    return (
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            height={200}
                            width={300}
                            className="border card-img"
                            style={{cursor: "pointer", overflow: "hidden"}}
                            onClick={() => navigate(`/furnitureshop/store/${item.id}`)}
                        />
                    );
                })}
            </Container>
        </Container>
    );
}
