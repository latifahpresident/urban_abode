import Header from './components/Header/Header';
import Home from './pages/Home/HomeLayout';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  let routes = (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
  return (
    <>
      <Header/>
        {routes}
      <Footer/>
    </>
    
  );
}

export default App;
