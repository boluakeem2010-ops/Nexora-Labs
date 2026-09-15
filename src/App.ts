import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./skills";
import Projects from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";
import CTA from "./CTA";
import Footer from "./Footer";

const h = React.createElement;

function App() {
  return h(
    React.Fragment,
    null,

    h(Navbar),

    h(
      "main",
      null,
      h(Hero),
      h(About),
      h(Skills),
      h(Projects),
      h(Experience),
      h(Contact),
      h(CTA),
    ),

    h(Footer),
  );
}

export default App;
