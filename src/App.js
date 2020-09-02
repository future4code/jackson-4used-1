import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Header from './components/Header'

const myTheme = createMuiTheme ({
	palette: {
		primary: {
			main: "#FCCA64"
		},
		secondary: {
			main: "#F04E3E"
		}
	}
})

function App() {
	return (
        <MuiThemeProvider theme={myTheme}>
			<Header />
		</MuiThemeProvider>
	)
}

export default App
