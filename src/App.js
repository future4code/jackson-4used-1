import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Header from './components/Header'
import DetailsProduct from './components/DetailsProduct'

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
			<DetailsProduct />
		</MuiThemeProvider>
	)
}

export default App
