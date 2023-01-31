import "./App.css";
import { Brand, GetStarted, Navbar } from "./components";
import {
  Blog,
  Features,
  Header,
  Footer,
  WhatGPT3,
  Possibility,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <GetStarted />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
