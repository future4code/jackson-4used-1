import React from 'react'
import { createMuiTheme, MuiThemeProvider, AppBar } from "@material-ui/core"
import Header from './assets/components/Header'
import shoppingCart, {Appbar} from './assets/components/shoppingCart'

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

export default class App extends React.Component {
	state = {
		currentSection: '',
		searchValue: '',
		searchFilter: '',
		productId: ''
	}

	goToHomePage = () => {
		this.setState({currentSection: "home-page"})
	}
	
	goToProductsList = () => {
		this.setState({
			currentSection: "products-list",
			searchFilter: ""
		})
	}

	goToLoginPage = () => {
		this.setState({currentSection: "login-page"})
	}

	goToCreateProduct = () => {
		this.setState({currentSection: "create-product-page"})
	}

	goToShoppingCart = () => {
		this.setState({currentSection: "shopping-cart"})
	}

	onChangeSearch = e => {
		this.setState({searchValue: e.target.value})
	}

	filterProductsBySearch = () => {
		const searchValue = this.state.searchValue
		this.setState({
			searchFilter: searchValue,
			currentSection: "products-list",
			searchValue: ""
		})

	}

	goToProductDetails = () => {
		this.setState({currentSection: "details-product"})
	}

	onClickCard = (id) => {
		this.setState({
		//   detail: !this.state.detail,
		//   page: !true
		productId: id
		})
		this.goToProductDetails()
	  }

	render () {
		const currentSection = this.state.currentSection
		let selectedSection = ''
		switch (currentSection) {
			case "home-page":
				selectedSection = (
					<HomePage 
						openProductDetails={this.onClickCard}
					/>
				)
				break
			case "products-list":
				selectedSection = (
					<ProductsList 
						searchFilter={this.state.searchFilter}
						openProductDetails={this.onClickCard}
					/>
				)
				break
			case "details-product":
				selectedSection = (
					<DetailsProduct 
						idProduct={this.state.productId}
					/>
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
				break
			default:
				this.setState({currentSection: "home-page"})
				break
		}

		return (
			<MuiThemeProvider theme={myTheme}>
				<Header 
					onClickHome={this.goToHomePage}
					onClickProducts={this.goToProductsList}
					onClickLogin={this.goToLoginPage}
					onClickSell={this.goToCreateProduct}
					onClickShoppingCart={this.goToShoppingCart}
					handleSearchValue={this.state.searchValue}
					onChangeSearch={this.onChangeSearch}
					goToSearchResults={this.filterProductsBySearch}
				/>
				{ selectedSection }
				<Footer />
			</MuiThemeProvider>
		)
	}
}