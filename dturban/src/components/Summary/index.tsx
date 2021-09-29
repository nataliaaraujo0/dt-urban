import EntradasImg from '../../assets/entradas.svg'
import { Container } from "./style";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="Entradas" />
                </header>
            </div>
        </Container>
    );
}