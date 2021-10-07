import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt urban" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}