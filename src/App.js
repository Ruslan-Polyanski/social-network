import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import DialogsContiner from "./components/section/dialogs/DialogsContiner.jsx";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";
import News from "./components/section/news/News";
import Music from "./components/section/music/Music";
import 'normalize.css';
import "./App.scss"
import { Route, Routes } from "react-router-dom";
import Settings from "./components/section/settings/Settings";
import UsersContiner from "./components/section/users/UsersContiner.jsx";



const App = ({dispatch, 
              dataTextArea, 
              dataContentTextArea, 
              friends, 
              dataPost, 
              dataDialogs, 
              dataText, 
              navItem}) => {

  return (
    <div className="app">
      <Header/>
      <Nav navItem={navItem} friends={friends}/>
      <div className="background">
        <Routes>
          <Route path="/profile" element={<Section />} />
          <Route path="/dialogs/*" element={<DialogsContiner />} />
          <Route path="/news" element={<News/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/users" element={<UsersContiner/>} />
          <Route path="*" element={"not found"} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
