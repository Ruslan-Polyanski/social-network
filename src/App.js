import HeaderContainer from "./components/header/HeaderContainer.jsx";
import Nav from "./components/nav/Nav";
import DialogsContiner from "./components/section/dialogs/DialogsContiner.jsx";
import Footer from "./components/footer/Footer";
import News from "./components/section/news/News";
import Music from "./components/section/music/Music";
import 'normalize.css';
import "./App.scss"
import { Route, Routes } from "react-router-dom";
import Settings from "./components/section/settings/Settings";
import UsersContiner from "./components/section/users/UsersContiner.jsx";
import SectionContainer from "./components/section/SectionContainer";
import LoginContainer from "./components/login/LoginContainer"
import React from "react";
import { initialThunkCreator } from "./components/redux/reducerApp";
import  { connect }  from "react-redux/es/exports";
import { compose } from "redux";
import Preloader from "./components/preloader/Preloader.jsx";


class App extends React.Component {

  componentDidMount(){
    this.props.initialThunkCreator()
  }

  render(){
    if(!this.props.initial){
      return <Preloader />
    }
    return (
      <div className="app">
        <HeaderContainer />
        <Nav navItem={this.props.navItem} friends={this.props.friends}/>
        <div className="background">
          <Routes>
            {/* <Route path="/profile" element={<SectionContainer />} /> */}
            <Route path="/profile/:userId" element={<SectionContainer />} />
            <Route path="/dialogs/*" element={<DialogsContiner />} />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/users" element={<UsersContiner/>} />
            <Route path="/login" element={<LoginContainer/>} />
            {/* <Route path="*" element={"not found"} /> */}
          </Routes>
        </div>
        <Footer/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    initial: state.app.initial,
  }
}

export default compose(
  connect(mapStateToProps, {initialThunkCreator})
)(App)

