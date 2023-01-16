import { BrowserRouter as Roter, Route,Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Register from './components/pages/register/Register'
import Comment from './components/pages/comment/Comment'
import SignIn from "./components/pages/signIn/SignIn";



function App() {
  return (
    <Roter>
      <Nav/>
      <Routes>
        <Route path="/" element ={<Home/> }/>
        <Route exact path="/About" element={<About/>}/> 
        <Route exact path="/Contact" element={<SignIn/>}/> 
        <Route exact path="/Register" element={<Register/>}/> 
        <Route exact path="/Comment" element={<Comment/>}/> 
      </Routes>
    </Roter>
  );
}

export default App;
