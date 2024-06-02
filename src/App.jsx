import Page from "./page/Page"
import { ThemeContextProvider } from "./context/ThemeContext"

function App() {
  return (
    <div>
    <ThemeContextProvider>
      <Page/>
    </ThemeContextProvider>
    </div>
  )
}

export default App
