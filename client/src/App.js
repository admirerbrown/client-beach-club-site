import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Activities from './Components/Activities';
import Offerings from './Components/Offers';
import Reservation from './Components/Booking';
import RenderMenu from './Components/Menu';
import RenderTestimonials from './Components/Testimonials';
import Footer from './Components/footer';
import RenderBlogPosts from './Components/Blog';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <Activities></Activities>
      <Offerings></Offerings>
      <Reservation ></Reservation>
      <RenderMenu ></RenderMenu>
      <RenderTestimonials ></RenderTestimonials>
      <RenderBlogPosts></RenderBlogPosts>
      <Footer></Footer>
    </div>
  );
}

export default App;
