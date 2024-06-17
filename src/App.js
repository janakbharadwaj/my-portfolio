import React from "react";
import "./App.css";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import NewHead from "./components/NewHead";


function App() {
  return (
    <div>
      <NewHead/>
      <Contact />
      <Skills/>
      <Projects />
    </div>
  );
}

export default App;

// npm install --save-dev @iconify/react @iconify-icons/simple-icons
// import { Icon, InlineIcon } from '@iconify/react';
// import hashnodeIcon from '@iconify-icons/simple-icons/hashnode';

//gh-pages deploying
//https://www.youtube.com/watch?v=2hM5viLMJpA
