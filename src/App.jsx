import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
