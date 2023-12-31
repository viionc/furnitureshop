import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Store} from "./pages/Store";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";
import "./app.css";
import Heading from "./components/Heading";
import Product from "./pages/Product";

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <Heading></Heading>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
                <Route path="/store/product/:id" element={<Product />} />
            </Routes>
            <footer className="bg-zinc-700 text-2xl text-white w-full h-[40px] flex justify-center items-center z-20 mt-auto">
                <small>Copyright &copy; 2023 Furniture Shop </small>
            </footer>
        </ShoppingCartProvider>
    );
}

export default App;
