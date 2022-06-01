import React, { useEffect} from "react";
import './App.css';

function App() {

  useEffect(() => {
    document.title = "Home Page"
  }, [])

  return (
    <div className="App">
      <div className="navbar">
        <header className="navbar-header">
          <h1>ReviewSite</h1>
          <h3>Login</h3>
        </header>
      </div>
    </div>
  );
}

export default App;
