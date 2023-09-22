import {Container} from "react-bootstrap";
import kitchenImage from "../assets/kitchen.jpg";
import officeImage from "../assets/office.jpg";
import livingroomImage from "../assets/livingroom.jpg";

export function Home() {
    return (
        <Container className="pt-5 d-flex align-items-center flex-column">
            <Container className="d-flex flex-row gap-3">
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
            <span className="text-black fs-3 pt-4">
                With our furniture life is <strong>easier</strong>.
            </span>
        </Container>
    );
}
