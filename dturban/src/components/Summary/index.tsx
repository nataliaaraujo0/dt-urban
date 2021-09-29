import EntradasImg from '../../assets/entradas.svg';
import SaidasImg from '../../assets/saidas.svg';
import TotalImg from '../../assets/total.svg';

import { Container } from "./style";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="Entradas" />
                </header>
                <strong>R$100,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidasImg} alt="Saídas" />
                </header>
                <strong> - R$80,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$20,00</strong>
            </div>
        </Container>
    );
}