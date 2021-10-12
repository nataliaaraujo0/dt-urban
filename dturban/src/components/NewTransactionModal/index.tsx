import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    type="text"
                />

                <input
                    placeholder="Valor"
                    type="number"
                />

                <TransactionTypeContainer>
                    <button>

                    </button>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    type="text"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}