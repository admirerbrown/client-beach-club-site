import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
// import AnimatedButton from './Components/newBtn';

function App() {
  return (
    <div className="App w-full">
      <Hero></Hero>
      <About></About>
      {/* <AnimatedButton text="new man"></AnimatedButton> */}
    </div>
  );
}

export default App;
