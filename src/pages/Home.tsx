import {Carousel} from "react-bootstrap";

export function Home() {
    return (
        <Carousel interval={2500} fade className="h-50 bg-#303036">
            <Carousel.Item className="d-flex justify-content-center">
                <img
                    alt="first slide"
                    src="https://i.ibb.co/9W3TYxw/image.png"
                    style={{objectFit: "contain"}}
                ></img>
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center">
                <img
                    alt="second slide"
                    src="https://s1.meble.pl/gfx/_zdjecia_wspolne/sklep_oferta/4/582/4582170/kszafa_z_lustrem_3_drzwiowa_kora_ks2_2_szuflady____3902686520.jpg"
                    style={{objectFit: "contain"}}
                ></img>
            </Carousel.Item>
            <Carousel.Item className="d-flex justify-content-center">
                <img
                    alt="second slide"
                    src="https://s1.meble.pl/gfx/_zdjecia_wspolne/sklep_oferta/2/729/2729461/kloze_z_wezglowiem_tapicerowanym__velvet_74___pres_6718154267.jpg"
                    style={{objectFit: "contain"}}
                ></img>
            </Carousel.Item>
        </Carousel>
    );
}
