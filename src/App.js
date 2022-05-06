import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additems from './comoponents/Additems/Additems';
import Footer from './comoponents/Footer/Footer';
import Header from './comoponents/Header/Header';
import Home from './comoponents/Home/Home';
import PageNotFound from './comoponents/PageNotFound/PageNotFound';
import Signin from './comoponents/Signin/Signin';
import SignUp from './comoponents/SignUp/SignUp';

function App() {
  
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/Additems' element={<Additems></Additems>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
