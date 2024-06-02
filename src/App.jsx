import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import Page from './page/Page';
import QuoteMachinePage from "./page/QuoteMachinePage"
import CalculatorPage from "./page/CalculatorPage"
import ClockPage from "./page/ClockPage"

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/quote-machine" element={<QuoteMachinePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/clock" element={<ClockPage />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
