import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Activities from './Components/Activities';
import Offerings from './Components/Offers';

function App() {
  return (
    <div className="App w-full">
      <Hero></Hero>
      <About></About>
      <Activities></Activities>
      <Offerings></Offerings>
    </div>
  );
}

export default App;
