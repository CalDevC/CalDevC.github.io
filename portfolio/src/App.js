import './App.css';
// import { render } from "react-dom";
// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h3 id="logo">Chase Alexander</h3>
        <nav className="main-nav">
          <a>Projects</a>
          <a>Work History</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </header>

      <h2>Hey, I'm Chase</h2>
      <div className="text-block">
        <p>
          I'm a
        </p>
        <p>Problem Solver</p>
        <p>
          from the San Francisco Bay Area.
        </p>
      </div>
    </div>
  );
}

export default App;
