import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Info from './components/Info';
import  Slider from './components/Slider_Comp';
import Comp2 from './components/Comp2';
import VerticalProgressBar from './components/progressbar';
import Info2 from './components/Info2';
import Info3 from './components/Info3';
import Info4 from './components/Info4';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Info />
      <Slider />
      <Comp2/>
      <VerticalProgressBar/>
      <Info2/>
      <Info3/>
      <Info4/>
    </div>
  );
}
export default App;