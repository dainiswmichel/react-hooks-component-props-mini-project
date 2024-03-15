// App.js
import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      {/* article list */}
      {/* article */}
      {/* Minutes to read */}


    </div>
  );
}

export default App;