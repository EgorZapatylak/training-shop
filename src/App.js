import './App.css';
import {Header} from './components/Header/Header.js';
import Main from './pages/Main/Main.js';
import {Footer} from "./components/Footer/Footer.js"
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Product from "./pages/Product/Product";
import {Contact} from "./components/Contact/Contact";
import {Blog} from "./components/Blog/Blog";
import NotFoundPage from "./components/NotFoundPage";
import {CompareProvider} from "./context/CompareContext";
import CompareBar from "./components/CompareBar/CompareBar";
import ComparePage from "./components/ComparePage/ComparePage";
import {UserDashboard} from "./components/UserDashboard/UserDashboard";
import {FavoritesProvider} from "./components/FavoritPage/FavotirContext";

// Импортируем

const App = () => {
    return (
        <FavoritesProvider>
            <CompareProvider>
                <div className="App">
                    <Router>
                        <Header/>
                        <Routes>
                            <Route exact path="/" element={<Main/>}/>
                            <Route exact path="/men" element={<Men/>}/>
                            <Route exact path="/women" element={<Women/>}/>
                            <Route exact path="/:category/:id" element={<Product/>}/>
                            <Route exact path="/contact" element={<Contact/>}/>
                            <Route exact path="/blog" element={<Blog/>}/>
                            <Route exact path='/compare' element={<ComparePage/>}/>
                            <Route exact path='/dashboard' element={<UserDashboard/>}/>
                            <Route exact path = '*' element={<NotFoundPage/>}/>
                        </Routes>
                        <CompareBar/>
                        <Footer/>
                    </Router>
                </div>
            </CompareProvider>
        </FavoritesProvider>

    );
}

export default App;