import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Store} from "./pages/Store";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <footer
                id="sticky-footer"
                className="flex-shrink-0 bg-dark py-4 text-white-50 position-fixed w-100 bottom-0"
                style={{height: "30px"}}
            >
                <div className="container text-center">
                    <small>Copyright &copy; Your Website</small>
                </div>
            </footer>
        </ShoppingCartProvider>
    );
}

export default App;
