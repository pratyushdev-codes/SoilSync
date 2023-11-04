import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Features from './Components/Features';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
     <Banner/>
     <Navbar/>
     {/* <Features/>
     <Weather/> */}
    </div>
  );
}

export default App;
