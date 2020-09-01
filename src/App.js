import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

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
			Teste
		</MuiThemeProvider>
	)
}

export default App
