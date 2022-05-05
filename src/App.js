import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addproduct from './comoponents/Addproduct/Addproduct';
import Header from './comoponents/Header/Header';
import Home from './comoponents/Home/Home';
import PageNotFound from './comoponents/PageNotFound/PageNotFound';

function App() {
  
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
