import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal';

export function Header() {
   
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt urban" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}