import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import Page from './page/Page';
import QuoteMachinePage from "./page/QuoteMachinePage";
import CalculatorPage from "./page/CalculatorPage";
import ClockPage from "./page/ClockPage";
import DrumMachinePage from './page/DrumMachinePage';
import MarkdownPage from './page/MarkdownPage';

const router = createHashRouter(
  [
    {
      path: "/",
      children: [
        {
          path: "freecode-frontend/",
          element: <Page />,
        },
        {
          path: "freecode-frontend/calculator",
          element: <CalculatorPage />,
        },
        {
          path: "freecode-frontend/clock",
          element: <ClockPage />,
        },
        {
          path: "freecode-frontend/quote-machine",
          element: <QuoteMachinePage />,
        },
        {
          path: "freecode-frontend/drum-machine",
          element: <DrumMachinePage />,
        },
        {
          path: "freecode-frontend/markdown",
          element: <MarkdownPage />,
        },
      ],
    },
  ]
);

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
