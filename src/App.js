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
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/aboutme" element={<AboutMe></AboutMe>} />
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/confirmbooking/:id' element={
         <ConfirmBooking></ConfirmBooking>
      
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Header></Header>
    </div>
  );
}

export default App;
