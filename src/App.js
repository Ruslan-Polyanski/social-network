import "./App.scss"
import 'normalize.css';

const App = () => {

  return (
    <div className="app">
      <header className="header">
        <a href="/" className="header__logo">
          <img src="https://cdn-icons-png.flaticon.com/512/4260/4260120.png" alt="logo" className="header__img"/>
        </a>
      </header>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="/" className="nav__link">Profile</a></li>
          <li className="nav__item"><a href="/" className="nav__link">Messages</a></li>
          <li className="nav__item"><a href="/" className="nav__link">News</a></li>
          <li className="nav__item"><a href="/" className="nav__link">Music</a></li>
        </ul>
      </nav>
      <section className="section">
        <article className="article">
          <div>
            <div className="avatar">avatar</div>
            <div className="description">description</div>
          </div>
          <div>
            <div className="title">My post</div>
            <div className="post">sdfas asdfasf asdfsaf asddfasdfas asddfasdfas asdfasdfsaf asdfsaf</div>
          </div>
        </article>
ddd
      </section>
      <footer className="footer">
ddd
      </footer>
    </div>
  )
}

export default App;
