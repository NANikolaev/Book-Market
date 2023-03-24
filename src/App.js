import { Routes, Route, useNavigate } from "react-router-dom";

import { CatalogContext, OuthContext,ErrorContext } from "./contexts";

import { useCatalog, useLocalStorage,useErrors } from './hooks';

import GuardForGuest from './components/Guards/GuardForGuest';
import GuardForUser from './components/Guards/GuardForUser';

import Ellipse from "./components/Ellipse/Ellipse";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignUp from "./components/Sign-up/SignUp";
import SignIn from "./components/Sign-in/SignIn";
import Catalog from "./components/Catalog/Catalog";
import SearchResults from "./components/SearchResults/SearchResults";
import AddOffer from "./components/AddOffer/AddOffer";
import MyOffers from "./components/MyOffers/MyOffers";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Page404 from "./components/404/Page404";
import ErrorBox from "./components/ErrorBox/ErrorBox";


function App() {

  let [catalog, setCatalog] = useCatalog();
  let [user, changeUserState] = useLocalStorage('user');
  let [errors,showErros]=useErrors();
  let navigate = useNavigate();

  return (
    <OuthContext.Provider value={[user, changeUserState, navigate]}>
      <Ellipse />
      <Header />
      <main>
        <CatalogContext.Provider value={[catalog, setCatalog,navigate]}>
          <ErrorContext.Provider value={showErros}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog/*" element={<Catalog />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/book/details/:bookId/*" element={<Details />} />

            <Route element={<GuardForUser/>}>

            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />

            </Route>

            <Route element={<GuardForGuest/>}>

            <Route path="/add-offer" element={<AddOffer />} />
            <Route path="/user/:userId/offers" element={<MyOffers />} />
            <Route path="/user/:userId/cart" element={<Cart/>} />

            </Route>

            <Route path="*" element={<Page404/>}/>
          </Routes>
          </ErrorContext.Provider>
        </CatalogContext.Provider>
        <ErrorBox errors={errors}/>
      </main>
    </OuthContext.Provider>
  );
}

export default App;
