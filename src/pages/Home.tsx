import storeItems from "../data/items.json";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

export function Home() {
    const promoItems = storeItems.filter(item => item.promoPrice);
    const navigate = useNavigate();

    return (
        <section className="pt-5 flex items-center flex-col flex-wrap w-3/4">
            <div className="flex gap-3 content-center flex-wrap">
                <motion.img
                    initial={{x: -500}}
                    animate={{x: 0}}
                    transition={{duration: 1}}
                    src="/kitchen.png"
                    alt="kitchen"
                    className="object-cover h-[400px] w-[400px]"
                ></motion.img>
                <img src="/livingroom.png" alt="livingroom" className=" h-[400px] w-[400px]"></img>
                <motion.img
                    initial={{x: 500}}
                    animate={{x: 0}}
                    transition={{duration: 1}}
                    src="/office.png"
                    alt="office"
                    className="object-cover h-[400px] w-[400px]"
                ></motion.img>
            </div>
            <motion.span
                initial={{y: 150}}
                animate={{y: 0}}
                transition={{type: "spring", duration: 1}}
                className="text-black text-4xl py-12 border-b-1"
            >
                With our furniture life is <strong>easier</strong>.
            </motion.span>
            <p className="text-xl mt-5">Current Promotions:</p>
            <div className="w-100 flex overflow-x-auto overflow-y-hidden mb-12">
                {promoItems.map(item => {
                    return (
                        <img
                            key={item.id}
                            src={`/products/${item.imageUrl}`}
                            alt={item.name}
                            className="border cursor-pointer overflow-hidden h-[150px] w-[200px] object-cover hover:scale-110 transition-all ease-in-out"
                            onClick={() => navigate(`/furnitureshop/store/product/${item.id}`)}
                        />
                    );
                })}
            </div>
        </section>
    );
}
