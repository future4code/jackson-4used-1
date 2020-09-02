import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import Header from './components/Header'
import MediaCard, { CardMedia } from './components/imgCard';

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
			< MediaCard/>
			
		</MuiThemeProvider>
	)
}

export default App
