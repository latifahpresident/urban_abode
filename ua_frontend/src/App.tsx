import Header from './components/Header/Header';
// import Nav from './components/Nav/nav'
import Home from './pages/Home/HomeLayout';
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
      {/* <Nav/> */}
      {routes}
    </>
    
  );
}

export default App;
