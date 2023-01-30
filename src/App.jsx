import { Brand, CTA, Navbar } from "./components";
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
      <div className="bg__gradient">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
