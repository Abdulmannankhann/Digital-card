import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
import "./components/Style.css";

function App() {
  return (
    <main className="Container">
      <div className="incoloum">
        <Info />
        <About />
        <Interest />
      </div>
      <Footer />
    </main>
  );
}

export default App;
