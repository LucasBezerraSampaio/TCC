import styled from "styled-components";

const StyledCarrinho = styled.div `
    
    background-color: #333333;
     height:  100vh;
    
    

    .agrupamento-carrinho {
        display: flex;
        flex-direction: row;
        background-color:  #282828;
        border-radius: 1em;
        width: 95%;
        margin-left: 2em;
        align-items: center;
        padding: 4em;
        position: relative;

    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .hr {
        border: solid 0.7px #C4C4C4;
        margin-right: 6.3em;
        margin-left: 4.3em;
        width: auto;
    }

    .logo img {
        width: 20em;
        height: 20em;
    }

    .logo {
        margin-left: 4em;
    }

    .titulo {
        color: #F0AC54;
        font-size: 3.5em;
        margin-top: 2em;
        margin-left: .7em;
        margin-bottom: .5em;
        font-family: MontserratBold;
    }

    .texto {
        font-size: 44px;
        color: #ffffff;
        width: 10.4em;
        margin-left: 3em;
        font-family: MontserratBold;
      
    }

    .botao  {
        margin-left: 6em;
        bottom: 4.5em;
        position: absolute;
        font-size: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: .8em;
        padding-bottom: .8em; 
    }

    
`

export { StyledCarrinho }