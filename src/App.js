import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(process.env)
    return (
      <Router history={history}>
    <div className="App">
        <nav class="navbar navbar-expand-sm bg-light">
          <ul className="ul-list">
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/brand"></Link>
            </li>
            <li>
              <Link to="/leadership"></Link>
            </li>
            <li>
              <Link to="/code"></Link>
            </li>
            <li>
                <Link to="/aboutme"></Link>
            </li>
            <li>
                <Link to="/contact"></Link>
            </li>
          </ul>
        </nav>

    <section>
    <section>
    <section class="hero-unit">
      <section class="bubble-box">
        <h1 class="text-center">Manuel Solis PSM, PSPO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <h2 class="text-center">Project Manager&nbsp;&nbsp;&nbsp;&nbsp;</h2>
      <img class="headshot" src="images/Manuel-Headshot.jpeg" alt="Manuel Solis" width="200" height="200"/>
      <section>
      <blockquote class="blockquote text-muted text-right">
        <h2>&nbsp;</h2>
        <h3> "If you think you can or you can't, either way you are right"</h3>
        <cite title="Henry Ford">Henry Ford</cite>
        </blockquote>
        </section>
    </section>
    </section>
    </section>
    </section>
    <section class="section-projects">
      <section class="section-projects-images">
      <a class="button" href="/brand.html">
            <img class="square" src="images/branding.jpg" alt="Branding" height="140" width="auto"/>
          </a>
          <a href="/projects.html">
            <img class="square" src="images/Innovation.png" alt="leadership" height="150" width= "auto"/>
          </a>
          <a href="/projects.html">
            <img class="square" src="images/software-developer-code.jpg" alt="Software-code" height="140" width= "auto"/>
          </a>
      </section>
    </section>
      <section class="section-header-react">
      <img src={logo} className="App-logo" alt="logo"/>
      </section>
  </div>

  <div>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/brand" exact component={Brand} />
              <Route path="/leadership" exact component={Leadership} />
              <Route path="/code" exact component={Code} />
              <Route path="/aboutme" exact component={AboutMe} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </div>
  );
}

export default App;
