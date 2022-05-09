import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additems from './comoponents/Additems/Additems';
import Blog from './comoponents/Blog/Blog';
import Footer from './comoponents/Footer/Footer';
import Header from './comoponents/Header/Header';
import Home from './comoponents/Home/Home';
import ManageItems from './comoponents/ManageItems/ManageItems';
import Myitems from './comoponents/Myitems/Myitems';
import PageNotFound from './comoponents/PageNotFound/PageNotFound';
import ProductUpdate from './comoponents/ProductUpdate/ProductUpdate';
import RequirdAuth from './comoponents/RequirdAuth/RequirdAuth';
import Signin from './comoponents/Signin/Signin';
import SignUp from './comoponents/SignUp/SignUp';

function App() {
  
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/Additems' element={
          <RequirdAuth>
            <Additems></Additems>
          </RequirdAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequirdAuth>
            <ManageItems></ManageItems>
          </RequirdAuth>
        }></Route>
        <Route path='/updateitems/:id' element={
          <RequirdAuth>
            <ProductUpdate></ProductUpdate>
          </RequirdAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequirdAuth>
            <Myitems></Myitems>
          </RequirdAuth>
        }></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
