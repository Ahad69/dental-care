import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import ConfirmBooking from './Pages/ConfirmBokking/ConfirmBooking';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Auth/RequireAuth/RequireAuth';
import SignIn from './Auth/SignIn/SignIn';
import SignUp from './Auth/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/aboutme" element={<AboutMe></AboutMe>} />
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/confirmbooking/:id' element={
          <RequireAuth>   <ConfirmBooking></ConfirmBooking></RequireAuth>
      
      
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
