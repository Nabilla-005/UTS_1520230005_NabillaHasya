import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import ThemeProvider from "./Components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#171d32] text-black dark:text-white min-h-screen transition-colors duration-300">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

