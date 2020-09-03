import React from 'react'
import { createMuiTheme, MuiThemeProvider, AppBar } from "@material-ui/core"
import Header from './assets/components/Header'
import shoppingCart, {Appbar} from './assets/components/shoppingCart'
import MediaCard, { CardMedia } from './assets/components/imgCard';
import DetailsProduct from './assets/components/DetailsProduct'
import Footer from './assets/components/Footer'
import ProductsList from './assets/components/ProductsList'
import HomePage from './components/HomePage';
import LoginPage from './assets/components/LoginPage'

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
			{/* <HomePage />
			
			<ProductsList />


			< MediaCard/>
			<AppBar/>
			
			<DetailsProduct /> */}
			
			<Footer />
		</MuiThemeProvider>
	)
}

export default App
