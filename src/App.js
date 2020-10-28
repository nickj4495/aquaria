import React from "react";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
