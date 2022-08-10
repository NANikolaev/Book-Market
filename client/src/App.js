
import { Routes, Route, useNavigate } from 'react-router-dom';

import useLocalStorage from "./hooks/useLocalStorage";
import OuthContext from "./contexts/OuthContext";
import GuardForGuest from './utils/GuardForGuest';
import GuardForUser from './utils/GuardForUser';

import Navigation from "./components/Navigation/Navigation"
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/MainPage/Home';
import About from './components/About/About';
import Books from './components/Catalog/Books';
import AddBook from './components/AddBook/AddBook';
import Details from './components/Details/Details';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import Offers from './components/Offers/Offers';
import Page404 from './components/404/404';


function App() {

  let [user, changeUserState] = useLocalStorage('user')
  let navigate = useNavigate()



  return (
    <OuthContext.Provider value={[user, changeUserState, navigate]}>
      <div className="App">
        <Navigation />
        <main>

          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/books/*' element={<Books />} />
            <Route path='/search' element={<Search />} />
            <Route path='/book/details/:bookId/*' element={<Details />} />

            <Route element={<GuardForUser/>}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>

            <Route element={<GuardForGuest />}>
              <Route path='/add-book' element={<AddBook />} />
              <Route path='/user/cart' element={<Cart />} />
              <Route path='/user/offers' element={<Offers />} />
            </Route>

            <Route path='*' element={<Page404 />} />
          </Routes>
          
        </main>
      </div>
    </OuthContext.Provider>
  );
}

export default App;
