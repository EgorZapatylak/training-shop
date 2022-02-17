import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './pages/Main/Main.js';
import Footer from "./components/Footer/Footer.js"
import Women from './pages/Women/Women.js';
import Men from './pages/Men/Men.js';
import Product from './pages/Product/Product.js';

function App() {
    return ( 
    <div className = "App" >
        <Header/>
        <Product/>
        <Footer />
    </div>
    );
}

export default App;