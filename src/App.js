import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Header from './components/Header'
import Footer from './components/Footer'

const myTheme = createMuiTheme ({
	palette: {
		primary: {
			main: "#FCCA64" //Maximum Yellow - Amarelo Jamaica
		},
		secondary: {
			main: "#43ADA5" // Verdigris - Verde Jamaica
		}
	}
})

function App() {
	return (
        <MuiThemeProvider theme={myTheme}>
			<Header />
			<Footer />
		</MuiThemeProvider>
	)
}

export default App
