import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav" >
          <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="projects.html">Projects</a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutme.html">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contactme.html">Contact</a>
            </li>
        </ul>
      </nav>
    <section >
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
  );
}

export default App;
