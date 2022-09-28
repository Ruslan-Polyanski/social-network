import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Dialogs from "./components/section/dialogs/Dialogs";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";
import 'normalize.css';
import "./App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {

  return (
  
    <div className="app">
      <Header/>
      <Nav/>
      <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Section />}/>
          <Route path="/dialogs" element={<Dialogs />}/>
          <Route path="*" element={"not found"}/>
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
