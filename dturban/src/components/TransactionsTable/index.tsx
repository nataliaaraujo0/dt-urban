import { useEffect } from "react";
import { Container } from "../TransactionsTable/styles";

export function TransactionsTable() {

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))

    }, [])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Ceo</td>
                        <td className="deposit">R$1.500,00</td>
                        <td>Investimento</td>
                        <td>01/10/2021</td>
                    </tr>

                    <tr>
                        <td>Sócio</td>
                        <td className="deposit">R$800,00</td>
                        <td>investimento</td>
                        <td>15/10/2021</td>
                    </tr>

                    <tr>
                        <td>Etiquetas</td>
                        <td className="withdraw">-R$80,00</td>
                        <td>Fornecedor</td>
                        <td>15/09/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}