import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import Page from './page/Page';
import QuoteMachinePage from "./page/QuoteMachinePage"
import CalculatorPage from "./page/CalculatorPage"
import ClockPage from "./page/ClockPage"
import DrumMachinePage from './page/DrumMachinePage';
import MarkdownPage from './page/MarkdownPage';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/freecode-frontend/" element={<Page />} />
          <Route path="/freecode-frontend/calculator" element={<CalculatorPage />} />
          <Route path="/freecode-frontend/clock" element={<ClockPage />} />
          <Route path="/freecode-frontend/quote-machine" element={<QuoteMachinePage />} />
          <Route path="/freecode-frontend/drum-machine" element={<DrumMachinePage />} /> 
          <Route path="/freecode-frontend/markdown" element={<MarkdownPage />} /> 
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
