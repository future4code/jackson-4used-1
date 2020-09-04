import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}))

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


export default function CreateProductPage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormDiv container >
                <h2>Cadastro de produto</h2>
                <NamesInputField variant="outlined" placeholder="Nome"/>
                <NamesInputField variant="outlined" placeholder="Sobrenome"/>
                <InputField variant="outlined" placeholder="Nome do produto"/>
                <FormControl variant="outlined">
                    <InputLabel id="category-label">Categoria</InputLabel>
                    <SelectOption
                        labelId="category-label"
                        label="Categoria"
                        native
                        variant="outlined"
                    >
                        <option value=""/>
                        <option>Instrumentos</option>
                        <option>Mídia</option>
                        <option>Colecionáveis</option>
                    </SelectOption>  
                </FormControl>
                <DescriptionInputField variant="outlined" multiline rows={10} placeholder={"Descrição"}/>
                <InputField variant="outlined" placeholder={"Link de imagem do produto (URL)"}/>
                <div>Imagem entrará aqui</div>
                <FormControl variant="outlined">
                    <InputLabel id="form-of-payment-label">Forma de pagamento</InputLabel>
                    <SelectOption
                        labelId="form-of-payment-label"
                        label="Forma de pagamento"
                        native
                        variant="outlined"
                    >
                        <option value=""/>
                        <option>Cartão</option>
                        <option>Boleto</option>
                        <option>Transferência</option>
                    </SelectOption>
                </FormControl>
                <Button variant="contained" color="secondary">Enviar</Button>
            </FormDiv>
        </div>
    )
}