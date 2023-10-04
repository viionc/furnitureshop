import storeItems from "../data/items.json";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";
//@ts-ignore
import Typed from "typed.js";

export function Home() {
    const promoItems = storeItems.filter(item => item.promoPrice);
    const navigate = useNavigate();

    const ref = useRef(null);

    useEffect(() => {
        const typed = new Typed(ref.current, {
            strings: ["easier", "better", "cheaper"],
            typeSpeed: 125,
            backDelay: 700,
            loop: true,
            loopCount: Infinity,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <section className="pt-5 flex items-center flex-col flex-wrap w-full sm:w-3/4">
            <div className="flex gap-3 justify-center flex-wrap">
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
            <div className="w-full text-black text-4xl py-12 border-b-1 flex gap-2 relative justify-center">
                <div className="w-[34rem] ">
                    With our furniture life is <strong id="easier" ref={ref}></strong>
                </div>
            </div>
            <p className="text-xl mt-5">Current Promotions:</p>
            <div className="w-100 flex overflow-x-auto overflow-y-hidden mb-12 flex-wrap sm:flex-nowrap justify-center">
                {promoItems.map(item => {
                    return (
                        <img
                            key={item.id}
                            src={`/products/${item.imageUrl}`}
                            alt={item.name}
                            className="border cursor-pointer overflow-hidden h-[150px] w-[200px] object-cover hover:scale-110 transition-all ease-in-out"
                            onClick={() => navigate(`/store/product/${item.id}`)}
                        />
                    );
                })}
            </div>
        </section>
    );
}
