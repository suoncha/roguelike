import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { store } from './store'
import { Provider } from 'react-redux'

const theme = createTheme({
  typography: {
    fontFamily: 'Marvel',
    // fontSize: 30
    fontSize: 15,
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
