
import './App.css';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './screens/ProductPage';
import SingleProduct from './screens/SingleProduct';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Contact from './screens/Contact';
import { Route, Switch } from 'react-router-dom'
import Try from './components/Try'
function App() {
  return (
    <>
    <Navbar/>
   <Switch>

   <Route exact path="/">
     <Home/>
   </Route>

   <Route exact path="/products">
      <ProductPage/>
   </Route>
  
   <Route exact path="/product">
      <SingleProduct/>
   </Route>
  
   <Route exact path="/login">
      <Login/>
   </Route>
  
   <Route exact path="/signup">
      <Signup/>
   </Route>
  
   <Route exact path="/contact">
      <Contact/>
   </Route>

   </Switch>
   <Footer/>
    </>
  );
}

export default App;
