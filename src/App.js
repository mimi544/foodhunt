import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, CreateContainer, MainContainer } from "./components";
//import { Header } from './components';//

const App = () => {
  return (
    <Router>
      <div className="w-screen h-auto flex flex-col bg-cyan-300">
        <Header />
        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;