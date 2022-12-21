import './App.css';
import Footer from './container/Footer/Footer';
import { Header } from './container/Header/Header';
import  ProductList from './container/ProductList/ProductList'
function App() {
 
  return (
    <div>
      <Header/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
