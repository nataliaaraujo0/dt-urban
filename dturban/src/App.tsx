import styled from 'styled-components'
import { Dashoboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);

  }

  return (
    <>
      <Header />
      <Dashoboard />

      <Modal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

