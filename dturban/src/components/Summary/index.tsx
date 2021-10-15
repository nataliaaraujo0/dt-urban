import React, { useContext } from 'react';
import EntradasImg from '../../assets/entradas.svg';
import SaidasImg from '../../assets/saidas.svg';
import TotalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    console.log(transactions);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="Entradas" />
                </header>
                <strong>R$2.300,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidasImg} alt="Saídas" />
                </header>
                <strong> - R$80,00</strong>
            </div>

            <div className="highLight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$2.220,00</strong>
            </div>
        </Container>
    );
}