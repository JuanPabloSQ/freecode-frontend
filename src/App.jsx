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
          path: "/",
          element: <Page />,
        },
        {
          path: "calculator",
          element: <CalculatorPage />,
        },
        {
          path: "clock",
          element: <ClockPage />,
        },
        {
          path: "quote-machine",
          element: <QuoteMachinePage />,
        },
        {
          path: "drum-machine",
          element: <DrumMachinePage />,
        },
        {
          path: "markdown",
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
