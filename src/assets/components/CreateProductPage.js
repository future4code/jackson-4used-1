import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import { InputLabel, FormControl } from '@material-ui/core';
import axios from "axios"
import { baseUrl } from "../constants/axiosConstants"

const FormDiv = styled(Grid)({
    backgroundColor: "#FFFCEF",
    display: "grid",
    gap: "1em",
    alignItems: "center",
    justifyItems: "center",
    width: "100vw",
    marginBottom: "50px"
})

const InputField = styled(TextField)({
    width: "30vw",
    backgroundColor: "#FFFFFF"
})

const NamesInputField = styled(TextField)({
    width: "30vw",
    backgroundColor: "#FFFFFF"
})

const DescriptionInputField = styled(TextField)({
    width: "30vw",
    backgroundColor: "#FFFFFF"
})

const SelectOption = styled(Select)({
    width: "30vw",
    backgroundColor: "#FFFFFF",
})


export default class CreateProductPage extends React.Component {
    state = {
        firstNameValue: "",
        lastNameValue: "",
        productNameValue: "",
        categoryValue: "",
        priceValue: 0,
        descriptionValue: "",
        urlLinkValue: "",
        paymentMethodValue: "",
        installmentsValue: 1
    }

    registerNewProduct = () => {
        const body = {
            sellerFirstName: this.state.firstNameValue,
            sellerLastName: this.state.lastNameValue,
            name: this.state.productNameValue,
            description: this.state.descriptionValue,
            price: this.state.priceValue,
            paymentMethod: this.state.paymentMethodValue,
            category: this.state.categoryValue,
            photos: [this.state.urlLinkValue],
            installments: this.state.installmentsValue
        }

        axios.post( baseUrl, body)
        .then((response) => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

        console.log(body)
    }

    handleFirstNameChange = (event) => {
        this.setState({firstNameValue: event.target.value})
    }

    handleLastNameChange = (event) => {
        this.setState({lastNameValue: event.target.value})
    }

    handleProductNameChange = (event) => {
        this.setState({productNameValue: event.target.value})
    }

    handleCategoryChange = (event) => {
        this.setState({categoryValue: event.target.value})
    }

    handlePriceChange = (event) => {
        this.setState({priceValue: event.target.value})
    }

    handleDescriptionChange = (event) => {
        this.setState({descriptionValue: event.target.value})
    }

    handleUrlLinkChange = (event) => {
        this.setState({
            urlLinkValue: event.target.value
        })
    }

    handlePaymentMethodChange = (event) => {
        this.setState({paymentMethodValue: event.target.value})
    }

    handleInstallmentsChange = (event) => {
        this.setState({installmentsValue: event.target.value})
    }

    render() {
        console.log(this.state.firstNameValue)
        console.log(this.state.lastNameValue)
        console.log(this.state.productNameValue)
        console.log(this.state.categoryValue)
        console.log(this.state.priceValue)
        console.log(this.state.descriptionValue)
        console.log(this.state.urlLinkValue)
        console.log(this.state.paymentMethodValue)
        console.log(this.state.installmentsValue)

        return (
            <div>
                <FormDiv container>
                    <h2>Cadastro de produto</h2>
                    <NamesInputField type="text" name="firstName" variant="outlined" placeholder="Nome" value={this.state.firstNameValue} onChange={this.handleFirstNameChange}/>
                    <NamesInputField type="text" name="lastName" variant="outlined" placeholder="Sobrenome" value={this.state.lastNameValue} onChange={this.handleLastNameChange}/>
                    <InputField type="text" name="productName" variant="outlined" placeholder="Nome do produto" value={this.state.productNameValue} onChange={this.handleProductNameChange}/>
                    <FormControl variant="outlined">
                        <InputLabel id="category-label">Categoria</InputLabel>
                        <SelectOption
                            name="category"
                            labelId="category-label"
                            label="Categoria"
                            native
                            variant="outlined"
                            value={this.state.categoryValue} 
                            onChange={this.handleCategoryChange}
                        >
                            <option value=""/>
                            <option value="instruments">Instrumentos</option>
                            <option value="media">Mídia</option>
                            <option value="collectible">Colecionáveis</option>
                        </SelectOption>  
                    </FormControl>
                    <InputField type="number" name="price" variant="outlined" placeholder="Preço" value={this.state.priceValue} onChange={this.handlePriceChange}/>
                    <DescriptionInputField type="text" name="description" variant="outlined" multiline rows={10} placeholder={"Descrição"} value={this.state.descriptionValue} onChange={this.handleDescriptionChange} />
                    <InputField type="text" name="urlLink" variant="outlined" placeholder="Link de imagem do produto (URL)" value={this.state.urlLinkValue} onChange={this.handleUrlLinkChange}/>
                    <FormControl variant="outlined">
                        <InputLabel id="payment-method-label">Forma de pagamento</InputLabel>
                        <SelectOption
                            name="paymentMethod"
                            labelId="form-of-payment-label"
                            label="Forma de pagamento"
                            native
                            variant="outlined"
                            value={this.state.paymentMethodValue} 
                            onChange={this.handlePaymentMethodChange}
                        >
                            <option value=""/>
                            <option value="card">Cartão de Crédito</option>
                            <option value="billet">Boleto</option>
                            <option value="transfer">Transferência</option>
                        </SelectOption>
                    </FormControl>
                    <Button variant="contained" color="secondary" onClick={this.registerNewProduct}>Enviar</Button>
                    <InputLabel id="payment-method-label">Quantidade de Parcelas</InputLabel>
                        <SelectOption
                            name="paymentMethod"
                            labelId="form-of-payment-label"
                            label="Forma de pagamento"
                            native
                            variant="outlined"
                            value={this.state.installmentsValue} 
                            onChange={this.handleInstallmentsChange}
                        >
                            <option value=""/>
                            <option value="card">1</option>
                            <option value="billet">2</option>
                            <option value="transfer">3</option>
                        </SelectOption>
                </FormDiv>
            </div>
        )
    }
}