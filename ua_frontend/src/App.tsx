import Header from './components/Header/Header';
import Home from './pages/Home/HomeLayout';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products/index';
import  Product  from './pages/Products/Product';

const App = () => {
  let routes = (
    <Routes>
      <Route path='/:id' element={<Product/>} />
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:category' element={<Products/>}/>
    </Routes>
  )
  return (
    <>
      <Header/>
        <main >
          {routes}
        </main>
      <Footer/>
      </>
    
  );
}

export default App;
