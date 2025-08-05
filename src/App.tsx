import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className='max-w-screen md:px-30 py-5 bg-green-950'>
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
