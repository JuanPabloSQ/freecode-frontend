import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import Page from './page/Page';
import QuoteMachinePage from "./page/QuoteMachinePage"

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/quote-machine" element={<QuoteMachinePage />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
