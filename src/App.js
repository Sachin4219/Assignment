import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';
import Navabr from './components/Navbar';
import Rules from './components/Rules';


function App() {
  return (
    <div className="App">
      <Navabr/>
      <Hero/>
      <Main/>
      <Rules/>
    </div>
  );
}

export default App;
