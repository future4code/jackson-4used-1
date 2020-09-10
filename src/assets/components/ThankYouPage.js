import React from "react";
import styled from "styled-components";
import Logo from "../images/4used-logo.png"

const ThankYouPage = styled.div`
  display: grid;
  justify-items: center;
  background-color: #fffcef;
  color: #43ada5;
  margin-top: 5vh;
  `

export default function ThankYou() {
  return (
    <ThankYouPage>
        <img
          src={Logo}
          alt="Volte sempre!"
        />
          <h2>Mercadoria registrada com sucesso!</h2>
 
    </ThankYouPage>
  );
}
