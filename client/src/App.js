import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Activities from './Components/Activities';
import Carousel from './Components/carousel';

function App() {
  return (
    <div className="App w-full">
      <Hero></Hero>
      <About></About>
      <Activities></Activities>
     <Carousel></Carousel>
    </div>
  );
}

export default App;
