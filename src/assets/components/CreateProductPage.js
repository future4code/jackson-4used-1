import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import { InputLabel, FormControl } from '@material-ui/core';
import axios from "axios"

const FormDiv = styled(Grid)({
    backgroundColor: "#FFFCEF",
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    width: "100vw",
    height: "100vh",
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


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products"

export default class CreateProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNameValue: "",
            lastNameValue: "",
            productNameValue: "",
            categoryValue: "",
            priceValue: "",
            descriptionValue: "",
            urlLinkValue: "",
            paymentMethodValue: "",
            installmentsValue: ""
        }
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
            photos: this.state.urlLinkValue,
            installments: this.state.installmentsValue
        }

        axios.post(baseUrl, body, {headers: {'Content-Type': "application/json"}})
        .then (response => {
            console.log(response)
        })
        .catch (error => {
            console.log(error)
        })
    }

    handleInputChange = (event) => {
        console.log([event.target.name], event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <FormDiv container>
                    <h2>Cadastro de produto</h2>
                    <NamesInputField type="text" name="firstName" variant="outlined" placeholder="Nome" onChange={this.handleInputChange}/>
                    <NamesInputField type="text" name="lastName" variant="outlined" placeholder="Sobrenome" onChange={this.handleInputChange}/>
                    <InputField type="text" name="productName" variant="outlined" placeholder="Nome do produto" onChange={this.handleInputChange}/>
                    <FormControl variant="outlined">
                        <InputLabel id="category-label">Categoria</InputLabel>
                        <SelectOption
                            name="category"
                            labelId="category-label"
                            label="Categoria"
                            native
                            variant="outlined"
                            onChange={this.handleInputChange}
                        >
                            <option value=""/>
                            <option value="instruments">Instrumentos</option>
                            <option value="media">Mídia</option>
                            <option value="collectible">Colecionáveis</option>
                        </SelectOption>  
                    </FormControl>
                    <InputField type="number" name="price" variant="outlined" placeholder="Preço" onChange={this.handleInputChange}/>
                    <DescriptionInputField type="text" name="description" variant="outlined" multiline rows={10} placeholder={"Descrição"} onChange={this.handleInputChange}/>
                    <InputField type="text" name="urlLink" variant="outlined" placeholder="Link de imagem do produto (URL)" onChange={this.handleInputChange}/>
                    <FormControl variant="outlined">
                        <InputLabel id="payment-method-label">Forma de pagamento</InputLabel>
                        <SelectOption
                            name="paymentMethod"
                            labelId="form-of-payment-label"
                            label="Forma de pagamento"
                            native
                            variant="outlined"
                            onChange={this.handleInputChange}
                        >
                            <option value=""/>
                            <option value="card">Cartão</option>
                            <option value="billet">Boleto</option>
                            <option value="transfer">Transferência</option>
                        </SelectOption>
                    </FormControl>
                    <Button variant="contained" color="secondary" onClick={this.registerNewProduct}>Enviar</Button>
                </FormDiv>
            </div>
        )
    }
}