import {Routes, Route, Navigate} from "react-router-dom";
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
                <Route index element={<Navigate to="/furnitureshop/" replace />} />
                <Route path="/furnitureshop/" element={<Home />} />
                <Route path="/furnitureshop/store" element={<Store />} />
                <Route path="/furnitureshop/about" element={<About />} />
                <Route path="/furnitureshop/store/product/:id" element={<Product />} />
            </Routes>
            <footer
                id="sticky-footer"
                className="bg-dark py-4 mt-5 text-white-50 w-100"
                style={{height: "30px"}}
            >
                <div className="container text-center">
                    <small>Copyright &copy; 2023 Furniture Shop </small>
                </div>
            </footer>
        </ShoppingCartProvider>
    );
}

export default App;
