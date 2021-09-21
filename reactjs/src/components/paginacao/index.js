import { StyledPaginacao } from "./styled";

export default function Paginacao() {
    return (
        <StyledPaginacao>
            <div className="button-mudar"> <button> <img src="/assets/images/voltar.svg" alt="" /> Anterior  </button> </div>
            <div className="numero-pagina"> 1 </div>
            <div className="numero-pagina"> 2 </div>
            <div className="numero-pagina"> 3 </div>
            <div className="numero-pagina"> 4 </div>
            <div className="button-mudar"> <button> Próximo <img src="/assets/images/avancar.svg" alt="" /> </button></div>
        </StyledPaginacao> 
    )
}