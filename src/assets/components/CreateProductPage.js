import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles'
import Box from '@material-ui/core/Box'

const FormDiv = styled(Box)({
    backgroundColor: "#FFFCEF",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100vw",
    height: "100vh",
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
    backgroundColor: "#FFFFFF"
})


export default function CreateProductPage() {

    return (
        <div>
            <FormDiv >
                <NamesInputField variant="outlined" placeholder="Nome"/>
                <NamesInputField variant="outlined" placeholder="Sobrenome"/>
                <InputField variant="outlined" placeholder="Nome do produto"/>
                <SelectOption
                    native
                    variant="outlined"
                >
                    <option value=""/>
                    <option>Instrumentos</option>
                    <option>Mídia</option>
                    <option>Colecionáveis</option>
                </SelectOption>  
                <DescriptionInputField variant="outlined" multiline rows={10} placeholder={"Descrição"}/>
                <InputField variant="outlined" placeholder={"Link de imagem do produto (URL)"}/>
                <div>Imagem entrará aqui</div>
                <SelectOption 
                    native
                    variant="outlined"
                >
                    <option value=""/>
                    <option>Cartão</option>
                    <option>Boleto</option>
                    <option>Transferência</option>
                </SelectOption>
                <Button variant="contained" color="secondary">Enviar</Button>
            </FormDiv>
        </div>
    )
}