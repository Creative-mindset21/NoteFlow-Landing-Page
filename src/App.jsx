import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { createContext, useState } from "react";

const AppContext = createContext();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openLogin = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ isOpen, openLogin }}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Hero />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
};

export { AppContext };

export default App;
