import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { useContext } from "react";
import { LangProvider } from "./context/LangContext";

const Main = () => {
  const [mode] = useContext(ThemeContext);
  return (
    <div className={mode}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <LangProvider>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </LangProvider>
    </BrowserRouter>
  );
};

export default App;
