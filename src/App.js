import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Dialogs from "./components/section/dialogs/Dialogs";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";
import News from "./components/section/news/News";
import Music from "./components/section/music/Music";
import 'normalize.css';
import "./App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/section/settings/Settings";



const App = ({dispatch, dataTextArea, dataContentTextArea, friends, dataPost, dataDialogs, dataText, navItem}) => {

  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <Nav navItem={navItem} friends={friends}/>
      <div className="background">
        <Routes>
          <Route path="/profile" element={<Section dispatch={dispatch} dataTextArea={dataTextArea} dataPost={dataPost}/>} />
          <Route path="/dialogs/*" element={<Dialogs dispatch={dispatch} dataContentTextArea={dataContentTextArea} dataDialogs={dataDialogs} dataText={dataText} />} />
          <Route path="/news" element={<News/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="*" element={"not found"} />
        </Routes>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;
