import Content from "./components/Content";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content/>
      <Features/>
    </div>
  );
}

export default App;
