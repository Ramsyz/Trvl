import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Plan from "./components/Plan"; 
import Rooms from './components/Rooms';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <Footer/>
    </div>
  );
}

export default App;
