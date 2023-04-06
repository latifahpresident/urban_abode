import Header from './components/Header/Header';
import Home from './pages/Home/HomeLayout';
// import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products/index'
const App = () => {
  let routes = (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>} />
    </Routes>
  )
  return (
    <>
      <Header/>
        <main >
          {routes}
        </main>
      </>
    
  );
}

export default App;
