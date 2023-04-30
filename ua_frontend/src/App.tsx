import Header from './components/Header/Header';
import Home from './pages/Home/HomeLayout';
import Footer from './components/Footer/Footer';
import { Route, Routes,  } from 'react-router-dom';
import { Products } from './pages/Products/index';
import  Product  from './pages/Products/Product';
import  Profile  from './pages/Profile/index';
import Cart from './pages/Cart/Cart';
import Signup from './pages/Authentication/Signup/Signup';
import ProtectedRoutes from './routers/ProtectedRoutes';

const App = () => {
  let routes = (
    <Routes>
      <Route path='/:id' element={<Product/>} />
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:category' element={<Products/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route element={<ProtectedRoutes/>}>
        <Route path='user'>
          <Route index element={<Profile/>}/>
          <Route path=':userId' element={<Profile/>}/>
          {/* <Route index element={<Cart/>} />
          <Route path='/cart/:cartId' element={<Cart/>} /> */}
        </Route>
        <Route path='cart'>
          <Route index element={<Profile/>}/>
          <Route path=':cartId' element={<Cart/>} />
        </Route>
      </Route>
    </Routes>
  )
  return (
    <>
      <Header/>
        <main className='h-screen'>
          {routes}
        </main>
      <Footer/>
      </>
    
  );
}

export default App;
