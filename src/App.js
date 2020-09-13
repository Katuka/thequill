import React from "react";
import "./App.css";
import Bloglist from "./components/bloglist/bloglist";
import Hero from "./components/hero/hero";
import Navigation from "./components/navigation/navigation";
import Tag from "./components/tags/tag";

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Tag />
      <Bloglist />
    </main>
  );
}

export default App;
