import {motion} from "framer-motion";

export function About() {
    return (
        <motion.section initial={{x: -100}} animate={{x: 0}} className="text-black flex flex-col items-center w-3/4">
            <h1 className="py-4 text-4xl">About</h1>
            <div className="text-xl w-3/4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laboriosam id error fugit accusantium nesciunt dolores voluptate,
                    at vero pariatur dolor, officiis illum tenetur quo!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse laudantium pariatur minima nemo a enim incidunt accusamus facere
                    laborum ipsum. Quidem doloribus non maxime repellat esse quae ullam, unde eum fugiat nobis eligendi beatae quam impedit aliquam
                    eos soluta quis iusto excepturi asperiores, illo nulla odio corporis quo praesentium. Expedita.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, alias quo at exercitationem assumenda aut quis nesciunt
                    veritatis, perspiciatis explicabo cumque officia! Dolores veritatis sapiente alias hic neque impedit unde atque repudiandae esse
                    natus.
                </p>

                <p>Lorem, ipsum dolor.</p>
            </div>
            <img src="/insideshop.png" alt="inside-shop" className="p-5"></img>
        </motion.section>
    );
}
