import { Container } from "./styles";

export function TransactionsTable() {
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
                        <td>Touca Preta</td>
                        <td>R$80,00</td>
                        <td>Touca</td>
                        <td>22/09/2021</td>
                    </tr>
                    <tr>
                        <td>Camisa Oversize Mescla</td>
                        <td>R$150,00</td>
                        <td>T-shirt</td>
                        <td>24/09/2021</td>
                    </tr>

                    <tr>
                        <td>Camisa Tricoline Listrada</td>
                        <td>R$175,00</td>
                        <td>T-shirt</td>
                        <td>24/09/2021</td>
                    </tr>

                    <tr>
                        <td>Calça Oversize</td>
                        <td>R$179,00</td>
                        <td>Calça</td>
                        <td>29/09/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}