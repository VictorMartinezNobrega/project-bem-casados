import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <Home />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
