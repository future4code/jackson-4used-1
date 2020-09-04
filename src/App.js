import React from 'react'
import { createMuiTheme, MuiThemeProvider, AppBar } from "@material-ui/core"
import Header from './assets/components/Header'
import shoppingCart, {Appbar} from './assets/components/shoppingCart'
import MediaCard, { CardMedia } from './assets/components/imgCard'
import DetailsProduct from './assets/components/DetailsProduct'
import Footer from './assets/components/Footer'
import ProductsList from './assets/components/ProductsList'
import HomePage from './assets/components/HomePage'
import LoginPage from './assets/components/LoginPage'
import CreateProductPage from './assets/components/CreateProductPage'
// import ShoppingCart from "./assets/components/shoppingCart"

const myTheme = createMuiTheme ({
	palette: {
		primary: {
			main: "#F04E3E" //Tart Orange - Vermelho Jamaica
		},
		secondary: {
			main: "#43ADA5" // Verdigris - Verde Jamaica
		}
	}
})

<<<<<<< HEAD
function App() {
	return (
        <MuiThemeProvider theme={myTheme}>
			<Header />
			{/* <HomePage />
			
			
=======
export default class App extends React.Component {
	state = {
		currentSection: ''
	}

	goToHomePage = () => {
		this.setState({currentSection: "home-page"})
	}
	
	goToProductsList = () => {
		this.setState({currentSection: "products-list"})
	}

	goToDetailsProduct = () => {
		this.setState({currentSection: "details-product"})
	}
>>>>>>> master

	goToLoginPage = () => {
		this.setState({currentSection: "login-page"})
	}

	goToCreateProduct = () => {
		this.setState({currentSection: "create-product-page"})
	}

<<<<<<< HEAD
			< MediaCard/>
			<AppBar/>
			
			<DetailsProduct /> */}
			<ProductsList />
			
			<Footer />
		</MuiThemeProvider>
	)
}
=======
	goToShoppingCart = () => {
		this.setState({currentSection: "shopping-cart"})
	}

	render () {
		const currentSection = this.state.currentSection
		let selectedSection = ''
		switch (currentSection) {
			case "home-page":
				selectedSection = (
					<HomePage />
				)
				break
			case "products-list":
				selectedSection = (
					<ProductsList />
				)
				break
			case "details-product":
				selectedSection = (
					<DetailsProduct />
				)
				break
			case "login-page":
				selectedSection = (
					<LoginPage />
				)
				break
			case "create-product-page":
				selectedSection = (
					<CreateProductPage />
				)
				break
			case "shopping-cart":
				selectedSection = (
					<shoppingCart />
				)
			default:
				this.setState({currentSection: "home-page"})
				break
		}
>>>>>>> master

		return (
			<MuiThemeProvider theme={myTheme}>
				<Header 
					onClickHome={this.goToHomePage}
					onClickProducts={this.goToProductsList}
					onClickLogin={this.goToLoginPage}
					onClickSell={this.goToCreateProduct}
					onClickShoppingCart={this.goToShoppingCart}
				/>
				{ selectedSection }
				<Footer />
			</MuiThemeProvider>
		)
	}
}