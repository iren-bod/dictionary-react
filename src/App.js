import React from "react";
import logo from "./img/logo.png";
import "./App.css";

import Dictionary from "./Dictionary/Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/iren-bod/dictionary-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Iryna Bodak
        </footer>
      </div>
    </div>
  );
}
